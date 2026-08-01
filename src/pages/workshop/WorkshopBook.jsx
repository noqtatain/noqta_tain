import { QRCodeSVG } from 'qrcode.react';
import WorkshopPage from './shared/WorkshopChrome';
import { ROUTES, waLink } from './shared/constants';

const STEPS = [
  { n: '١', text: 'نراجع متجركم على زد ومسار عملائكم الحالي' },
  { n: '٢', text: 'نحدّد أكبر ١-٢ فجوة تؤثر على مبيعاتكم' },
  { n: '٣', text: 'نقترح خطوة عملية: استشارة أو حل مباشر' },
];

const WA_MESSAGE = 'السلام عليكم، أرغب بحجز جلسة تقييم مجانية لمتجري بعد حضور ورشة نقطتين';

export default function WorkshopBook() {
  const link = waLink(WA_MESSAGE);
  return (
    <WorkshopPage backLabel="الرجوع للمحاور" backHref={ROUTES.hub}>
      <section className="wk-section" style={{ paddingTop: 36 }}>
        <div className="wk-wrap-narrow wk-center">
          <div className="wk-eyebrow" style={{ justifyContent: 'center' }}>لا تفوّت الفرصة</div>
          <h1 className="wk-h1">جلسة تقييم مجانية لمتجرك</h1>
          <p className="wk-lead" style={{ marginTop: 10 }}>٣٠ دقيقة، بلا التزام</p>

          <div className="wk-card" style={{ marginTop: 28, textAlign: 'right' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {STEPS.map((s) => (
                <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span className="mono wk-gold-text" style={{ fontWeight: 700, fontSize: 18 }}>{s.n}</span>
                  <span style={{ fontSize: 15 }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          <a href={link} target="_blank" rel="noopener noreferrer" className="wk-btn wk-btn-primary wk-btn-block" style={{ marginTop: 24 }}>
            احجز عبر واتساب الآن
          </a>

          <div className="wk-card" style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: 'fit-content', marginInline: 'auto' }}>
            <p className="wk-muted" style={{ fontSize: 13 }}>📲 امسح رمز QR لحجز جلستكم الآن</p>
            <QRCodeSVG value={link} size={140} bgColor="transparent" fgColor="#F5F3FF" />
          </div>
        </div>
      </section>
    </WorkshopPage>
  );
}
