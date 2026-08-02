import {
  BITRIX_15MIN_STAGE_ID,
  BITRIX_DEAL_CATEGORY_ID,
  BITRIX_DEFAULT_RESPONSIBLE_ID,
  BITRIX_REST_BASE,
  BITRIX_WEBHOOK_URL,
} from './constants';

const BACKUP_KEY = 'workshop_leads_backup';

function backupLocally(payload) {
  saveLocalRecord(BACKUP_KEY, payload);
}

// Generic append-to-list localStorage backup, used so every form submission
// is kept somewhere even before Supabase persistence (Day-2) is wired up.
export function saveLocalRecord(key, payload) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...payload, savedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  } catch {
    // localStorage unavailable, nothing more we can do client-side
  }
}

/**
 * Fires a Bitrix24 crm.lead.add call directly from the browser (same pattern
 * already shipped on /workshop). On any failure the payload is kept in
 * localStorage instead of being silently dropped, and the caller still gets
 * a resolved result so the UI can show its success state either way.
 */
export async function submitWorkshopLead({ title, name, phone, comments, sourceDescription, email, uf }) {
  const fields = {
    TITLE: title,
    SOURCE_ID: 'WEB',
    SOURCE_DESCRIPTION: sourceDescription || 'موقع ورشة الأدوات التقنية للتاجر',
  };
  if (name) fields.NAME = name;
  if (phone) fields.PHONE = [{ VALUE: phone, VALUE_TYPE: 'WORK' }];
  if (email) fields.EMAIL = [{ VALUE: email, VALUE_TYPE: 'WORK' }];
  if (comments) fields.COMMENTS = comments;
  if (uf) Object.assign(fields, uf);

  const payload = { fields, params: { REGISTER_SONET_EVENT: 'Y' } };

  try {
    const res = await fetch(BITRIX_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`bitrix webhook responded with ${res.status}`);
    const data = await res.json();
    return { ok: true, leadId: data?.result };
  } catch (err) {
    console.error('Bitrix24 lead submission failed, backing up locally:', err);
    backupLocally({ fields, error: String(err) });
    return { ok: false, error: err };
  }
}

/**
 * Generic Bitrix24 REST caller for methods beyond crm.lead.add (deal lookup,
 * timeline comments, activities). Throws on any error response so callers
 * can decide how to degrade — same webhook token as submitWorkshopLead,
 * which already has full CRM scope on this portal.
 */
