import { useEffect, useState } from 'react';

const ACCESS_PASSWORD = 'Othman';
const ACCESS_KEY = 'bgt-offer-access';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=Tajawal:wght@300;400;500;700&display=swap');

  .bgt-offer, .bgt-offer *, .bgt-offer *::before, .bgt-offer *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .bgt-offer {
    --black: #0a0a0a;
    --white: #fafaf8;
    --purple: #6B46C1;
    --purple-light: #EDE9FE;
    --purple-mid: #8B5CF6;
    --gray-100: #F5F5F0;
    --gray-200: #E8E8E2;
    --gray-400: #ACACAC;
    --gray-600: #6B6B6B;
    --gray-800: #2D2D2D;
    --accent: #5B21B6;
    min-height: 100vh;
    background: var(--white);
    color: var(--black);
    font-family: 'IBM Plex Sans Arabic', 'Tajawal', sans-serif;
    font-size: 15px;
    line-height: 1.7;
  }

  .bgt-offer__gate {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    color: var(--white);
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .bgt-offer__gate::before {
    content: '';
    position: absolute;
    top: -180px;
    left: -180px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(107,70,193,0.35) 0%, transparent 70%);
    pointer-events: none;
  }

  .bgt-offer__gate-card {
    position: relative;
    z-index: 1;
    width: min(100%, 460px);
    border: 0.5px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    background: rgba(250,250,248,0.06);
    padding: 2rem;
    backdrop-filter: blur(16px);
  }

  .bgt-offer__gate-label {
    color: var(--purple-mid);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .bgt-offer__gate-title {
    font-family: 'Tajawal', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .bgt-offer__gate-text {
    color: var(--gray-400);
    font-size: 14px;
    line-height: 1.8;
  }

  .bgt-offer__gate-form {
    margin-top: 1.5rem;
  }

  .bgt-offer__gate-form label {
    display: block;
    color: var(--gray-400);
    font-size: 13px;
    margin-bottom: 0.5rem;
  }

  .bgt-offer__gate-form input {
    width: 100%;
    border: 0.5px solid rgba(255,255,255,0.16);
    border-radius: 14px;
    background: rgba(255,255,255,0.08);
    color: var(--white);
    font: inherit;
    outline: none;
    padding: 0.9rem 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .bgt-offer__gate-form input:focus {
    border-color: var(--purple-mid);
    box-shadow: 0 0 0 3px rgba(139,92,246,0.18);
  }

  .bgt-offer__gate-error {
    color: #fda4af;
    font-size: 13px;
    margin-top: 0.75rem;
  }

  .bgt-offer__gate-form button {
    width: 100%;
    border: none;
    border-radius: 14px;
    background: var(--purple);
    color: var(--white);
    cursor: pointer;
    font: inherit;
    font-weight: 600;
    margin-top: 1rem;
    padding: 0.9rem 1rem;
    transition: background 0.2s, transform 0.2s;
  }

  .bgt-offer__gate-form button:hover {
    background: var(--accent);
    transform: translateY(-1px);
  }

  .bgt-offer .cover {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 3rem;
    background: var(--black);
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .bgt-offer .cover::before {
    content: '';
    position: absolute;
    top: -200px; left: -200px;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(107,70,193,0.35) 0%, transparent 70%);
    pointer-events: none;
  }

  .bgt-offer .cover::after {
    content: '';
    position: absolute;
    bottom: -100px; right: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
    pointer-events: none;
  }

  .bgt-offer .cover-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative; z-index: 1;
  }

  .bgt-offer .logo-noq {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: var(--white);
  }
  .bgt-offer .logo-noq span { color: var(--purple-mid); }

  .bgt-offer .cover-badge {
    font-size: 11px;
    font-weight: 400;
    color: var(--gray-400);
    border: 0.5px solid rgba(255,255,255,0.15);
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.05em;
  }

  .bgt-offer .cover-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative; z-index: 1;
    padding: 4rem 0 2rem;
  }

  .bgt-offer .cover-tag {
    font-size: 11px;
    color: var(--purple-mid);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .bgt-offer .cover-title {
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -1px;
    margin-bottom: 1.5rem;
    font-family: 'Tajawal', sans-serif;
  }

  .bgt-offer .cover-title .highlight {
    color: transparent;
    -webkit-text-stroke: 1px rgba(139,92,246,0.6);
  }

  .bgt-offer .cover-sub {
    font-size: 16px;
    color: var(--gray-400);
    font-weight: 300;
    max-width: 440px;
    line-height: 1.8;
  }

  .bgt-offer .cover-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative; z-index: 1;
    border-top: 0.5px solid rgba(255,255,255,0.1);
    padding-top: 1.5rem;
  }

  .bgt-offer .cover-client {
    font-size: 13px;
    color: var(--gray-400);
  }
  .bgt-offer .cover-client strong {
    display: block;
    font-size: 16px;
    color: var(--white);
    font-weight: 500;
    margin-bottom: 2px;
  }

  .bgt-offer .cover-date {
    font-size: 12px;
    color: var(--gray-600);
    text-align: left;
  }

  .bgt-offer .page { padding: 5rem 3rem; max-width: 900px; margin: 0 auto; }

  .bgt-offer .section-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: var(--purple);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .bgt-offer h2 {
    font-size: 28px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
    color: var(--black);
    margin-bottom: 1rem;
    letter-spacing: -0.3px;
  }

  .bgt-offer .intro-text {
    font-size: 15px;
    color: var(--gray-600);
    max-width: 600px;
    line-height: 1.85;
    margin-bottom: 3rem;
  }

  .bgt-offer .problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--gray-200);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 4rem;
  }

  .bgt-offer .prob-item {
    background: var(--white);
    padding: 1.5rem;
  }

  .bgt-offer .prob-num {
    font-size: 32px;
    font-weight: 700;
    color: var(--gray-200);
    font-family: 'Tajawal', sans-serif;
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  .bgt-offer .prob-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 0.4rem;
  }

  .bgt-offer .prob-body {
    font-size: 12px;
    color: var(--gray-600);
    line-height: 1.6;
  }

  .bgt-offer .package-main {
    border: 1.5px solid var(--black);
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .bgt-offer .pkg-header {
    background: var(--black);
    color: var(--white);
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .bgt-offer .pkg-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--purple-mid);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .bgt-offer .pkg-title {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
  }

  .bgt-offer .pkg-price-block { text-align: left; }

  .bgt-offer .pkg-price {
    font-size: 36px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
    line-height: 1;
  }

  .bgt-offer .pkg-price sub {
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-400);
    vertical-align: middle;
  }

  .bgt-offer .pkg-price-note {
    font-size: 11px;
    color: var(--gray-600);
    margin-top: 4px;
  }

  .bgt-offer .services-list {
    padding: 0;
  }

  .bgt-offer .svc-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1.5rem;
    align-items: start;
    padding: 2rem 2.5rem;
    border-bottom: 0.5px solid var(--gray-200);
  }
  .bgt-offer .svc-item:last-child { border-bottom: none; }

  .bgt-offer .svc-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: var(--purple-light);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .bgt-offer .svc-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 4px;
  }

  .bgt-offer .svc-desc {
    font-size: 13px;
    color: var(--gray-600);
    line-height: 1.65;
  }

  .bgt-offer .svc-deliverables {
    margin-top: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .bgt-offer .tag {
    font-size: 11px;
    background: var(--gray-100);
    color: var(--gray-800);
    padding: 3px 10px;
    border-radius: 20px;
    border: 0.5px solid var(--gray-200);
  }

  .bgt-offer .tag.purple {
    background: var(--purple-light);
    color: var(--accent);
    border-color: #C4B5FD;
  }

  .bgt-offer .svc-price-tag {
    text-align: left;
    flex-shrink: 0;
  }

  .bgt-offer .svc-price-amount {
    font-size: 18px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
    color: var(--black);
    white-space: nowrap;
  }

  .bgt-offer .svc-price-period {
    font-size: 11px;
    color: var(--gray-400);
    display: block;
    text-align: left;
  }

  .bgt-offer .total-block {
    background: var(--gray-100);
    border-radius: 12px;
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    border: 0.5px solid var(--gray-200);
  }

  .bgt-offer .total-label { font-size: 13px; color: var(--gray-600); margin-bottom: 4px; }
  .bgt-offer .total-main { font-size: 32px; font-weight: 700; font-family: 'Tajawal', sans-serif; color: var(--black); }
  .bgt-offer .total-sub { font-size: 12px; color: var(--gray-400); margin-top: 4px; }
  .bgt-offer .total-right { text-align: left; }

  .bgt-offer .total-breakdown {
    font-size: 13px;
    color: var(--gray-600);
    line-height: 2;
  }
  .bgt-offer .total-breakdown span { color: var(--black); font-weight: 500; }

  .bgt-offer .timeline {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--gray-200);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--gray-200);
    margin-bottom: 4rem;
  }

  .bgt-offer .tl-item {
    background: var(--white);
    padding: 1.5rem;
  }

  .bgt-offer .tl-phase {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: var(--purple);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .bgt-offer .tl-week {
    font-size: 20px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
    color: var(--black);
    margin-bottom: 0.5rem;
  }

  .bgt-offer .tl-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 0.4rem;
  }

  .bgt-offer .tl-tasks {
    font-size: 12px;
    color: var(--gray-600);
    line-height: 1.7;
  }

  .bgt-offer .terms-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--gray-200);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--gray-200);
    margin-bottom: 4rem;
  }

  .bgt-offer .term-item {
    background: var(--white);
    padding: 1.5rem;
  }

  .bgt-offer .term-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--gray-400);
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .bgt-offer .term-value {
    font-size: 14px;
    color: var(--black);
    font-weight: 500;
    line-height: 1.5;
  }

  .bgt-offer .cta-block {
    border-radius: 16px;
    background: var(--black);
    color: var(--white);
    padding: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .bgt-offer .cta-block::before {
    content: '';
    position: absolute;
    top: -80px; left: 50%;
    transform: translateX(-50%);
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(107,70,193,0.4) 0%, transparent 70%);
    pointer-events: none;
  }

  .bgt-offer .cta-block h3 {
    font-size: 22px;
    font-weight: 700;
    font-family: 'Tajawal', sans-serif;
    margin-bottom: 0.5rem;
    position: relative; z-index: 1;
  }

  .bgt-offer .cta-block p {
    font-size: 14px;
    color: var(--gray-400);
    margin-bottom: 1.5rem;
    position: relative; z-index: 1;
  }

  .bgt-offer .cta-contacts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    position: relative; z-index: 1;
  }

  .bgt-offer .cta-contact-item {
    font-size: 13px;
    color: var(--gray-400);
  }
  .bgt-offer .cta-contact-item strong {
    display: block;
    color: var(--white);
    font-size: 15px;
    font-weight: 500;
  }

  .bgt-offer .doc-footer {
    padding: 2rem 3rem;
    border-top: 0.5px solid var(--gray-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--gray-400);
    max-width: 900px;
    margin: 0 auto;
  }

  .bgt-offer .divider-section {
    border: none;
    border-top: 0.5px solid var(--gray-200);
    margin: 4rem 0;
  }

  @media print {
    .bgt-offer .cover { min-height: 100vh; page-break-after: always; }
  }

  @media (max-width: 600px) {
    .bgt-offer .cover { padding: 2rem; }
    .bgt-offer .page { padding: 3rem 1.5rem; }
    .bgt-offer .problems-grid, .bgt-offer .timeline, .bgt-offer .terms-grid { grid-template-columns: 1fr; }
    .bgt-offer .pkg-header { flex-direction: column; gap: 1rem; }
    .bgt-offer .pkg-price-block { text-align: right; }
    .bgt-offer .svc-item { grid-template-columns: auto 1fr; }
    .bgt-offer .svc-price-tag { grid-column: 2; }
    .bgt-offer .total-block { flex-direction: column; gap: 1.5rem; }
    .bgt-offer .total-right { text-align: right; }
    .bgt-offer .cta-contacts { flex-direction: column; gap: 1rem; }
    .bgt-offer .cover-title { font-size: 32px; }
    .bgt-offer .doc-footer { flex-direction: column; gap: 0.75rem; align-items: flex-start; padding: 2rem 1.5rem; }
  }
