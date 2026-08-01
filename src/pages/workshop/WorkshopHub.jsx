import { Link } from 'react-router-dom';
import WorkshopPage, { WhatsAppFab } from './shared/WorkshopChrome';
import { ROUTES, waLink, WORKSHOP_DATE_LABEL } from './shared/constants';

const AGENDA = [
  { n: '١', label: 'افتتاح وتموضع', min: '٥' },
  { n: '٢', label: 'لماذا أكثر من متجر؟', min: '١٠' },
  { n: '٣', label: 'تشخيص سريع', min: '٨' },
  { n: '٤', label: 'أدوات المبيعات', min: '١٨' },
  { n: '٥', label: 'سيناريو مبيعات', min: '٧' },
  { n: '٦', label: 'أدوات خدمة العملاء', min: '١٨' },
  { n: '٧', label: 'دراسة حالة', min: '٨' },
  { n: '٨', label: 'قيّم متجرك', min: '١٠' },
  { n: '٩', label: 'الخاتمة والدعوة', min: '٦' },
];

const LINKS = [
  {
    href: ROUTES.diagnostic,
    emoji: '🔴',
    title: 'بطاقة التشخيص السريع',
    desc: '٦ أسئلة، ٨ دقائق — قيّم وضعك التشغيلي فورًا',
  },
  {
    href: ROUTES.scenario,
    emoji: '📱',
    title: 'سيناريو المبيعات',
    desc: 'نقاش جماعي مع مؤقّت — ٧ دقائق',
  },
  {
    href: ROUTES.gapMap,
    emoji: '🗺️',
    title: 'خارطة الفجوات',
    desc: 'قيّم متجرك واختر خطوتك التالية مع نقطتين',
  },
  {
    href: ROUTES.book,
    emoji: '📲',
    title: 'احجز تقييمك المجاني',
    desc: '٣٠ دقيقة، بلا التزام',
  },
  {
    href: ROUTES.feedback,
    emoji: '✅',
    title: 'قيّم الورشة',
    desc: 'استبيان سريع قبل المغادرة',
  },
];

export default function WorkshopHub() {
  return (
    <WorkshopPage hideChrome>
      <section className="wk-section" style={{ paddingTop: 48 }}>
        <div className="wk-wrap wk-center">
          <div className="wk-chip" style={{ marginBottom: 18 }}>
            <span className="wk-dots"><i style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--wk-violet2)', display: 'inline-block' }}></i></span>
            ورشة نقطتين · {WORKSHOP_DATE_LABEL}
          </div>
          <h1 className="wk-h1">🚀 الأدوات التقنية للتاجر<br />في المبيعات وخدمة العملاء</h1>
          <p className="wk-lead" style={{ marginTop: 14, maxWidth: 560, marginInline: 'auto' }}>
            كل أنشطة الورشة والاستبيانات — من هذه الصفحة الواحدة.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={ROUTES.diagnostic} className="wk-btn wk-btn-primary">ابدأ بالتشخيص السريع</Link>
            <a href={waLink('السلام عليكم، أتابع ورشة الأدوات التقنية للتاجر')} target="_blank" rel="noopener noreferrer" className="wk-btn wk-btn-ghost">
              واتساب نقطتين
            </a>
          </div>
        </div>
      </section>

      <section className="wk-section">
        <div className="wk-wrap">
          <div className="wk-grid wk-g3">
            {LINKS.map((item) => (
              <Link key={item.href} to={item.href} className="wk-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="wk-feature-ic">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wk-section">
        <div className="wk-wrap-narrow">
          <div className="wk-section-head wk-center" style={{ marginBottom: 28 }}>
            <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>جدول الورشة</div>
            <h2 className="wk-h2">٩٠ دقيقة بالضبط</h2>
          </div>
          <div className="wk-timeline">
            {AGENDA.map((step) => (
              <div className="wk-timeline-step" key={step.n}>
                <b>{step.n}. {step.label}</b>
                <p className="mono">{step.min} دقائق</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="wk-footer">
        <div className="wk-wrap">
          <p>© 2026 نقطتين — الأدوات التقنية للتاجر في المبيعات وخدمة العملاء</p>
        </div>
      </footer>
      <WhatsAppFab />
    </WorkshopPage>
  );
}
