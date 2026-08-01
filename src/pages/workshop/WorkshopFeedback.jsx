import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkshopPage from './shared/WorkshopChrome';
import PhoneField from './shared/PhoneField';
import RatingPills from './shared/RatingPills';
import { ROUTES } from './shared/constants';
import { isValidGulfPhone, normalizePhone, saveLocalRecord, submitWorkshopLead } from './shared/bitrix';

const RATING_FIELDS = [
  { key: 'clarity', label: 'ما مدى وضوح المحتوى المقدَّم؟' },
  { key: 'demoUsefulness', label: 'ما مدى فائدة العرض التطبيقي على Bitrix24؟' },
  { key: 'pacing', label: 'ما مدى ملاءمة مدة الورشة ووتيرتها؟' },
  { key: 'overall', label: 'بشكل عام، ما مدى رضاك عن الورشة؟' },
];

const CONTACT_OPTIONS = [
  { value: 'yes', label: 'نعم، خلال ٢٤-٤٨ ساعة' },
  { value: 'maybe', label: 'ربما لاحقاً' },
  { value: 'no', label: 'لا شكراً' },
];

export default function WorkshopFeedback() {
  const [ratings, setRatings] = useState({});
  const [mostUseful, setMostUseful] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [wantsContact, setWantsContact] = useState('');
  const [dial, setDial] = useState('966');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const needsPhone = wantsContact === 'yes';
    const nextErrors = {};
    if (!wantsContact) nextErrors.wantsContact = true;
    if (needsPhone && !isValidGulfPhone(dial, phone)) nextErrors.phone = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const whatsapp = phone ? normalizePhone(dial, phone).e164 : '';
    const payload = { ...ratings, mostUseful, suggestions, wantsContact, whatsapp };

    setSubmitting(true);
    saveLocalRecord('workshop_feedback_backup', payload);

    if (needsPhone) {
      const comments = [
        `الوضوح: ${ratings.clarity || '—'}/٥ | فائدة العرض: ${ratings.demoUsefulness || '—'}/٥ | الوتيرة: ${ratings.pacing || '—'}/٥ | الرضا العام: ${ratings.overall || '—'}/٥`,
        `الأكثر فائدة: ${mostUseful || '—'}`,
        `مقترحات: ${suggestions || '—'}`,
      ].join('\n');
      await submitWorkshopLead({
        title: 'تقييم الورشة — طلب تواصل',
        phone: whatsapp,
        comments,
        sourceDescription: 'نشاط: استبيان تقييم ما بعد الورشة',
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
            <h2 className="wk-h2">شكراً لتقييمكم</h2>
            <p className="wk-lead">نقدّر وقتكم — ملاحظاتكم تساعدنا على تحسين ورشاتنا القادمة.</p>
            <Link to={ROUTES.hub} className="wk-btn wk-btn-primary" style={{ marginTop: 18 }}>الرجوع للمحاور</Link>
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
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>قبل المغادرة</div>
            <h1 className="wk-h1" style={{ fontSize: 'clamp(24px,5vw,34px)' }}>✅ استبيان تقييم الورشة</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="wk-card" style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {RATING_FIELDS.map((f) => (
                <div key={f.key}>
                  <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 10 }}>{f.label}</p>
                  <RatingPills value={ratings[f.key]} onChange={(v) => setRatings((prev) => ({ ...prev, [f.key]: v }))} />
                </div>
              ))}
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className="wk-field">
                <label>ما الجزء الذي استفدت منه أكثر؟</label>
                <textarea value={mostUseful} onChange={(e) => setMostUseful(e.target.value)} />
              </div>
              <div className="wk-field" style={{ marginBottom: 0 }}>
                <label>ما الذي تقترح تحسينه؟</label>
                <textarea value={suggestions} onChange={(e) => setSuggestions(e.target.value)} />
              </div>
            </div>

            <div className="wk-card" style={{ marginBottom: 18 }}>
              <div className={`wk-field${errors.wantsContact ? ' error' : ''}`} style={{ marginBottom: wantsContact === 'yes' ? 16 : 0 }}>
                <label>هل ترغب أن يتواصل معك فريق نقطتين لحجز جلسة التقييم المجانية؟ <span className="req">*</span></label>
                <select value={wantsContact} onChange={(e) => setWantsContact(e.target.value)}>
                  <option value="" disabled>اختر إجابة</option>
                  {CONTACT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <div className="wk-field-error-msg">الرجاء اختيار إجابة</div>
              </div>
              {wantsContact === 'yes' && (
                <PhoneField dial={dial} onDialChange={setDial} value={phone} onChange={setPhone} error={errors.phone} />
              )}
            </div>

            <button type="submit" className="wk-btn wk-btn-primary wk-btn-block" disabled={submitting}>
              {submitting ? 'جاري الإرسال...' : 'إرسال التقييم'}
            </button>
          </form>
        </div>
      </section>
    </WorkshopPage>
  );
}
