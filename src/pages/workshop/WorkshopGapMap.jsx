import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkshopPage from './shared/WorkshopChrome';
import PhoneField from './shared/PhoneField';
import { ROUTES } from './shared/constants';
import { isValidGulfPhone, normalizePhone, saveLocalRecord, submitWorkshopLead } from './shared/bitrix';

const NEXT_STEP_OPTIONS = [
  { value: 'assessment', label: 'تقييم مجاني (٣٠ دقيقة، بلا التزام)' },
  { value: 'consultation', label: 'استشارة موجّهة' },
  { value: 'implementation', label: 'عرض تنفيذ مباشر' },
];

let rowIdSeed = 0;
function emptyRow() { rowIdSeed += 1; return { id: rowIdSeed, tool: '', problem: '', impact: '' }; }

export default function WorkshopGapMap() {
  const [rows, setRows] = useState([emptyRow(), emptyRow(), emptyRow(), emptyRow()]);
  const [priorityGap, setPriorityGap] = useState('');
  const [nextStep, setNextStep] = useState('');
  const [name, setName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [dial, setDial] = useState('966');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function updateRow(id, field, value) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }
  function addRow() { setRows((prev) => [...prev, emptyRow()]); }
  function removeRow(id) { setRows((prev) => prev.filter((r) => r.id !== id)); }

  async function handleSubmit(e) {
    e.preventDefault();
    const needsContact = Boolean(nextStep);
    const nextErrors = {};
    if (needsContact) {
      if (!name.trim()) nextErrors.name = true;
      if (!storeName.trim()) nextErrors.storeName = true;
      if (!isValidGulfPhone(dial, phone)) nextErrors.phone = true;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const filledRows = rows.filter((r) => r.tool.trim() || r.problem.trim() || r.impact.trim());
    const nextStepLabel = NEXT_STEP_OPTIONS.find((o) => o.value === nextStep)?.label;

    const payload = {
      rows: filledRows,
      priorityGap,
      nextStep,
      name,
      storeName,
      whatsapp: phone ? normalizePhone(dial, phone).e164 : '',
    };

    setSubmitting(true);
    saveLocalRecord('workshop_gapmap_backup', payload);

    if (needsContact) {
      const comments = [
        'الأدوات والمشاكل الحالية:',
        ...filledRows.map((r, i) => `${i + 1}) ${r.tool || '—'} | المشكلة: ${r.problem || '—'} | الأثر: ${r.impact || '—'}`),
        `أكبر فجوة: ${priorityGap || '—'}`,
        `الخطوة التالية المطلوبة: ${nextStepLabel}`,
      ].join('\n');

      await submitWorkshopLead({
        title: `خارطة الفجوات — ${storeName || name}`,
        name,
        phone: payload.whatsapp,
        comments,
        sourceDescription: 'نشاط: خارطة الفجوات',
      });
    }

    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
        <section className="wk-section" style={{ paddingTop: 60 }}>
          <div className="wk-wrap-narrow wk-card wk-success">
            <div className="ic">✓</div>
            <h2 className="wk-h2">تم استلام إجاباتك</h2>
            <p className="wk-lead">
              {nextStep
                ? 'سيتواصل معك فريق نقطتين قريباً بخصوص خطوتك التالية.'
                : 'شكراً لوقتك — يمكنك دائماً حجز تقييم مجاني من الزر أدناه.'}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>
              <Link to={ROUTES.book} className="wk-btn wk-btn-primary">احجز تقييمك المجاني</Link>
              <Link to={ROUTES.hub} className="wk-btn wk-btn-ghost">الرجوع للمحاور</Link>
            </div>
          </div>
        </section>
      </WorkshopPage>
    );
  }

  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
      <section className="wk-section" style={{ paddingTop: 28 }}>
        <div className="wk-wrap-narrow">
          <div className="wk-center" style={{ marginBottom: 24 }}>
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>نشاط تفاعلي · ⏱️ ١٠ دقائق</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,34px)' }}>🗺️ خارطة الفجوات</h1>
            <p className="wk-lead" style={{ marginTop: 10 }}>
              ١) دوّن أدواتك الحالية ٢) حدّد أكبر مشكلة ٣) اختر الخطوة التالية مع نقطتين
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="wk-card" style={{ marginBottom: 18, overflowX: 'auto' }}>
              <h3 style={{ marginBottom: 14 }}>أدواتك الحالية</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {rows.map((row, i) => (
                  <div key={row.id} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--wk-line)' : 'none', paddingBottom: 14 }}>
                    <div className="wk-field-row-3">
                      <div className="wk-field" style={{ marginBottom: 0 }}>
                        <label>الأداة / القناة الحالية</label>
                        <input value={row.tool} onChange={(e) => updateRow(row.id, 'tool', e.target.value)} placeholder="مثال: واتساب شخصي" />
                      </div>
                      <div className="wk-field" style={{ marginBottom: 0 }}>
                        <label>أكبر مشكلة تواجهها</label>
                        <input value={row.problem} onChange={(e) => updateRow(row.id, 'problem', e.target.value)} placeholder="مثال: لا متابعة منظّمة" />
                      </div>
                      <div className="wk-field" style={{ marginBottom: 0 }}>
                        <label>الأثر على المبيعات/العميل</label>
                        <input value={row.impact} onChange={(e) => updateRow(row.id, 'impact', e.target.value)} placeholder="مثال: فقدان عملاء" />
                      </div>
                    </div>
                    {rows.length > 1 && (
                      <button type="button" onClick={() => removeRow(row.id)} className="wk-muted" style={{ background: 'none', border: 'none', fontSize: 12, marginTop: 8, cursor: 'pointer' }}>
                        حذف الصف ×
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={addRow} className="wk-btn wk-btn-ghost wk-btn-sm" style={{ marginTop: 6 }}>
                + إضافة صف
              </button>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>أكبر فجوة أريد حلّها الآن</label>
                <textarea value={priorityGap} onChange={(e) => setPriorityGap(e.target.value)} placeholder="اكتب بإيجاز..." />
              </div>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>الخطوة التالية مع نقطتين <span className="opt">(اختياري)</span></label>
                <select value={nextStep} onChange={(e) => setNextStep(e.target.value)}>
                  <option value="">بدون — فقط أحفظ ملاحظاتي</option>
                  {NEXT_STEP_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
            </div>

            {nextStep && (
              <div className="wk-card" style={{ marginBottom: 18 }}>
                <h3 style={{ marginBottom: 14 }}>بيانات التواصل</h3>
                <div className={`wk-field${errors.name ? ' error' : ''}`}>
                  <label>الاسم <span className="req">*</span></label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك الكامل" />
                  <div className="wk-field-error-msg">الرجاء إدخال الاسم</div>
                </div>
                <div className={`wk-field${errors.storeName ? ' error' : ''}`}>
                  <label>اسم المتجر <span className="req">*</span></label>
                  <input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="اسم متجرك" />
                  <div className="wk-field-error-msg">الرجاء إدخال اسم المتجر</div>
                </div>
                <PhoneField dial={dial} onDialChange={setDial} value={phone} onChange={setPhone} error={errors.phone} />
              </div>
            )}

            <button type="submit" className="wk-btn wk-btn-primary wk-btn-block" disabled={submitting}>
              {submitting ? 'جاري الإرسال...' : 'إرسال'}
            </button>
          </form>
        </div>
      </section>
    </WorkshopPage>
  );
}
