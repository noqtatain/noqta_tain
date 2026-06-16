import { useState } from "react";

const theme = {
  black: "#0A0A0A",
  white: "#FFFFFF",
  purple: "#7B5EA7",
  purpleLight: "#9B7EC8",
  purpleDark: "#5A3F88",
  purpleFaint: "#F3EFF9",
  gold: "#C9A84C",
  gray100: "#F7F7F7",
  gray200: "#EEEEEE",
  gray400: "#AAAAAA",
  gray700: "#444444",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Tajawal:wght@300;400;500;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #F5F4F0; }

  .proposal-root {
    font-family: 'Tajawal', sans-serif;
    direction: rtl;
    max-width: 900px;
    margin: 0 auto;
    background: ${theme.white};
    color: ${theme.black};
    box-shadow: 0 8px 60px rgba(0,0,0,0.12);
  }

  /* ── COVER ── */
  .cover {
    background: ${theme.black};
    padding: 80px 64px 64px;
    position: relative;
    overflow: hidden;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cover-dots {
    position: absolute;
    top: 40px;
    right: 64px;
    display: flex;
    gap: 18px;
    align-items: center;
  }
  .dot {
    border-radius: 50%;
  }
  .dot-white { width: 52px; height: 52px; background: #fff; }
  .dot-purple { width: 52px; height: 52px; background: ${theme.purple}; }
  .cover-brand {
    color: ${theme.gray400};
    font-size: 13px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 90px;
    font-weight: 300;
  }
  .cover-title {
    font-family: 'Tajawal', sans-serif;
    color: #fff;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.25;
    margin-top: 16px;
    max-width: 560px;
  }
  .cover-subtitle {
    color: ${theme.purple};
    font-size: 16px;
    margin-top: 12px;
    font-weight: 400;
  }
  .cover-meta {
    display: flex;
    gap: 48px;
    margin-top: 56px;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 28px;
  }
  .cover-meta-item label {
    display: block;
    font-size: 10px;
    letter-spacing: 3px;
    color: ${theme.gray400};
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .cover-meta-item span {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  /* ── SECTIONS ── */
  .section {
    padding: 56px 64px;
    border-bottom: 1px solid ${theme.gray200};
  }
  .section:last-child { border-bottom: none; }
  .section-label {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${theme.purple};
    font-weight: 500;
    margin-bottom: 8px;
  }
  .section-title {
    font-family: 'Tajawal', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: ${theme.black};
    margin-bottom: 28px;
    line-height: 1.3;
  }
  .section-body {
    font-size: 15px;
    line-height: 1.9;
    color: ${theme.gray700};
  }

  /* ── INTRO ── */
  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 28px;
  }
  .intro-card {
    background: ${theme.gray100};
    border-radius: 12px;
    padding: 20px 24px;
    border-right: 3px solid ${theme.purple};
  }
  .intro-card h4 {
    font-size: 13px;
    font-weight: 700;
    color: ${theme.black};
    margin-bottom: 6px;
  }
  .intro-card p {
    font-size: 13px;
    color: ${theme.gray700};
    line-height: 1.7;
  }

  /* ── ANALYSIS ── */
  .analysis-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 4px;
  }
  .analysis-col h4 {
    font-size: 13px;
    font-weight: 700;
    padding: 10px 16px;
    border-radius: 8px 8px 0 0;
    margin-bottom: 0;
  }
  .analysis-col.strengths h4 { background: #E8F5E9; color: #2E7D32; }
  .analysis-col.gaps h4 { background: #FFF3E0; color: #E65100; }
  .analysis-list {
    list-style: none;
    border: 1px solid ${theme.gray200};
    border-top: none;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
  }
  .analysis-list li {
    font-size: 13px;
    padding: 10px 16px;
    border-bottom: 1px solid ${theme.gray200};
    color: ${theme.gray700};
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .analysis-list li:last-child { border-bottom: none; }
  .analysis-list li::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
  }
  .strengths .analysis-list li::before { background: #2E7D32; }
  .gaps .analysis-list li::before { background: #E65100; }

  /* ── SERVICES ── */
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .service-card {
    border: 1px solid ${theme.gray200};
    border-radius: 12px;
    padding: 24px;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.2s;
  }
  .service-card:hover { box-shadow: 0 4px 24px rgba(123,94,167,0.12); }
  .service-number {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    color: ${theme.purpleFaint};
    position: absolute;
    top: 12px;
    left: 20px;
    line-height: 1;
  }
  .service-title {
    font-size: 15px;
    font-weight: 700;
    color: ${theme.black};
    margin-bottom: 8px;
    position: relative;
  }
  .service-desc {
    font-size: 13px;
    color: ${theme.gray700};
    line-height: 1.7;
  }
  .service-tag {
    display: inline-block;
    margin-top: 12px;
    background: ${theme.purpleFaint};
    color: ${theme.purpleDark};
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 20px;
    font-weight: 500;
  }

  /* ── TIMELINE ── */
  .timeline {
    position: relative;
    padding-right: 28px;
  }
  .timeline::before {
    content: '';
    position: absolute;
    right: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.gray200};
  }
  .timeline-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    padding-bottom: 32px;
    position: relative;
  }
  .timeline-item::before {
    content: '';
    position: absolute;
    right: -24px;
    top: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${theme.purple};
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px ${theme.purple};
  }
  .timeline-item:last-child { padding-bottom: 0; }
  .timeline-phase {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${theme.purple};
    font-weight: 700;
    margin-bottom: 4px;
  }
  .timeline-title {
    font-size: 15px;
    font-weight: 700;
    color: ${theme.black};
    margin-bottom: 6px;
  }
  .timeline-tasks {
    list-style: none;
    font-size: 13px;
    color: ${theme.gray700};
    line-height: 1.8;
  }
  .timeline-tasks li::before { content: '— '; color: ${theme.purple}; }
  .timeline-duration {
    background: ${theme.gray100};
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 12px;
    color: ${theme.gray700};
    text-align: center;
    align-self: start;
    white-space: nowrap;
    font-weight: 500;
  }

  /* ── PRICING ── */
  .pricing-tabs {
    display: flex;
    gap: 0;
    border: 1px solid ${theme.gray200};
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 28px;
  }
  .pricing-tab {
    flex: 1;
    padding: 14px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    border: none;
    font-family: 'Tajawal', sans-serif;
    color: ${theme.gray700};
    border-left: 1px solid ${theme.gray200};
    transition: all 0.2s;
  }
  .pricing-tab:first-child { border-left: none; }
  .pricing-tab.active {
    background: ${theme.black};
    color: #fff;
  }
  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .pricing-card {
    border: 1px solid ${theme.gray200};
    border-radius: 16px;
    padding: 28px 24px;
    position: relative;
    transition: all 0.2s;
  }
  .pricing-card.featured {
    border: 2px solid ${theme.purple};
    background: ${theme.black};
    color: #fff;
  }
  .featured-badge {
    position: absolute;
    top: -12px;
    right: 50%;
    transform: translateX(50%);
    background: ${theme.purple};
    color: #fff;
    font-size: 11px;
    padding: 4px 14px;
    border-radius: 20px;
    font-weight: 700;
    white-space: nowrap;
  }
  .plan-name {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .pricing-card.featured .plan-name { color: ${theme.purple}; }
  .pricing-card:not(.featured) .plan-name { color: ${theme.gray700}; }
  .plan-price {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 900;
    color: ${theme.black};
    line-height: 1;
    margin-bottom: 4px;
  }
  .pricing-card.featured .plan-price { color: #fff; }
  .plan-currency {
    font-size: 16px;
    font-weight: 400;
    vertical-align: super;
    margin-left: 2px;
  }
  .plan-period {
    font-size: 12px;
    color: ${theme.gray400};
    margin-bottom: 20px;
  }
  .plan-features {
    list-style: none;
    font-size: 13px;
    line-height: 2;
    border-top: 1px solid ${theme.gray200};
    padding-top: 16px;
  }
  .pricing-card.featured .plan-features { border-color: rgba(255,255,255,0.1); }
  .plan-features li {
    color: ${theme.gray700};
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .pricing-card.featured .plan-features li { color: rgba(255,255,255,0.8); }
  .plan-features li::before {
    content: '✓';
    color: ${theme.purple};
    font-weight: 700;
    flex-shrink: 0;
  }
  .plan-setup {
    margin-top: 16px;
    font-size: 12px;
    color: ${theme.gray400};
    border-top: 1px solid ${theme.gray200};
    padding-top: 12px;
  }
  .pricing-card.featured .plan-setup { border-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.4); }

  /* ── KPIs ── */
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }
  .kpi-card {
    background: ${theme.gray100};
    border-radius: 12px;
    padding: 20px 16px;
    text-align: center;
  }
  .kpi-value {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 900;
    color: ${theme.purple};
  }
  .kpi-label {
    font-size: 12px;
    color: ${theme.gray700};
    margin-top: 4px;
    line-height: 1.5;
  }

  /* ── TERMS ── */
  .terms-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .terms-list li {
    font-size: 14px;
    color: ${theme.gray700};
    padding: 14px 16px;
    background: ${theme.gray100};
    border-radius: 8px;
    line-height: 1.6;
    border-right: 3px solid ${theme.purple};
  }
  .terms-list li strong {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: ${theme.black};
    margin-bottom: 2px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* ── FOOTER ── */
  .footer {
    background: ${theme.black};
    padding: 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
  .footer-dots { display: flex; gap: 12px; align-items: center; }
  .footer-dot-w { width: 32px; height: 32px; border-radius: 50%; background: #fff; }
  .footer-dot-p { width: 32px; height: 32px; border-radius: 50%; background: ${theme.purple}; }
  .footer-brand { color: #fff; font-size: 18px; font-weight: 700; }
  .footer-sub { color: ${theme.gray400}; font-size: 12px; margin-top: 4px; }
  .footer-contact { text-align: left; }
  .footer-contact p { color: ${theme.gray400}; font-size: 12px; line-height: 2; }
  .footer-contact a { color: ${theme.purple}; text-decoration: none; }

  @media (max-width: 768px) {
    .cover, .section, .footer { padding-left: 24px; padding-right: 24px; }
    .cover { min-height: 360px; padding-top: 64px; }
    .cover-dots { right: 24px; }
    .cover-title { font-size: 32px; }
    .cover-meta, .footer { flex-direction: column; align-items: flex-start; gap: 20px; }
    .intro-grid, .analysis-grid, .services-grid, .pricing-cards, .kpi-grid, .terms-list { grid-template-columns: 1fr; }
    .timeline-item { grid-template-columns: 1fr; }
  }

  @media print {
    .proposal-root { box-shadow: none; }
    .pricing-tab { display: none; }
  }
`;

const services = [
  {
    title: "تحسين محركات البحث (SEO)",
    desc: "استهداف الكلمات المفتاحية القانونية عالية القصد مثل 'محامي تجاري في الرياض'. بحث الكلمات المفتاحية، تحسين الصفحات، بناء الروابط.",
    tag: "نتائج طويلة الأمد",
    n: "01",
  },
  {
    title: "إعلانات Google Search",
    desc: "حملات مدفوعة تستهدف العملاء الجاهزين للتعاقد في نظام العمل والقضايا التجارية وتأسيس الشركات.",
    tag: "عائد استثمار فوري",
    n: "02",
  },
  {
    title: "إدارة وسائل التواصل الاجتماعي",
    desc: "LinkedIn للعملاء من الشركات، Instagram وX للوعي. محتوى قانوني مبسط يرسّخ مكانة المكتب كمرجع موثوق.",
    tag: "بناء الثقة والسمعة",
    n: "03",
  },
  {
    title: "التسويق بالمحتوى",
    desc: "مقالات قانونية دورية، تحليل أنظمة رؤية 2030، نشرات نظام العمل — تضع المكتب في مقدمة نتائج البحث.",
    tag: "سلطة قانونية رقمية",
    n: "04",
  },
  {
    title: "Google Business Profile",
    desc: "تهيئة الملف التجاري، إدارة التقييمات، تحسين ظهور المكتب في نتائج الخرائط والبحث المحلي.",
    tag: "تواجد محلي قوي",
    n: "05",
  },
  {
    title: "أتمتة واتساب وقمع العملاء",
    desc: "أتمتة رحلة العميل من أول رسالة حتى حجز الاستشارة. تكامل CRM لمتابعة العملاء المحتملين.",
    tag: "تحويل العملاء المحتملين",
    n: "06",
  },
];

const phases = [
  {
    phase: "المرحلة الأولى",
    title: "التأسيس والتدقيق",
    duration: "الشهر 1",
    tasks: [
      "تدقيق الموقع وتحليل الكلمات المفتاحية",
      "إعداد Google Tag Manager وGoogle Analytics",
      "تهيئة Google Business Profile",
      "إنشاء هوية المحتوى وخطة التحرير",
    ],
  },
  {
    phase: "المرحلة الثانية",
    title: "الإطلاق والبناء",
    duration: "الأشهر 2-3",
    tasks: [
      "إطلاق حملات Google Ads",
      "نشر أول 8 مقالات SEO",
      "بدء إدارة حسابات التواصل الاجتماعي",
      "إعداد تدفق واتساب التلقائي",
    ],
  },
  {
    phase: "المرحلة الثالثة",
    title: "التحسين والتوسع",
    duration: "الأشهر 4-6",
    tasks: [
      "تحليل أداء الحملات وإعادة التهيئة",
      "توسيع الكلمات المفتاحية والمحتوى",
      "تقارير شهرية وجلسات مراجعة",
      "اختبار A/B لصفحات الهبوط",
    ],
  },
];

const plans = {
  monthly: [
    {
      name: "أساسي",
      price: "3,500",
      features: [
        "SEO أساسي (8 كلمات مفتاحية)",
        "Google Business Profile",
        "4 منشورات شهرية",
        "تقرير شهري",
      ],
      setup: "رسوم إعداد: 1,500 ريال",
      featured: false,
    },
    {
      name: "نمو",
      price: "6,500",
      features: [
        "SEO متكامل (25 كلمة مفتاحية)",
        "إعلانات Google (حتى 5,000 ريال إنفاق)",
        "إدارة LinkedIn + Instagram",
        "مقالتان شهرياً",
        "أتمتة واتساب",
        "تقرير أسبوعي",
      ],
      setup: "رسوم إعداد: 2,500 ريال",
      featured: true,
    },
    {
      name: "مسرّع",
      price: "11,000",
      features: [
        "كل خدمات باقة نمو",
        "إعلانات Google (حتى 12,000 ريال)",
        "4 مقالات شهرياً",
        "إدارة 4 منصات",
        "تكامل CRM كامل",
        "مدير حساب مخصص",
      ],
      setup: "رسوم إعداد: 3,500 ريال",
      featured: false,
    },
  ],
  quarterly: [
    {
      name: "أساسي",
      price: "9,500",
      features: [
        "SEO أساسي (8 كلمات مفتاحية)",
        "Google Business Profile",
        "4 منشورات شهرية",
        "تقرير شهري",
      ],
      setup: "توفير 1,000 ريال مقارنة بالشهري",
      featured: false,
    },
    {
      name: "نمو",
      price: "17,500",
      features: [
        "SEO متكامل (25 كلمة مفتاحية)",
        "إعلانات Google (حتى 5,000 ريال إنفاق)",
        "إدارة LinkedIn + Instagram",
        "مقالتان شهرياً",
        "أتمتة واتساب",
        "تقرير أسبوعي",
      ],
      setup: "توفير 2,000 ريال + الإعداد مجاناً",
      featured: true,
    },
    {
      name: "مسرّع",
      price: "29,500",
      features: [
        "كل خدمات باقة نمو",
        "إعلانات Google (حتى 12,000 ريال)",
        "4 مقالات شهرياً",
        "إدارة 4 منصات",
        "تكامل CRM كامل",
        "مدير حساب مخصص",
      ],
      setup: "توفير 3,500 ريال + الإعداد مجاناً",
      featured: false,
    },
  ],
};

const kpis = [
  { value: "3×", label: "زيادة الزيارات العضوية خلال 6 أشهر" },
  { value: "40+", label: "عميل محتمل شهرياً بحلول الشهر الثالث" },
  { value: "Top 3", label: "نتائج البحث المحلي في الرياض" },
  { value: "25%", label: "تحسين معدل تحويل صفحات الخدمة" },
];

export default function Alwesam() {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");

  return (
    <>
      <style>{styles}</style>
      <div className="proposal-root">
        {/* COVER */}
        <div className="cover">
          <div className="cover-dots">
            <div className="dot dot-white" />
            <div className="dot dot-purple" />
          </div>
          <div>
            <p className="cover-brand">نقطتان للتسويق الرقمي</p>
            <h1 className="cover-title">عرض التسويق الرقمي المتكامل</h1>
            <p className="cover-subtitle">أنظمة الوسام للمحاماة والاستشارات القانونية</p>
          </div>
          <div className="cover-meta">
            <div className="cover-meta-item">
              <label>مُقدَّم إلى</label>
              <span>أنظمة الوسام للمحاماة</span>
            </div>
            <div className="cover-meta-item">
              <label>مُقدَّم من</label>
              <span>نقطتان — Noqtatain</span>
            </div>
            <div className="cover-meta-item">
              <label>تاريخ العرض</label>
              <span>يونيو 2026</span>
            </div>
            <div className="cover-meta-item">
              <label>صلاحية العرض</label>
              <span>30 يوماً</span>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <div className="section">
          <p className="section-label">مقدمة</p>
          <h2 className="section-title">لماذا هذا العرض؟</h2>
          <p className="section-body">
            في نقطتان، نؤمن أن المكاتب القانونية الطموحة تستحق تسويقاً رقمياً بمستوى احترافيتها.
            لاحظنا أن أنظمة الوسام تمتلك هوية راسخة وخدمات متميزة، لكن حضورها الرقمي لم يواكب بعد حجم طموحاتها.
            هذا العرض يضع خارطة طريق واضحة لتحويل موقعكم وقنواتكم الرقمية إلى آلة متكاملة لجذب العملاء.
          </p>
          <div className="intro-grid">
            <div className="intro-card">
              <h4>فرصة السوق</h4>
              <p>الخدمات القانونية في السعودية تشهد طلباً متنامياً مع رؤية 2030. المكاتب التي تؤسس حضوراً رقمياً الآن ستحصد ثماره لسنوات.</p>
            </div>
            <div className="intro-card">
              <h4>نهجنا المتخصص</h4>
              <p>لا نعمل مع كل القطاعات — نتخصص في الخدمات المهنية والقانونية والمالية، مما يعني فهماً أعمق لجمهوركم وأنظمة الإعلان.</p>
            </div>
            <div className="intro-card">
              <h4>الجمهور المستهدف</h4>
              <p>أصحاب الشركات الصغيرة والمتوسطة، المستثمرون الأجانب، المؤسسات التجارية، الأفراد في نزاعات العمل.</p>
            </div>
            <div className="intro-card">
              <h4>التزامنا بالشفافية</h4>
              <p>تقارير واضحة كل أسبوع، أهداف قابلة للقياس، ولا عقود مفتوحة — نثبت أداءنا شهراً بشهر.</p>
            </div>
          </div>
        </div>

        {/* ANALYSIS */}
        <div className="section">
          <p className="section-label">تحليل الوضع الراهن</p>
          <h2 className="section-title">أين أنتم الآن؟</h2>
          <div className="analysis-grid">
            <div className="analysis-col strengths">
              <h4>✓ نقاط القوة</h4>
              <ul className="analysis-list">
                <li>موقع احترافي باللغة العربية</li>
                <li>Google Tag Manager مفعّل</li>
                <li>زر واتساب نشط على الموقع</li>
                <li>قسم مدونة موجود</li>
                <li>عرض استشارة مجانية واضح</li>
                <li>شهادات عملاء على الصفحة الرئيسية</li>
                <li>روابط للينكدإن والشبكات الاجتماعية</li>
              </ul>
            </div>
            <div className="analysis-col gaps">
              <h4>⚑ فرص التحسين</h4>
              <ul className="analysis-list">
                <li>إحصائيات الموقع لا تزال صفراً</li>
                <li>غياب نسخة إنجليزية للمستثمرين</li>
                <li>المدونة شبه فارغة من المحتوى</li>
                <li>لا يوجد ملف Google Business فعّال</li>
                <li>غياب استراتيجية SEO واضحة</li>
                <li>لا حملات إعلانية مدفوعة</li>
                <li>غياب دراسات حالة أو محفظة أعمال</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="section">
          <p className="section-label">الخدمات المقترحة</p>
          <h2 className="section-title">ماذا سنفعل معاً؟</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.n}>
                <div className="service-number">{s.n}</div>
                <p className="service-title">{s.title}</p>
                <p className="service-desc">{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="section">
          <p className="section-label">خطة التنفيذ</p>
          <h2 className="section-title">الجدول الزمني — 6 أشهر</h2>
          <div className="timeline">
            {phases.map((p, i) => (
              <div className="timeline-item" key={i}>
                <div>
                  <p className="timeline-phase">{p.phase}</p>
                  <p className="timeline-title">{p.title}</p>
                  <ul className="timeline-tasks">
                    {p.tasks.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
                <div className="timeline-duration">{p.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="section">
          <p className="section-label">مؤشرات الأداء</p>
          <h2 className="section-title">ماذا نعد بتحقيقه؟</h2>
          <div className="kpi-grid">
            {kpis.map((k, i) => (
              <div className="kpi-card" key={i}>
                <div className="kpi-value">{k.value}</div>
                <div className="kpi-label">{k.label}</div>
              </div>
            ))}
          </div>
          <p className="section-body" style={{ fontSize: 13, color: theme.gray400 }}>
            * المؤشرات المذكورة تقديرية بناءً على أداء حملات مماثلة في القطاع القانوني السعودي. تتوقف النتائج الفعلية على المنافسة، الميزانية الإعلانية، والالتزام بالخطة.
          </p>
        </div>

        {/* PRICING */}
        <div className="section">
          <p className="section-label">العرض المالي</p>
          <h2 className="section-title">الباقات والأسعار</h2>
          <div className="pricing-tabs">
            <button
              className={`pricing-tab ${pricingPeriod === "monthly" ? "active" : ""}`}
              onClick={() => setPricingPeriod("monthly")}
            >
              شهري
            </button>
            <button
              className={`pricing-tab ${pricingPeriod === "quarterly" ? "active" : ""}`}
              onClick={() => setPricingPeriod("quarterly")}
            >
              ربع سنوي (توفير 10%)
            </button>
          </div>
          <div className="pricing-cards">
            {plans[pricingPeriod].map((plan, i) => (
              <div className={`pricing-card ${plan.featured ? "featured" : ""}`} key={i}>
                {plan.featured && <span className="featured-badge">الأكثر طلباً</span>}
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">
                  <span className="plan-currency">ر.س</span>
                  {plan.price}
                </p>
                <p className="plan-period">
                  {pricingPeriod === "monthly" ? "/ شهرياً" : "/ ربع سنوي"}
                </p>
                <ul className="plan-features">
                  {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <p className="plan-setup">{plan.setup}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TERMS */}
        <div className="section">
          <p className="section-label">الشروط والأحكام</p>
          <h2 className="section-title">شروط التعاون</h2>
          <ul className="terms-list">
            <li><strong>مدة العقد</strong>3 أشهر كحد أدنى، مع تجديد تلقائي شهري بعدها.</li>
            <li><strong>الدفع</strong>مقدماً في بداية كل فترة فوترة.</li>
            <li><strong>الإلغاء</strong>إشعار مسبق بـ 30 يوماً، بدون غرامات بعد الشهر الثالث.</li>
            <li><strong>ميزانية الإعلانات</strong>تُدفع مباشرة لمنصات الإعلان وتفصل عن رسوم الخدمة.</li>
            <li><strong>ملكية الحسابات</strong>جميع الحسابات والمحتوى ملك حصري لأنظمة الوسام.</li>
            <li><strong>التقارير</strong>تقرير أداء أسبوعي + اجتماع مراجعة شهري.</li>
          </ul>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="footer-dots">
              <div className="footer-dot-w" />
              <div className="footer-dot-p" />
            </div>
            <div>
              <div className="footer-brand">نقطتان</div>
              <div className="footer-sub">Noqtatain Digital Marketing</div>
            </div>
          </div>
          <div className="footer-contact">
            <p>للتواصل والاستفسار</p>
            <p><a href="mailto:info@noqtatain.com">info@noqtatain.com</a></p>
            <p style={{ color: "#888" }}>الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </>
  );
}