async function bitrixCall(method, params) {
  const res = await fetch(`${BITRIX_REST_BASE}${method}.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) {
    throw new Error(data.error_description || data.error || `bitrix ${method} responded with ${res.status}`);
  }
  return data.result;
}

/**
 * Resolves a phone number to a contact via crm.duplicate.findbycomm, then
 * looks for that contact's most recent open (not won/lost) deal inside the
 * "نقطتين.." pipeline specifically (BITRIX_DEAL_CATEGORY_ID) — a match in
 * some other pipeline doesn't count. Returns null on no match — callers
 * fall back to creating a fresh lead.
 */
async function findActiveDealByPhone(phone) {
  try {
    const dup = await bitrixCall('crm.duplicate.findbycomm', { type: 'PHONE', values: [phone] });
    const contactIds = dup?.CONTACT || [];
    for (const contactId of contactIds) {
      const deals = await bitrixCall('crm.deal.list', {
        filter: { CONTACT_ID: contactId, CATEGORY_ID: BITRIX_DEAL_CATEGORY_ID, CLOSED: 'N' },
        select: ['ID', 'TITLE', 'COMMENTS', 'STAGE_ID', 'ASSIGNED_BY_ID'],
        order: { ID: 'DESC' },
      });
      if (deals?.length) return deals[0];
    }
    return null;
  } catch (err) {
    console.error('Bitrix24 deal lookup failed:', err);
    return null;
  }
}

/**
 * Creates a CRM "Meeting" activity wired to the calendar module
 * (PROVIDER_ID/PROVIDER_TYPE_ID = CALENDAR), which is what makes it show up
 * as a real appointment on the responsible person's Bitrix24 calendar
 * instead of just a plain to-do.
 */
async function createAppointment({ ownerTypeId, ownerId, subject, description, startTime, endTime, responsibleId, phone }) {
  return bitrixCall('crm.activity.add', {
    fields: {
      OWNER_TYPE_ID: ownerTypeId,
      OWNER_ID: ownerId,
      TYPE_ID: 1, // Meeting
      PROVIDER_ID: 'CALENDAR',
      PROVIDER_TYPE_ID: 'CALENDAR',
      SUBJECT: subject,
      DESCRIPTION: description,
      START_TIME: startTime,
      END_TIME: endTime,
      COMPLETED: 'N',
      DIRECTION: 2,
      RESPONSIBLE_ID: responsibleId || BITRIX_DEFAULT_RESPONSIBLE_ID,
      COMMUNICATIONS: phone ? [{ TYPE: 'PHONE', VALUE: phone }] : undefined,
    },
  });
}

/**
 * Handles a /15min consultation request end to end:
 *  - existing contact with an open deal in the "نقطتين.." pipeline → move
 *    the deal to the "15MIN INVITE" stage, update its comment field, log a
 *    timeline comment, and book the appointment on that deal
 *  - no match → create a fresh lead (same pattern as the other workshop
 *    forms) and book the appointment on that lead instead
 * Each Bitrix24 step is isolated in its own try/catch so a failure in one
 * (e.g. the appointment) never hides the parts that already succeeded.
 */
export async function submitConsultationRequest({ name, storeName, phone, email, summary, startTime, endTime }) {
  const subject = `استشارة ١٥ دقيقة — ${storeName || name}`;
  const deal = await findActiveDealByPhone(phone);

  if (deal) {
    try {
      const mergedComments = [deal.COMMENTS, summary].filter(Boolean).join('\n\n———\n\n');
      await bitrixCall('crm.deal.update', {
        id: deal.ID,
        fields: { COMMENTS: mergedComments, STAGE_ID: BITRIX_15MIN_STAGE_ID },
      });
    } catch (err) {
      console.error('Bitrix24 deal comment/stage update failed:', err);
    }

    try {
      await bitrixCall('crm.timeline.comment.add', { fields: { ENTITY_ID: deal.ID, ENTITY_TYPE: 'deal', COMMENT: summary } });
    } catch (err) {
      console.error('Bitrix24 deal timeline comment failed:', err);
    }

    let activityId = null;
    try {
      activityId = await createAppointment({
        ownerTypeId: 2,
        ownerId: deal.ID,
        subject,
        description: summary,
        startTime,
        endTime,
        responsibleId: deal.ASSIGNED_BY_ID,
        phone,
      });
    } catch (err) {
      console.error('Bitrix24 deal appointment creation failed:', err);
      backupLocally({ flow: 'consultation-appointment', dealId: deal.ID, startTime, endTime, error: String(err) });
    }

    return { ok: true, matchedDealId: deal.ID, activityId, leadId: null };
  }

  const leadResult = await submitWorkshopLead({
    title: subject,
    name,
    phone,
    email,
    comments: summary,
    sourceDescription: 'نشاط: طلب استشارة ١٥ دقيقة',
  });
  if (!leadResult.ok || !leadResult.leadId) {
    return { ok: leadResult.ok, matchedDealId: null, leadId: leadResult.leadId ?? null, activityId: null };
  }

  let activityId = null;
  try {
    activityId = await createAppointment({
      ownerTypeId: 1,
      ownerId: leadResult.leadId,
      subject,
      description: summary,
      startTime,
      endTime,
      phone,
    });
  } catch (err) {
    console.error('Bitrix24 appointment creation on new lead failed:', err);
    backupLocally({ flow: 'consultation-appointment', leadId: leadResult.leadId, startTime, endTime, error: String(err) });
  }

  return { ok: true, matchedDealId: null, leadId: leadResult.leadId, activityId };
}

// خليجي فقط — طول الرقم المحلي المتوقع بعد إزالة الصفر/مفتاح الدولة
export const GULF_COUNTRIES = {
  966: { len: 9, flag: '🇸🇦' },
  971: { len: 9, flag: '🇦🇪' },
  965: { len: 8, flag: '🇰🇼' },
  974: { len: 8, flag: '🇶🇦' },
  973: { len: 8, flag: '🇧🇭' },
  968: { len: 8, flag: '🇴🇲' },
};

export function normalizePhone(dial, rawValue) {
  let digits = (rawValue || '').replace(/\D/g, '');
  if (digits.indexOf(dial) === 0) digits = digits.slice(dial.length);
  digits = digits.replace(/^0+/, '');
  return { e164: `+${dial}${digits}`, local: digits };
}

export function isValidGulfPhone(dial, value) {
  const info = GULF_COUNTRIES[dial];
  if (!info) return false;
  return normalizePhone(dial, value).local.length === info.len;
}
