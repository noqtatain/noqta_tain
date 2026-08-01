import { BITRIX_WEBHOOK_URL } from './constants';

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