`;

const BgtOffer = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const savedAccess = localStorage.getItem(ACCESS_KEY);
    if (savedAccess === 'granted') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = (event) => {
    event.preventDefault();

    if (password.trim() === ACCESS_PASSWORD) {
      localStorage.setItem(ACCESS_KEY, 'granted');
      setIsUnlocked(true);
      setError('');
      return;
    }

    setError('كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
  };

  return (
    <>
      <style>{styles}</style>
      <main className="bgt-offer" dir="rtl">
        {!isUnlocked ? (
          <section className="bgt-offer__gate">
            <div className="bgt-offer__gate-card">
              <div className="bgt-offer__gate-label">صفحة محمية</div>
              <h1 className="bgt-offer__gate-title">عرض خدمات نقطتين | BGT</h1>
              <p className="bgt-offer__gate-text">
                يرجى إدخال كلمة المرور للوصول إلى العرض السري والخاص بشركة Breaking Ground Technology.
              </p>
              <form className="bgt-offer__gate-form" onSubmit={handleUnlock}>
                <label htmlFor="bgt-password">كلمة المرور</label>
                <input
                  id="bgt-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="أدخل كلمة المرور"
                  autoComplete="current-password"
                />
                {error ? <p className="bgt-offer__gate-error">{error}</p> : null}
                <button type="submit">دخول العرض</button>
              </form>
            </div>
          </section>
        ) : (
          <>
            <section className="cover">
              <div className="cover-header">
                <div className="logo-noq">نقطتين<span>.</span></div>
                <div className="cover-badge">عرض سري وخاص</div>
              </div>

              <div className="cover-main">
                <div className="cover-tag">باقة البداية الرقمية</div>
                <h1 className="cover-title">
                  حضور رقمي<br />
                  <span className="highlight">يُثبت قوتكم</span>
                </h1>
                <p className="cover-sub">
                  إعادة بناء الموقع الإلكتروني وتهيئة المحتوى لمحركات البحث والتواجد على منصات التواصل — خطوة أولى نحو استقطاب عملاء جدد في قطاع البنية التحتية للاتصالات.
                </p>
              </div>

              <div className="cover-footer">
                <div className="cover-client">
                  <strong>Breaking Ground Technology — BGT</strong>
                  مُقدَّم من وكالة نقطتين للتسويق الرقمي
                </div>
                <div className="cover-date">يونيو 2026</div>
              </div>
            </section>

            <div className="page">
              <div className="section-label">التشخيص</div>
              <h2>ما الذي يحدّ من نموكم الآن؟</h2>
              <p className="intro-text">
                BGT شركة ذات سمعة ممتازة وعملاء من كبرى شركات الاتصالات في المملكة — إلا أن غيابها الرقمي يجعل الوصول إلى عملاء جدد يعتمد كلياً على الشبكة الشخصية. هذا التحليل يُظهر الفجوة الحالية.
              </p>

              <div className="problems-grid">
                <div className="prob-item">
                  <div className="prob-num">01</div>
                  <div className="prob-title">موقع على Google Sites</div>
                  <div className="prob-body">منصة مجانية تُضعف المصداقية وتُغلق باب الـ SEO الحقيقي أمام أي شركة جادة</div>
                </div>
                <div className="prob-item">
                  <div className="prob-num">02</div>
                  <div className="prob-title">صفر حضور عربي</div>
                  <div className="prob-body">لا نسخة عربية رغم أن جمهوركم المستهدف في السعودية يبحث بالعربية أولاً</div>
                </div>
                <div className="prob-item">
                  <div className="prob-num">03</div>
                  <div className="prob-title">ISO مخفي في الداخل</div>
                  <div className="prob-body">شهادة ISO 9001 ومشاريع مع STC وNokia غير ظاهرة — وهي أقوى ما تملكونه</div>
                </div>
                <div className="prob-item">
                  <div className="prob-num">04</div>
                  <div className="prob-title">لا call-to-action</div>
                  <div className="prob-body">زائر الموقع لا يجد مساراً واضحاً لطلب خدمة أو التواصل — يغادر دون أثر</div>
                </div>
                <div className="prob-item">
                  <div className="prob-num">05</div>
                  <div className="prob-title">حسابات خاملة تماماً</div>
                  <div className="prob-body">وجود حسابات على السوشيال ميديا بلا محتوى يُضعف الصورة أكثر من غيابها</div>
                </div>
                <div className="prob-item">
                  <div className="prob-num">06</div>
                  <div className="prob-title">لا آلية لاستقبال العملاء</div>
                  <div className="prob-body">لا نموذج، لا واتساب مُدمج، لا بريد منظّم — الفرص تضيع قبل أن تُسجَّل</div>
                </div>
              </div>

              <hr className="divider-section" />

              <div className="section-label">العرض المالي</div>
              <h2>باقة البداية</h2>
              <p className="intro-text">
                حزمة مصممة خصيصاً لشركات B2B في قطاعات البنية التحتية — تُعطي أقصى أثر بأقل استثمار ممكن، مع نتائج قابلة للقياس خلال 3 أشهر.
              </p>

              <div className="package-main">
                <div className="pkg-header">
                  <div>
                    <div className="pkg-name">Starter Package</div>
                    <div className="pkg-title">باقة البداية الرقمية</div>
                  </div>
                  <div className="pkg-price-block">
                    <div className="pkg-price">10,450 <sub>ر.س</sub></div>
                    <div className="pkg-price-note">إجمالي الاستثمار (3 أشهر)</div>
                  </div>
                </div>

                <div className="services-list">
                  <div className="svc-item">
                    <div className="svc-icon">🌐</div>
                    <div>
                      <div className="svc-name">إعادة تطوير الموقع الإلكتروني</div>
                      <div className="svc-desc">
                        بناء موقع احترافي من الصفر على WordPress — بالعربية والإنجليزية — يعكس مستوى BGT الحقيقي ويستوعب البيانات القادمة من الزوار.
                      </div>
                      <div className="svc-deliverables">
                        <span className="tag purple">تصميم ثنائي اللغة</span>
                        <span className="tag purple">صفحات الخدمات</span>
                        <span className="tag purple">معرض مشاريع</span>
                        <span className="tag purple">لوحة تحكم داخلية</span>
                        <span className="tag">نموذج استلام الطلبات</span>
                        <span className="tag">إعداد دومين وهوستينج</span>
                      </div>
                    </div>
                    <div className="svc-price-tag">
                      <div className="svc-price-amount">5,000</div>
                      <span className="svc-price-period">دفعة واحدة</span>
                    </div>
                  </div>

                  <div className="svc-item">
                    <div className="svc-icon">🔍</div>
                    <div>
                      <div className="svc-name">إدارة محتوى SEO</div>
                      <div className="svc-desc">
                        تهيئة الموقع لمحركات البحث واستهداف الكلمات المفتاحية التي يستخدمها صنّاع القرار في شركات الاتصالات والكهرباء عند البحث عن مقاولين متخصصين.
                      </div>
                      <div className="svc-deliverables">
                        <span className="tag purple">تحليل المنافسين</span>
                        <span className="tag purple">4 مقالات شهرياً</span>
                        <span className="tag purple">تقرير أداء شهري</span>
                        <span className="tag">keywords مستهدفة</span>
                        <span className="tag">On-page SEO</span>
                      </div>
                    </div>
                    <div className="svc-price-tag">
                      <div className="svc-price-amount">3,000</div>
                      <span className="svc-price-period">لمدة 3 أشهر</span>
                    </div>
                  </div>

                  <div className="svc-item">
                    <div className="svc-icon">💬</div>
                    <div>
                      <div className="svc-name">دمج واتساب بيزنس مع الموقع</div>
                      <div className="svc-desc">
                        ربط زر واتساب ذكي بالموقع يوجّه الاستفسارات مباشرة لفريق المبيعات، مع رسائل ترحيبية آلية تُعرّف بالشركة فور تواصل أي عميل محتمل.
                      </div>
                      <div className="svc-deliverables">
                        <span className="tag purple">زر واتساب مُدمج</span>
                        <span className="tag">رسالة ترحيب آلية</span>
                        <span className="tag">إعداد Business Profile</span>
                      </div>
                    </div>
                    <div className="svc-price-tag">
                      <div className="svc-price-amount">150</div>
                      <span className="svc-price-period">شهرياً</span>
                    </div>
                  </div>

                  <div className="svc-item">
                    <div className="svc-icon">📱</div>
                    <div>
                      <div className="svc-name">تهيئة وسائل التواصل الاجتماعي</div>
                      <div className="svc-desc">
                        تأسيس حضور رقمي احترافي على LinkedIn وX (تويتر) — المنصتان الأكثر تأثيراً في جذب صانعي القرار في قطاع B2B بالسعودية.
                      </div>
                      <div className="svc-deliverables">
                        <span className="tag purple">تصميم هوية المنصات</span>
                        <span className="tag purple">Bio احترافي بالعربية والإنجليزية</span>
                        <span className="tag">8 منشورات تأسيسية</span>
                        <span className="tag">دليل المحتوى الشهري</span>
                      </div>
                    </div>
                    <div className="svc-price-tag">
                      <div className="svc-price-amount">2,000</div>
                      <span className="svc-price-period">دفعة واحدة</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="total-block">
                <div>
                  <div className="total-label">إجمالي الاستثمار</div>
                  <div className="total-main">10,450 ر.س</div>
                  <div className="total-sub">شامل ضريبة القيمة المضافة 15%</div>
                </div>
                <div className="total-right">
                  <div className="total-breakdown">
                    الموقع الإلكتروني <span>5,000</span><br />
                    إدارة SEO (3 أشهر) <span>3,000</span><br />
                    واتساب بيزنس (3 أشهر) <span>450</span><br />
                    تهيئة السوشيال ميديا <span>2,000</span>
                  </div>
                </div>
              </div>

              <hr className="divider-section" />

              <div className="section-label">خطة التنفيذ</div>
              <h2>جدول العمل</h2>
              <p className="intro-text">ثلاثة أشهر تمنحكم أساساً رقمياً متكاملاً.</p>

              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-phase">المرحلة الأولى</div>
                  <div className="tl-week">الأسبوع 1–3</div>
                  <div className="tl-title">البناء والتأسيس</div>
                  <div className="tl-tasks">
                    تصميم الموقع وتطويره<br />
                    إعداد حسابات السوشيال<br />
                    ربط واتساب بيزنس<br />
                    تحليل المنافسين للـ SEO
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-phase">المرحلة الثانية</div>
                  <div className="tl-week">الشهر 2</div>
                  <div className="tl-title">الإطلاق والتهيئة</div>
                  <div className="tl-tasks">
                    إطلاق الموقع رسمياً<br />
                    بدء نشر محتوى SEO<br />
                    أول 8 منشورات LinkedIn<br />
                    تقرير أداء أولي
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-phase">المرحلة الثالثة</div>
                  <div className="tl-week">الشهر 3</div>
                  <div className="tl-title">القياس والتحسين</div>
                  <div className="tl-tasks">
                    متابعة ترتيب الكلمات المفتاحية<br />
                    تحسين الصفحات الأقل أداءً<br />
                    تقرير شامل للنتائج<br />
                    توصيات للمرحلة التالية
                  </div>
                </div>
              </div>

              <hr className="divider-section" />

              <div className="section-label">الشروط والأحكام</div>
              <h2>تفاصيل العقد</h2>

              <div className="terms-grid">
                <div className="term-item">
                  <div className="term-label">آلية الدفع</div>
                  <div className="term-value">50% عند التوقيع · 50% عند تسليم الموقع</div>
                </div>
                <div className="term-item">
                  <div className="term-label">مدة العقد</div>
                  <div className="term-value">3 أشهر قابلة للتجديد</div>
                </div>
                <div className="term-item">
                  <div className="term-label">مدة تطوير الموقع</div>
                  <div className="term-value">14 يوم عمل من تاريخ التوقيع</div>
                </div>
                <div className="term-item">
                  <div className="term-label">الضمان</div>
                  <div className="term-value">صيانة مجانية لمدة شهر بعد الإطلاق</div>
                </div>
                <div className="term-item">
                  <div className="term-label">التعديلات</div>
                  <div className="term-value">مراجعتان مجانيتان على التصميم</div>
                </div>
                <div className="term-item">
                  <div className="term-label">صلاحية العرض</div>
                  <div className="term-value">30 يوماً من تاريخ الإصدار</div>
                </div>
              </div>

              <div className="cta-block">
                <h3>جاهزون للانطلاق؟</h3>
                <p>تواصل معنا لمناقشة تفاصيل العرض والبدء فوراً</p>
                <div className="cta-contacts">
                  <div className="cta-contact-item">
                    <strong>noqtatain.com</strong>
                    الموقع الإلكتروني
                  </div>
                  <div className="cta-contact-item">
                    <strong>info@noqtatain.com</strong>
                    البريد الإلكتروني
                  </div>
                </div>
              </div>
            </div>

            <div className="doc-footer">
              <span>نقطتين للتسويق الرقمي · الرياض، المملكة العربية السعودية</span>
              <span>العرض رقم: NQ-BGT-2026-01</span>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default BgtOffer;
