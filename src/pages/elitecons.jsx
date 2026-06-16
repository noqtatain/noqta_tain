import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink:       #0D1B2E;
    --ink2:      #132238;
    --ink3:      #1a2d47;
    --surface:   #223552;
    --gold:      #7B5EA7;
    --gold2:     #9B7EC8;
    --elite:     #5C4080;
    --elite2:    #C7B4E7;
    --muted:     rgba(233,239,247,0.82);
    --faint:     rgba(255,255,255,0.06);
    --border:    rgba(155,126,200,0.28);
    --r:         14px;
    --r2:        20px;
  }

  body { background: var(--ink); color: #fff; font-family: 'Tajawal', sans-serif; direction: rtl; }

  .page { min-height: 100vh; }

  /* ── NAV ── */
  .nav {
    position: sticky; top: 0; z-index: 99;
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 40px;
    background: rgba(8,8,15,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { font-size: 18px; font-weight: 700; color: var(--gold); letter-spacing: -0.02em; }
  .nav-sub  { font-size: 12px; color: var(--muted); }
  .nav-date { font-size: 12px; color: var(--muted); }

  /* ── HERO ── */
  .hero {
    position: relative; overflow: hidden;
    padding: 100px 40px 80px;
    background: linear-gradient(135deg, var(--ink) 0%, var(--ink3) 100%);
  }
  .hero-geo {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      repeating-linear-gradient(60deg, rgba(123,94,167,0.08) 0px, rgba(123,94,167,0.08) 1px, transparent 1px, transparent 60px),
      repeating-linear-gradient(-60deg, rgba(123,94,167,0.08) 0px, rgba(123,94,167,0.08) 1px, transparent 1px, transparent 60px);
  }
  .hero-orb {
    position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
  }
  .hero-orb1 { width: 400px; height: 400px; background: rgba(123,94,167,0.2); top: -100px; left: -100px; }
  .hero-orb2 { width: 300px; height: 300px; background: rgba(155,126,200,0.15); bottom: -80px; right: 10%; }
  .hero-inner { position: relative; max-width: 900px; margin: 0 auto; }
  .hero-badge {
    display: inline-block; font-size: 12px; font-weight: 600;
    padding: 6px 16px; border-radius: 100px;
    background: rgba(123,94,167,0.2);
    border: 1px solid rgba(123,94,167,0.45);
    color: var(--gold); margin-bottom: 28px; letter-spacing: 0.06em;
  }
  .hero-title {
    font-size: clamp(32px, 5vw, 52px); font-weight: 900;
    line-height: 1.2; margin-bottom: 16px;
    background: linear-gradient(135deg, #fff 30%, var(--gold));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero-client {
    font-size: 20px; color: var(--muted); font-weight: 400; margin-bottom: 40px;
  }
  .hero-client span { color: var(--elite2); font-weight: 600; }
  .hero-logos {
    display: flex; align-items: center; gap: 20px; flex-direction: row-reverse;
  }
  .hero-logo-box {
    padding: 14px 24px; border-radius: var(--r);
    background: var(--faint); border: 1px solid var(--border);
    font-size: 15px; font-weight: 700;
  }
  .hero-logo-box.gold { color: var(--gold2); border-color: rgba(123,94,167,0.45); }
  .hero-logo-box.elite { color: var(--elite2); border-color: rgba(123,94,167,0.4); }
  .hero-arrow { color: var(--muted); font-size: 22px; }
  .hero-stats {
    display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 60px;
  }
  .hero-stat {
    padding: 20px; border-radius: var(--r);
    background: var(--faint); border: 1px solid var(--border);
    text-align: center;
  }
  .hero-stat-num { font-size: 28px; font-weight: 900; color: var(--gold); }
  .hero-stat-lbl { font-size: 13px; color: var(--muted); margin-top: 4px; }

  /* ── SECTION ── */
  .section { padding: 80px 40px; max-width: 960px; margin: 0 auto; }
  .section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
    color: var(--gold); text-transform: uppercase; margin-bottom: 12px;
  }
  .section-title {
    font-size: clamp(24px,3vw,36px); font-weight: 800; line-height: 1.3; margin-bottom: 40px;
    color: #fff;
  }
  .section-title em { color: var(--gold); font-style: normal; }
  .divider { height: 1px; background: var(--border); max-width: 960px; margin: 0 auto; }

  /* ── WHO WE ARE ── */
  .who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .who-card {
    padding: 28px; border-radius: var(--r2);
    background: var(--ink2); border: 1px solid var(--border);
  }
  .who-icon { font-size: 28px; margin-bottom: 14px; }
  .who-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .who-text { font-size: 14px; color: var(--muted); line-height: 1.8; }

  /* ── TECHNICAL ── */
  .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .tech-item {
    display: flex; gap: 16px; align-items: flex-start;
    padding: 20px; border-radius: var(--r);
    background: var(--faint); border: 1px solid var(--border);
    transition: border-color 0.2s;
  }
  .tech-item:hover { border-color: rgba(123,94,167,0.55); }
  .tech-num {
    width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
    background: rgba(123,94,167,0.2); border: 1px solid rgba(123,94,167,0.45);
    color: var(--gold); font-size: 13px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
  .tech-content { flex: 1; }
  .tech-name { font-size: 15px; font-weight: 700; margin-bottom: 6px; color: #fff; }
  .tech-desc { font-size: 13px; color: var(--muted); line-height: 1.7; }

  /* ── PACKAGES ── */
  .pkg-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .pkg-card {
    border-radius: var(--r2); overflow: hidden;
    border: 1px solid var(--border);
    background: var(--ink2);
    display: flex; flex-direction: column;
    transition: transform 0.25s, border-color 0.25s;
  }
  .pkg-card:hover { transform: translateY(-6px); }
  .pkg-card.featured {
    border-color: rgba(155,126,200,0.55);
    background: linear-gradient(160deg, #1b1f39 0%, var(--ink2) 60%);
  }
  .pkg-top { padding: 28px 24px 20px; }
  .pkg-badge {
    display: inline-block; font-size: 11px; font-weight: 700;
    padding: 4px 12px; border-radius: 100px; margin-bottom: 16px;
  }
  .pkg-badge.starter { background: rgba(255,255,255,0.14); color: rgba(245,245,247,0.95); }
  .pkg-badge.pro     { background: rgba(123,94,167,0.25); color: var(--gold2); }
  .pkg-badge.elite   { background: rgba(123,94,167,0.2); color: var(--elite2); }
  .pkg-name { font-size: 20px; font-weight: 800; margin-bottom: 6px; color: #fff; }
  .pkg-desc { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
  .pkg-price { font-size: 36px; font-weight: 900; color: var(--gold); }
  .pkg-price span { font-size: 14px; color: var(--muted); font-weight: 400; }
  .pkg-divider { height: 1px; background: var(--border); margin: 0 24px; }
  .pkg-features { padding: 20px 24px 28px; flex: 1; }
  .pkg-feature {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 13px; color: var(--ink3); line-height: 1.6;
    padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .pkg-feature:last-child { border-bottom: none; }
  .pkg-check { color: var(--gold); font-size: 14px; flex-shrink: 0; margin-top: 2px; }
  .pkg-check.elite-check { color: var(--gold2); }
  .pkg-cta {
    margin: 16px 24px 24px;
    padding: 14px; border-radius: 10px;
    text-align: center; font-size: 14px; font-weight: 700;
    display: block; text-decoration: none;
    cursor: pointer; border: none;
    transition: opacity 0.2s;
    font-family: 'Tajawal', sans-serif;
  }
  .pkg-cta:hover { opacity: 0.85; }
  .pkg-cta.starter-cta { background: var(--ink3); color: #f5f5f7; border: 1px solid var(--border); }
  .pkg-cta.pro-cta     { background: var(--gold); color: var(--ink); }
  .pkg-cta.elite-cta   { background: var(--elite); color: #f5f5f7; }
  .featured-tag {
    background: var(--gold); color: var(--ink);
    text-align: center; font-size: 11px; font-weight: 800;
    padding: 6px; letter-spacing: 0.08em;
  }

  /* ── POSTS PLAN ── */
  .posts-tabs {
    display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; flex-direction: row-reverse;
  }
  .tab-btn {
    padding: 8px 18px; border-radius: 100px; font-size: 13px; font-weight: 600;
    cursor: pointer; border: 1px solid var(--border);
    background: transparent; color: var(--muted);
    font-family: 'Tajawal', sans-serif; transition: all 0.2s;
  }
  .tab-btn.active { background: var(--gold); color: var(--ink); border-color: var(--gold); }
  .tab-btn.force-dark-label { color: var(--ink) !important; }
  .posts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .post-card {
    padding: 20px; border-radius: var(--r2);
    background: var(--ink2); border: 1px solid var(--border);
    transition: border-color 0.2s;
  }
  .post-card:hover { border-color: rgba(123,94,167,0.45); }
  .post-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-direction: row-reverse; }
  .post-num-badge {
    width: 34px; height: 34px; border-radius: 50%;
    background: var(--gold); color: var(--ink);
    font-size: 14px; font-weight: 800;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .post-meta { flex: 1; }
  .post-name { font-size: 14px; font-weight: 700; }
  .post-type-row { display: flex; gap: 5px; margin-top: 4px; flex-direction: row-reverse; }
  .pill {
    font-size: 10px; font-weight: 600; padding: 2px 8px;
    border-radius: 100px;
  }
  .pill-ig    { background: rgba(123,94,167,0.24); color: #d9c6f5; }
  .pill-li    { background: rgba(96,165,250,0.2); color: var(--ink); }
  .pill-reel  { background: rgba(155,126,200,0.25); color: var(--ink); }
  .pill-car   { background: rgba(34,197,94,0.2); color: var(--ink); }
  .post-hook { font-size: 13px; color: var(--gold2); font-weight: 600; margin-bottom: 8px; line-height: 1.5; }
  .post-desc { font-size: 12px; color: var(--muted); line-height: 1.7; }

  /* ── ROADMAP ── */
  .roadmap { display: flex; flex-direction: column; gap: 0; }
  .roadmap-item {
    display: flex; gap: 24px; flex-direction: row-reverse;
  }
  .roadmap-left { display: flex; flex-direction: column; align-items: center; }
  .roadmap-dot {
    width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
    background: var(--gold); color: var(--ink);
    font-size: 16px; font-weight: 800;
    display: flex; align-items: center; justify-content: center;
  }
  .roadmap-line { width: 2px; flex: 1; background: var(--border); margin: 6px 0; min-height: 40px; }
  .roadmap-content {
    flex: 1; padding: 0 0 40px;
  }
  .roadmap-phase { font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 6px; }
  .roadmap-title { font-size: 17px; font-weight: 800; margin-bottom: 10px; color: #fff; }
  .roadmap-tasks { list-style: none; }
  .roadmap-tasks li {
    font-size: 13px; color: var(--ink3); line-height: 1.8;
    padding-right: 16px; position: relative;
  }
  .roadmap-tasks li::before {
    content: '—'; position: absolute; right: 0; color: var(--gold);
  }

  /* ── CTA ── */
  .cta-section {
    padding: 80px 40px;
    background: linear-gradient(135deg, var(--ink2) 0%, var(--ink3) 100%);
    text-align: center; position: relative; overflow: hidden;
  }
  .cta-orb {
    position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none;
    width: 500px; height: 500px;
    background: rgba(123,94,167,0.14);
    top: 50%; left: 50%; transform: translate(-50%,-50%);
  }
  .cta-inner { position: relative; max-width: 600px; margin: 0 auto; }
  .cta-title { font-size: clamp(26px,4vw,40px); font-weight: 900; margin-bottom: 16px; line-height: 1.3; }
  .cta-title em { color: var(--gold); font-style: normal; }
  .cta-sub { font-size: 15px; color: var(--muted); margin-bottom: 40px; line-height: 1.7; }
  .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    padding: 14px 32px; border-radius: 10px;
    background: var(--gold); color: var(--ink);
    font-size: 15px; font-weight: 800; border: none;
    cursor: pointer; font-family: 'Tajawal', sans-serif; text-decoration: none;
    transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.88; }
  .btn-ghost {
    padding: 14px 32px; border-radius: 10px;
    background: transparent; color: #fff;
    font-size: 15px; font-weight: 600;
    border: 1px solid var(--border);
    cursor: pointer; font-family: 'Tajawal', sans-serif; text-decoration: none;
    transition: border-color 0.2s;
  }
  .btn-ghost:hover { border-color: rgba(155,126,200,0.7); }

  /* ── FOOTER ── */
  .footer {
    padding: 28px 40px; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    font-size: 12px; color: var(--muted); background: var(--ink2);
  }
  .footer a { color: var(--gold); text-decoration: none; }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .nav { padding: 12px 20px; }
    .hero, .section, .cta-section { padding-left: 20px; padding-right: 20px; }
    .hero-stats, .who-grid, .tech-grid, .pkg-grid, .posts-grid { grid-template-columns: 1fr; }
    .footer { flex-direction: column; gap: 10px; text-align: center; }
    .pkg-grid { grid-template-columns: 1fr; }
  }
`;

const techItems = [
  { n:1, name:"إدارة حسابات التواصل الاجتماعي", desc:"إدارة احترافية لحسابات إنستغرام ولينكدإن — نشر منتظم، ردود على التعليقات، ومتابعة يومية للأداء." },
  { n:2, name:"إنتاج المحتوى الإبداعي", desc:"تصميم الجرافيك، كتابة النصوص باللغتين، واقتراح أفكار المحتوى أسبوعياً وفق خطة محورية." },
  { n:3, name:"إنتاج الريلز والفيديو القصير", desc:"إنتاج ريلزين أسبوعياً على الأقل — سيناريو، مونتاج، موسيقى، ونص ظاهر على الشاشة." },
  { n:4, name:"استراتيجية المحتوى الشهرية", desc:"تقويم محتوى شهري كامل مع الموضوعات والنصوص والتوقيت الأمثل للنشر لكل منصة." },
  { n:5, name:"إدارة الإعلانات المدفوعة", desc:"إعداد وإطلاق ومتابعة الحملات الإعلانية على ميتا ولينكدإن مع تقرير أداء أسبوعي." },
  { n:6, name:"تقرير الأداء الشهري", desc:"تقرير مفصّل بالأرقام: الوصول، التفاعل، المتابعين الجدد، الإعلانات، والاستفسارات الواردة." },
];

const packages = [
  {
    tier:"starter", badge:"الانطلاق", name:"باقة البداية", featured: false,
    price:"3,500", currency:"ريال / شهرياً",
    desc:"للشركات التي تريد حضوراً رقمياً منتظماً ومحترفاً.",
    features:[
      "إدارة حساب إنستغرام",
      "12 منشور شهرياً (4 أسبوعياً)",
      "4 ريلز شهرياً",
      "تصميم جرافيك احترافي",
      "كتابة النصوص بالعربي",
      "إدارة التعليقات والردود",
      "تقرير أداء شهري",
      "بدون إعلانات مدفوعة",
    ]
  },
  {
    tier:"pro", badge:"الأكثر طلباً", name:"باقة النمو", featured: true,
    price:"6,500", currency:"ريال / شهرياً",
    desc:"للشركات الجادة في بناء قاعدة عملاء عبر السوشيال.",
    features:[
      "إدارة إنستغرام + لينكدإن",
      "20 منشور شهرياً",
      "8 ريلز شهرياً",
      "تقويم محتوى شهري كامل",
      "ستوري يومي",
      "إعلانات مدفوعة (6,000 ريال ميزانية)",
      "تقرير أداء أسبوعي",
      "مدير حساب مخصص",
    ]
  },
  {
    tier:"elite-pkg", badge:"الحزمة المتكاملة", name:"باقة التميّز", featured: false,
    price:"11,000", currency:"ريال / شهرياً",
    desc:"حضور رقمي شامل يليق بمكانة صفوة التشييد.",
    features:[
      "إنستغرام + لينكدإن + X (تويتر)",
      "30 منشور شهرياً",
      "12 ريلز + 2 فيديو طويل",
      "جلسة تصوير شهرية للمواقع",
      "إعلانات مدفوعة (12,000 ريال ميزانية)",
      "مقالات لينكدإن (2 شهرياً)",
      "WhatsApp Business إعداد وإدارة",
      "تقرير نهاية الشهر + اجتماع مراجعة",
    ]
  },
];

const posts = [
  { n:1, name:"ريلز العودة", hook:"«أكثر من 30 عاماً، لَبِنةً فوق لَبِنة»", desc:"مونتاج افتتاحي يُعيد تقديم الشركة — مشاريع متتالية بموسيقى مؤثرة. يُحدد الأسلوب الجديد للحساب.", types:["reel","ig"] },
  { n:2, name:"قبل وبعد — البنك الأهلي", hook:"«هكذا يبدو الفرق حين تثق بالمحترفين»", desc:"كاروسيل قبل/بعد درامي لمشروع SNB — يُثبت القدرة التقنية والجمالية معاً مع إبراز شعار العميل.", types:["car","ig"] },
  { n:3, name:"هل تعلم؟ — الخدمات الخفية", hook:"«كثيرون يعرفون صفوة للبناء — قليلون يعرفون كل ما تفعله»", desc:"كاروسيل يكشف خدمات غير متوقعة: CCTV، إنذار حريق، تصاميم VR. يُوسّع تصور العميل عن الشركة.", types:["car","ig"] },
  { n:4, name:"حرفيون في العمل", hook:"«الجودة لا تُرى في الصور فقط — تُرى في التفاصيل»", desc:"ريلز 30 ثانية — يد الحرفي، التفصيلة، ثم النتيجة. محتوى Satisfying عالي التفاعل.", types:["reel","ig"] },
  { n:5, name:"دليل المصداقية — أرامكو وسابك", hook:"«حين تثق أرامكو وسابك وBSF بنفس الشركة — فهناك سبب»", desc:"كاروسيل بشعارات العملاء الكبار مع أرقام التعميدات الرسمية. مصداقية لا تُقلَّد — مثالي لـ B2B.", types:["car","ig","li"] },
  { n:6, name:"تايم لابس — من الأرض للسماء", hook:"«شاهد 6 أشهر عمل في 30 ثانية»", desc:"أقوى محتوى في قطاع البناء عالمياً. مراحل المشروع الزمنية بموسيقى ملهمة. الخوارزمية تُحبه.", types:["reel","ig"] },
  { n:7, name:"جولة فيلا فاخرة", hook:"«هذا ليس فندقاً — هذا منزل»", desc:"ريلز جولة داخلية بحركة gimbal سينمائية. يستهدف أصحاب الفلل الراغبين في التجديد.", types:["reel","ig"] },
  { n:8, name:"سؤال وجواب", hook:"«5 أسئلة تسمعها كل يوم — إجاباتها هنا»", desc:"كاروسيل يجيب على أكثر الأسئلة شيوعاً. المحتوى التعليمي يُشارَك ويخلق نقاشاً واسعاً.", types:["car","ig"] },
  { n:9, name:"لينكدإن — صفوة ورؤية 2030", hook:"«المملكة تبني مستقبلها — ونحن جزء من هذا البناء»", desc:"منشور احترافي يربط الشركة بمشاريع رؤية 2030. يستهدف مدراء المشاريع والمطورين.", types:["li"] },
  { n:10, name:"تحدي — خمّن المشروع", hook:"«تقدر تعرف هذا المشروع من تفصيلة واحدة؟»", desc:"كاروسيل تفاعلي — تفصيلة غامضة ثم كشف تدريجي. يُفجّر التعليقات ويرفع التفاعل بشكل استثنائي.", types:["car","ig"] },
];

const roadmap = [
  { phase:"الأسبوعان 1–2", title:"التأسيس", tasks:["تحسين بايو الإنستغرام مع CTA واضح","إطلاق صفحة لينكدإن الرسمية","بناء مخزون محتوى: +20 صورة وفيديو للمشاريع","إعداد WhatsApp Business بردود سريعة","تحديد لغة العلامة التجارية وأسلوب الكتابة"] },
  { phase:"الأسابيع 3–6", title:"التفعيل", tasks:["إطلاق جدول النشر الكامل (4–5 منشورات أسبوعياً)","نشر أول 4 ريلز ومتابعة أدائها","إبراز عملاء أرامكو والبنك الأهلي","إطلاق أول حملة إنستغرام مدفوعة","التفاعل اليومي: الرد على التعليقات خلال ساعتين"] },
  { phase:"الأسابيع 7–12", title:"النمو والتحسين", tasks:["تحليل أفضل المنشورات أداءً ومضاعفة إنتاجها","إطلاق مقالات لينكدإن عن اتجاهات البناء","زيادة الإنفاق على الإعلانات الأفضل أداءً","إطلاق سلسلة ثابتة \"تحويل الثلاثاء\"","قياس الاستفسارات الواردة وربطها بمنشورات بعينها"] },
];

const pillMap = {
  ig:   { label:"إنستغرام", cls:"pill-ig"   },
  li:   { label:"لينكدإن",  cls:"pill-li"   },
  reel: { label:"ريلز",     cls:"pill-reel" },
  car:  { label:"كاروسيل", cls:"pill-car"  },
};

export default function EliteProposal() {
  const [activeFilter, setActiveFilter] = useState("all");
  const whatsappNumber = "966543569492";

  const createWhatsAppLink = (packageName) => {
    const message = packageName
      ? `مرحباً فريق نقطتين، أرغب بالاشتراك في ${packageName} الخاصة بعرض صفوة التشييد.`
      : "مرحباً فريق نقطتين، أرغب ببدء التعاون بخصوص عرض صفوة التشييد.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const filteredPosts = activeFilter === "all"
    ? posts
    : posts.filter(p => p.types.includes(activeFilter));

  return (
    <>
      <style>{styles}</style>
      <div className="page">

        {/* NAV */}
        <nav className="nav">
          <div>
            <div className="nav-logo">نقطتين · noqtatain</div>
            <div className="nav-sub">وكالة تسويق رقمي</div>
          </div>
          <div className="nav-date">العرض الفني والمالي — أبريل 2026</div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-geo" />
          <div className="hero-orb hero-orb1" />
          <div className="hero-orb hero-orb2" />
          <div className="hero-inner">
            <div className="hero-badge">عرض فني · مالي · تسويقي</div>
            <h1 className="hero-title">
              خطة التسويق الرقمي<br />لشركة صفوة التشييد
            </h1>
            <p className="hero-client">
              مقدّم من <span>نقطتين</span> لشركة صفوة التشييد للمقاولات العامة
            </p>
            <div className="hero-logos">
              <div className="hero-logo-box gold">● نقطتين · noqtatain.com</div>
              <div className="hero-arrow">&</div>
              <div className="hero-logo-box elite">■ EIC · صفوة التشييد</div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">+30</div>
                <div className="hero-stat-lbl">عاماً خبرة للعميل</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">20+</div>
                <div className="hero-stat-lbl">عميلاً مؤسسياً كبيراً</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">90</div>
                <div className="hero-stat-lbl">يوم خطة الإطلاق</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="section">
          <div className="section-label">من نحن</div>
          <h2 className="section-title">لماذا <em>نقطتين</em>؟</h2>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-icon">◆</div>
              <div className="who-title">متخصصون في التسويق الرقمي الإبداعي</div>
              <div className="who-text">نبني أفكار محتوى جريئة ورسائل تسويقية ذكية تُبرز قيمة علامتك وتحوّل الاهتمام إلى طلبات فعلية.</div>
            </div>
            <div className="who-card">
              <div className="who-icon">▲</div>
              <div className="who-title">نتائج قابلة للقياس</div>
              <div className="who-text">كل ريال تُنفقه له هدف واضح وتقرير شهري يُثبت العائد — لا كلام، أرقام.</div>
            </div>
            <div className="who-card">
              <div className="who-icon">●</div>
              <div className="who-title">فريق إبداعي متكامل</div>
              <div className="who-text">مصممون، مصورون، كُتّاب محتوى، ومحللو بيانات — تحت سقف واحد لخدمة حسابك.</div>
            </div>
            <div className="who-card">
              <div className="who-icon">■</div>
              <div className="who-title">شريك استراتيجي لا مُنفّذ</div>
              <div className="who-text">نفكر معك في الأهداف التجارية ونبني المحتوى الذي يُحوّل المتابع إلى عميل فعلي.</div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* TECHNICAL */}
        <section className="section">
          <div className="section-label">العرض الفني</div>
          <h2 className="section-title">ما الذي <em>نقدّمه</em> بالضبط؟</h2>
          <div className="tech-grid">
            {techItems.map(t => (
              <div className="tech-item" key={t.n}>
                <div className="tech-num">{t.n}</div>
                <div className="tech-content">
                  <div className="tech-name">{t.name}</div>
                  <div className="tech-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* PACKAGES */}
        <section className="section">
          <div className="section-label">العرض المالي</div>
          <h2 className="section-title">الباقات <em>التسويقية</em></h2>
          <div className="pkg-grid">
            {packages.map(pkg => (
              <div className={`pkg-card ${pkg.featured ? "featured" : ""}`} key={pkg.tier}>
                {pkg.featured && <div className="featured-tag">★ الأنسب لصفوة التشييد</div>}
                <div className="pkg-top">
                  <div className={`pkg-badge ${pkg.tier === "starter" ? "starter" : pkg.tier === "pro" ? "pro" : "elite"}`}>
                    {pkg.badge}
                  </div>
                  <div className="pkg-name">{pkg.name}</div>
                  <div className="pkg-desc">{pkg.desc}</div>
                  <div className="pkg-price">{pkg.price} <span>{pkg.currency}</span></div>
                </div>
                <div className="pkg-divider" />
                <div className="pkg-features">
                  {pkg.features.map((f,i) => (
                    <div className="pkg-feature" key={i}>
                      <span className={`pkg-check ${pkg.tier === "elite-pkg" ? "elite-check" : ""}`}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  className={`pkg-cta ${pkg.tier === "starter" ? "starter-cta" : pkg.tier === "pro" ? "pro-cta" : "elite-cta"}`}
                  href={createWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pkg.featured ? "ابدأ بهذه الباقة" : "اختر هذه الباقة"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* POSTS */}
        <section className="section">
          <div className="section-label">خطة المحتوى المبدئية</div>
          <h2 className="section-title">أول <em>10 منشورات</em> — جاهزة للتنفيذ</h2>
          <div className="posts-tabs">
            {[["all","الكل"],["reel","ريلز"],["car","كاروسيل"],["li","لينكدإن"]].map(([v,l]) => (
              <button
                key={v}
                className={`tab-btn ${activeFilter === v ? "active" : ""} ${["reel","car","li"].includes(v) ? "force-dark-label" : ""}`}
                onClick={() => setActiveFilter(v)}
              >{l}</button>
            ))}
          </div>
          <div className="posts-grid">
            {filteredPosts.map(p => (
              <div className="post-card" key={p.n}>
                <div className="post-card-header">
                  <div className="post-num-badge">{p.n}</div>
                  <div className="post-meta">
                    <div className="post-name">{p.name}</div>
                    <div className="post-type-row">
                      {p.types.map(t => (
                        <span key={t} className={`pill ${pillMap[t].cls}`}>{pillMap[t].label}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="post-hook">« {p.hook} »</div>
                <div className="post-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ROADMAP */}
        <section className="section">
          <div className="section-label">خارطة الطريق</div>
          <h2 className="section-title">الـ <em>90 يوم</em> الأولى</h2>
          <div className="roadmap">
            {roadmap.map((r,i) => (
              <div className="roadmap-item" key={i}>
                <div className="roadmap-left">
                  <div className="roadmap-dot">{i+1}</div>
                  {i < roadmap.length - 1 && <div className="roadmap-line" />}
                </div>
                <div className="roadmap-content">
                  <div className="roadmap-phase">{r.phase}</div>
                  <div className="roadmap-title">{r.title}</div>
                  <ul className="roadmap-tasks">
                    {r.tasks.map((t,j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-orb" />
          <div className="cta-inner">
            <h2 className="cta-title">لنبني <em>مستقبلك الرقمي</em> معاً</h2>
            <p className="cta-sub">
              شركة صفوة التشييد لديها كل المقومات لتكون العلامة التجارية الأقوى في قطاع الإنشاءات السعودي —
              المحتوى الصحيح سيُظهر للعالم ما تبنيه كل يوم.
            </p>
            <div className="cta-btns">
              <a className="btn-primary" href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">تواصل معنا الآن</a>
              <a className="btn-ghost" href="mailto:info@noqtatain.com?subject=طلب%20نسخة%20PDF%20-%20عرض%20صفوة%20التشييد">تحميل العرض PDF</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div>© 2026 نقطتين للتسويق الرقمي · <a href="https://noqtatain.com">noqtatain.com</a></div>
          <div>مُعدّ خصيصاً لشركة صفوة التشييد للمقاولات العامة</div>
        </footer>

      </div>
    </>
  );
}  
