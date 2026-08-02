import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkshopPage from './shared/WorkshopChrome';
import PhoneField from './shared/PhoneField';
import { ROUTES } from './shared/constants';
import { isValidGulfPhone, normalizePhone, saveLocalRecord, submitConsultationRequest } from './shared/bitrix';
import { supabase } from './shared/supabaseClient';

const TOOL_OPTIONS = [
  'واتساب شخصي',
  'إكسل / دفتر يدوي',
  'نظام CRM حالي',
  'منصة زد (Zid)',
  'منصة سلة (Salla)',
  'لا يوجد نظام بعد',
];

const FOCUS_OPTIONS = [
  'المبيعات ومتابعة العملاء المحتملين',
  'خدمة العملاء والدعم',
  'إدارة الطلبات والمخزون',
  'التسويق والمتابعة الآلية',
  'التقارير والتحليلات',
];

const APPOINTMENT_MINUTES = 15;
const TIME_MIN = '08:00';
const TIME_MAX = '16:30'; // business hours only — mornings + early afternoon
const SLOT_STEP_MINUTES = 30;
const DATE_OPTIONS_COUNT = 14;

const ARABIC_WEEKDAYS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const ARABIC_MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

function addMinutes(timeStr, minutesToAdd) {
  const [h, m] = timeStr.split(':').map(Number);
  const total = h * 60 + m + minutesToAdd;
  const hh = String(Math.floor(total / 60) % 24).padStart(2, '0');
  const mm = String(total % 60).padStart(2, '0');
  return `${hh}:${mm}`;
}

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function formatTimeLabel(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const period = h < 12 ? 'ص' : 'م';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function buildTimeSlots(min, max, stepMinutes) {
  const [minH, minM] = min.split(':').map(Number);
  const [maxH, maxM] = max.split(':').map(Number);
  const slots = [];
  for (let t = minH * 60 + minM; t <= maxH * 60 + maxM; t += stepMinutes) {
    slots.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots(TIME_MIN, TIME_MAX, SLOT_STEP_MINUTES);
const TIME_PERIODS = [
  { label: '🌅 الصباح', slots: TIME_SLOTS.filter((t) => Number(t.slice(0, 2)) < 12) },
  { label: '☀️ الظهر', slots: TIME_SLOTS.filter((t) => Number(t.slice(0, 2)) >= 12) },
];

function TimeSlotPicker({ value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {TIME_PERIODS.filter((p) => p.slots.length).map((period) => (
        <div key={period.label}>
          <p className="wk-muted" style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 8 }}>{period.label}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(84px, 1fr))', gap: 8 }}>
            {period.slots.map((slot) => {
              const active = value === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onChange(slot)}
                  className="mono"
                  style={{
                    padding: '11px 8px',
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1.5px solid var(--wk-line)',
                    background: active ? 'var(--wk-violet)' : 'var(--wk-card2)',
                    color: active ? '#fff' : 'var(--wk-ink)',
                    transition: 'border-color .2s, background .2s',
                  }}
                  aria-pressed={active}
                >
                  {formatTimeLabel(slot)}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function buildDateOptions(count) {
  const out = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(base);
    d.setDate(d.getDate() + i);
    out.push({
      iso: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
      weekday: ARABIC_WEEKDAYS[d.getDay()],
      dayMonth: `${d.getDate()} ${ARABIC_MONTHS[d.getMonth()]}`,
    });
  }
  return out;
}

const DATE_OPTIONS = buildDateOptions(DATE_OPTIONS_COUNT);

function DatePicker({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, marginInline: -2, paddingInline: 2 }}>
      {DATE_OPTIONS.map((opt) => {
        const active = value === opt.iso;
        return (
          <button
            key={opt.iso}
            type="button"
            onClick={() => onChange(opt.iso)}
            style={{
              flex: '0 0 auto',
              minWidth: 74,
              padding: '10px 6px',
              borderRadius: 12,
              cursor: 'pointer',
              textAlign: 'center',
              border: '1.5px solid var(--wk-line)',
              background: active ? 'var(--wk-violet)' : 'var(--wk-card2)',
              color: active ? '#fff' : 'var(--wk-ink)',
              transition: 'border-color .2s, background .2s',
            }}
            aria-pressed={active}
          >
            <span style={{ display: 'block', fontSize: 11.5, opacity: 0.85, marginBottom: 4 }}>{opt.weekday}</span>
            <span className="mono" style={{ display: 'block', fontSize: 13.5, fontWeight: 700, whiteSpace: 'nowrap' }}>{opt.dayMonth}</span>
          </button>
        );
      })}
    </div>
  );
}

function ChipToggle({ options, selected, onToggle }) {
  return (
    <div className="wk-pill-row">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className="wk-btn wk-btn-sm"
            style={{
              background: active ? 'var(--wk-violet)' : 'var(--wk-card2)',
              color: active ? '#fff' : 'var(--wk-ink)',
              border: '1px solid var(--wk-line)',
            }}
            aria-pressed={active}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function buildSummary({ name, storeName, whatsapp, email, tools, focusAreas, challenge, preferredDate, preferredTime, notes }) {
  const lines = [
    'طلب استشارة ١٥ دقيقة — ما بعد ورشة نقطتين',
    '',
    `الاسم: ${name}`,
    `المتجر/النشاط: ${storeName}`,
    `واتساب: ${whatsapp}`,
  ];
  if (email) lines.push(`البريد: ${email}`);
  lines.push('', `الأدوات الحالية: ${tools.length ? tools.join('، ') : '—'}`);
  lines.push(`المجالات المطلوب تطويرها: ${focusAreas.length ? focusAreas.join('، ') : '—'}`);
  if (challenge.trim()) lines.push(`أكبر تحدٍ تقني حالياً: ${challenge.trim()}`);
  lines.push('', `الوقت المفضل للمكالمة: ${preferredDate} — ${preferredTime}`);
  if (notes.trim()) lines.push(`ملاحظات إضافية: ${notes.trim()}`);
  return lines.join('\n');
}

export default function Workshop15Min() {
  const [name, setName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [dial, setDial] = useState('966');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tools, setTools] = useState([]);
  const [focusAreas, setFocusAreas] = useState([]);
  const [challenge, setChallenge] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = true;
    if (!storeName.trim()) nextErrors.storeName = true;
    if (!isValidGulfPhone(dial, phone)) nextErrors.phone = true;
    if (!preferredDate) nextErrors.preferredDate = true;
    if (!preferredTime) nextErrors.preferredTime = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const whatsapp = normalizePhone(dial, phone).e164;
    const summary = buildSummary({ name, storeName, whatsapp, email, tools, focusAreas, challenge, preferredDate, preferredTime, notes });
    const startTime = `${preferredDate}T${preferredTime}:00+03:00`;
    const endTime = `${preferredDate}T${addMinutes(preferredTime, APPOINTMENT_MINUTES)}:00+03:00`;

    setSubmitting(true);
    saveLocalRecord('workshop_15min_backup', {
      name, storeName, whatsapp, email, tools, focusAreas, challenge, preferredDate, preferredTime, notes,
    });

    const result = await submitConsultationRequest({
      name,
      storeName,
      phone: whatsapp,
      email,
      summary,
      startTime,
      endTime,
    });

    const { error } = await supabase.from('consultation_requests').insert({
      name,
      store_name: storeName,
      whatsapp,
      email: email || null,
      tools,
      focus_areas: focusAreas,
      challenge: challenge || null,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      notes: notes || null,
      bitrix_deal_id: result.matchedDealId,
      bitrix_lead_id: result.leadId,
      bitrix_activity_id: result.activityId,
    });
    if (error) console.error('15min supabase log failed:', error.message);

    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub} theme="bright">
        <section className="wk-section" style={{ paddingTop: 60 }}>
          <div className="wk-wrap-narrow wk-card wk-success">
            <div className="ic">✓</div>
            <h2 className="wk-h2">تم استلام طلبكم</h2>
            <p className="wk-lead">
              سيتواصل معكم فريق نقطتين لتأكيد موعد الاستشارة ({preferredDate} — {preferredTime}).
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>
              <Link to={ROUTES.hub} className="wk-btn wk-btn-primary">الرجوع للمحاور</Link>
            </div>
          </div>
        </section>
      </WorkshopPage>
    );
  }

  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub} theme="bright">
      <section className="wk-section" style={{ paddingTop: 28 }}>
        <div className="wk-wrap-narrow">
          <div className="wk-center" style={{ marginBottom: 24 }}>
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>لمن حضر الورشة · ⏱️ ١٥ دقيقة</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,34px)' }}>📞 احجز استشارتك التقنية</h1>
            <p className="wk-lead" style={{ marginTop: 10 }}>
              تقييم سريع لأدواتكم الحالية وخارطة طريق مبدئية لتطوير المبيعات وخدمة العملاء
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className={`wk-field${errors.name ? ' error' : ''}`}>
                <label>الاسم <span className="req">*</span></label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك الكامل" />
                <div className="wk-field-error-msg">الرجاء إدخال الاسم</div>
              </div>
              <div className={`wk-field${errors.storeName ? ' error' : ''}`}>
                <label>اسم المتجر / النشاط <span className="req">*</span></label>
                <input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="اسم متجرك أو نشاطك" />
                <div className="wk-field-error-msg">الرجاء إدخال اسم المتجر أو النشاط</div>
              </div>
              <PhoneField dial={dial} onDialChange={setDial} value={phone} onChange={setPhone} error={errors.phone} />
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>البريد الإلكتروني <span className="opt">(اختياري)</span></label>
                <input type="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>ما الأدوات التي تستخدمونها حالياً؟</p>
              <ChipToggle options={TOOL_OPTIONS} selected={tools} onToggle={(v) => setTools((prev) => toggle(prev, v))} />
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>ما المجالات التي ترغبون بتطويرها؟</p>
              <ChipToggle options={FOCUS_OPTIONS} selected={focusAreas} onToggle={(v) => setFocusAreas((prev) => toggle(prev, v))} />
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>أكبر تحدٍ تقني تواجهونه حالياً <span className="opt">(اختياري)</span></label>
                <textarea value={challenge} onChange={(e) => setChallenge(e.target.value)} placeholder="اكتب بإيجاز..." />
              </div>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <h3 style={{ marginBottom: 14 }}>الوقت المفضل للمكالمة</h3>
              <div className={`wk-field${errors.preferredDate ? ' error' : ''}`}>
                <label>التاريخ <span className="req">*</span></label>
                <DatePicker value={preferredDate} onChange={setPreferredDate} />
                <div className="wk-field-error-msg" style={{ marginTop: 10 }}>الرجاء اختيار تاريخ</div>
              </div>
              <div className={`wk-field${errors.preferredTime ? ' error' : ''}`} style={{ marginBottom: 0 }}>
                <label>الوقت <span className="req">*</span></label>
                <TimeSlotPicker value={preferredTime} onChange={setPreferredTime} />
                <div className="wk-field-error-msg" style={{ marginTop: 10 }}>الرجاء اختيار وقت</div>
              </div>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>ملاحظات إضافية <span className="opt">(اختياري)</span></label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي سياق إضافي يساعدنا على التحضير للمكالمة..." />
              </div>
            </div>

            <button type="submit" className="wk-btn wk-btn-primary wk-btn-block" disabled={submitting}>
              {submitting ? 'جاري الإرسال...' : 'احجز استشارتي المجانية'}
            </button>
          </form>
        </div>
      </section>
    </WorkshopPage>
  );
}
