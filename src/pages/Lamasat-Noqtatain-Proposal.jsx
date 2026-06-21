import React, { useState } from "react";
import {
  AlertTriangle,
  Globe,
  Bug,
  Instagram,
  Facebook,
  Twitter,
  Music2,
  Megaphone,
  Search,
  Rocket,
  TrendingUp,
  Workflow,
  MessageSquare,
  RefreshCw,
  BarChart3,
  Layers,
  CheckCircle2,
  Sparkles,
  Building2,
  MapPin,
} from "lucide-react";

/* ───────────────────────── design tokens ───────────────────────── */

const colors = {
  void: "#0A0A12",
  panel: "#14111F",
  panelAlt: "#1A1628",
  border: "rgba(139,92,246,0.16)",
  borderStrong: "rgba(139,92,246,0.32)",
  violet: "#8B5CF6",
  violetDeep: "#5B21B6",
  gold: "#D4AF7A",
  emerald: "#34D399",
  rose: "#F87171",
  textPrimary: "#F5F3F8",
  textMuted: "#A39DB8",
  textFaint: "#6F6A82",
};

const fonts = {
  display: "'IBM Plex Sans Arabic', sans-serif",
  body: "'IBM Plex Sans Arabic', sans-serif",
  data: "'Space Grotesk', sans-serif",
};

const N = ({ children, style }) => (
  <span dir="ltr" style={{ fontFamily: fonts.data, ...style }}>
    {children}
  </span>
);

/* ───────────────────────── content data ───────────────────────── */

const tickerItems = [
  "رمز التداول 9628",
  "التأسيس 1996",
  "10 فروع فاخرة",
  "رأس المال 81 مليون ريال",
  "متابعون إنستغرام 191K",
  "نسبة تغطية الاكتتاب 1101%",
  "إدراج نمو فبراير 2025",
];

const overviewStats = [
  { value: "1996", label: "سنة التأسيس", sub: "المدينة المنورة" },
  { value: "10", label: "فروع فاخرة", sub: "موزعة على 5 مدن" },
  { value: "9628", label: "رمز التداول", sub: "السوق الموازية نمو" },
  { value: "191K", label: "متابع إنستغرام", sub: "أكبر جمهور غير مُستثمر" },
];

const websiteAudit = [
  {
    level: "حرج",
    color: colors.rose,
    icon: AlertTriangle,
    title: "أسعار وهمية في المتجر الإلكتروني",
    desc:
      "عشرات الخدمات والمنتجات معروضة بسعر 0.00 أو 1.00 ريال — بيانات تجريبية لم تُستكمل، ما يعني أن أي محاولة حجز فعلية تصطدم بسعر غير منطقي.",
  },
  {
    level: "حرج",
    color: colors.rose,
    icon: Search,
    title: "عناوين الصفحات غير صحيحة في محركات البحث",
    desc:
      'الصفحة الرئيسية تحمل عنوان "تواصل معانا" بدل اسم العلامة، وصفحة المتجر تحمل عنوان "صالون المحمدية" — يضعف ظهور الموقع في نتائج جوجل بشكل مباشر.',
  },
  {
    level: "مرتفع",
    color: colors.gold,
    icon: Globe,
    title: "ثلاثة نطاقات متنافسة على نفس المحتوى",
    desc:
      "lamasat.com.sa وlamasatsalons.com وlamasatsalons.net تعرض محتوى متشابهًا في آن واحد، ما يربك محركات البحث ويُشتت الزيارات بدل تجميعها في موقع رسمي واحد.",
  },
  {
    level: "متوسط",
    color: colors.textMuted,
    icon: Bug,
    title: "رسائل خطأ برمجية ظاهرة للعميلات",
    desc:
      'قسم "ما نقدمه" في الصفحة الرئيسية يعرض نص الخطأ الداخلي لنظام إدارة الموقع بدلاً من المحتوى الفعلي.',
  },
];

const socialPlatforms = [
  {
    name: "إنستغرام",
    handle: "@lamasat_jeddah",
    followers: 191000,
    display: "191K",
    icon: Instagram,
    status: "القناة الأقوى",
    statusColor: colors.emerald,
    note: "7,605 منشورًا — أكبر رصيد جمهور للعلامة، لكنه محصور باسم وهوية «جدة» فقط رغم النطاق الوطني.",
  },
  {
    name: "تيك توك",
    handle: "@lamasat_jeddah",
    followers: 25000,
    display: "25K",
    icon: Music2,
    status: "فجوة واضحة",
    statusColor: colors.gold,
    note: "25 ألف متابع فقط، رغم أن تيك توك المحرّك الأقوى للاكتشاف في قطاع التجميل بالسعودية حاليًا.",
  },
  {
    name: "فيسبوك",
    handle: "lamasatbeautycenter.spa",
    followers: 488,
    display: "488",
    icon: Facebook,
    status: "شبه متوقف",
    statusColor: colors.rose,
    note: "488 إعجابًا فقط — رقم لا يعكس حجم شركة مدرجة بعشرة فروع.",
  },
  {
    name: "إكس (تويتر)",
    handle: "@LamasatSalon",
    followers: 0,
    display: "متوقف",
    icon: Twitter,
    status: "مهجور",
    statusColor: colors.rose,
    note: "لا نشاط ملحوظ منذ نحو 2016 — الحساب لا يزال معروضًا كقناة رسمية رغم توقفه الكامل.",
  },
];

const maxFollowers = 191000;

const fragmentation = [
  {
    platform: "إنستغرام",
    items: [
      "@lamasat_jeddah — 191K متابع، الحساب الرئيسي محصور باسم جدة",
      "@lamasat_jeddah_spa — 2.4K متابع، حساب مكرر لنفس الفروع",
      "حساب مستقل آخر خاص بفرع الرياض وحده",
    ],
  },
  {
    platform: "سناب شات",
    items: [
      "كل فرع يدير حسابًا منفصلًا بهويته الخاصة",
      "لا يوجد حساب مركزي يمثل الشركة على مستوى المملكة",
    ],
  },
  {
    platform: "نطاقات الموقع",
    items: [
      "lamasat.com.sa",
      "lamasatsalons.com",
      "lamasatsalons.net — ثلاثة مواقع بمحتوى شبه متطابق",
    ],
  },
];

const marketingServices = [
  {
    icon: Megaphone,
    title: "توحيد الهوية الرقمية الوطنية",
    desc: "دمج الحسابات المكررة وبناء هوية واحدة تمثّل لمسات كعلامة بعشرة فروع، لا كصالون جدة فقط.",
  },
  {
    icon: Search,
    title: "إصلاح السيو وأرشفة الموقع",
    desc: "تصحيح عناوين وأوصاف الصفحات، وحسم تضارب النطاقات الثلاثة لصالح موقع رسمي واحد.",
  },
  {
    icon: Music2,
    title: "خطة محتوى مكثفة لتيك توك",
    desc: "سد الفجوة بين 191 ألف متابع على إنستغرام و25 ألفًا فقط على تيك توك.",
  },
  {
    icon: TrendingUp,
    title: "إدارة إعلانات ممولة",
    desc: "حملات مدفوعة على سناب شات وتيك توك وميتا، موجَّهة جغرافيًا لكل مدينة فيها فرع.",
  },
  {
    icon: Rocket,
    title: "تغطية افتتاح الفروع الجديدة",
    desc: "خطة إطلاق رقمي وإعلامي لفروع الدمام والرياض وينبع المزمع افتتاحها قبل نهاية 2026.",
  },
];

const automationServices = [
  {
    icon: Workflow,
    title: "نظام حجز موحّد عبر الفروع",
    desc: "استبدال نظام المتجر الحالي ببنية حجز فعلية تدعم كل فرع بأسعاره الصحيحة.",
  },
  {
    icon: MessageSquare,
    title: "صندوق وارد موحّد عبر بيتركس24",
    desc: "تجميع رسائل واتساب وإنستغرام وفيسبوك من كل الفروع في لوحة واحدة بدل التشتت الحالي.",
  },
  {
    icon: RefreshCw,
    title: "أتمتة تذكير الحجوزات والتقييمات",
    desc: "رسائل تلقائية تذكّر العميلة بموعدها وتجمع تقييمها بعد كل زيارة دون تدخل يدوي.",
  },
  {
    icon: BarChart3,
    title: "لوحة تحكم مركزية للإدارة",
    desc: "رؤية لحظية لأداء كل فرع من مكان واحد، بدل تتبع كل فرع على حدة.",
  },
  {
    icon: Layers,
    title: "بنية رقمية قابلة للتوسع",
    desc: "جاهزة لاستيعاب الفروع الثلاثة الجديدة فور افتتاحها دون إعادة بناء من الصفر.",
  },
];

const tiers = [
  {
    name: "التأسيس",
    tagline: "إصلاح الأساسيات أولًا",
    monthly: 9500,
    setup: 15000,
    highlighted: false,
    features: [
      "تدقيق وإصلاح السيو للموقع بالكامل",
      "إدارة حسابي إنستغرام وتيك توك الرئيسيين",
      "خطة محتوى 30 منشورًا شهريًا (تصوير، تصميم، نشر)",
      "ربط أساسي لقناة واتساب واحدة ببيتركس24",
      "تقرير أداء شهري مفصل",
    ],
  },
  {
    name: "النمو",
    tagline: "الأنسب لعلامة بحجم لمسات",
    monthly: 18000,
    setup: 25000,
    highlighted: true,
    features: [
      "كل ما في باقة التأسيس",
      "إدارة حملات إعلانية ممولة (سناب، تيك توك، ميتا)",
      "صندوق وارد بيتركس24 موحّد لكل القنوات والفروع",
      "أتمتة تذكير الحجوزات وجمع التقييمات تلقائيًا",
      "محتوى فيديو أسبوعي مخصص لتيك توك",
      "اجتماع استراتيجية شهري مع فريق نقطتين",
    ],
  },
  {
    name: "العلامة الوطنية",
    tagline: "لمرحلة الفروع العشرة وما بعدها",
    monthly: 32000,
    setup: 40000,
    highlighted: false,
    features: [
      "كل ما في باقة النمو",
      "توحيد ودمج كل الحسابات المكررة عبر الفروع العشرة",
      "لوحة تحكم مركزية لأداء كل فرع لحظيًا",
      "خطة تغطية كاملة لافتتاح فروع الدمام والرياض وينبع",
      "أتمتة كاملة لرحلة العميلة من الحجز حتى ما بعد الزيارة",
      "مدير حساب مخصص وتقارير أسبوعية",
    ],
  },
];

const roadmap = [
  {
    month: "الشهر الأول",
    title: "التشخيص والإصلاح",
    items: [
      "إصلاح الأخطاء التقنية في الموقع (الأسعار، العناوين)",
      "حسم تضارب النطاقات الثلاثة",
      "إعداد بيتركس24 الأساسي",
    ],
  },
  {
    month: "الشهر الثاني",
    title: "التوحيد والإطلاق",
    items: [
      "دمج الحسابات المكررة في هوية واحدة",
      "إطلاق الهوية الرقمية الموحدة",
      "تفعيل صندوق الوارد الموحّد",
    ],
  },
  {
    month: "الشهر الثالث فما بعد",
    title: "النمو والتوسع",
    items: [
      "تكثيف المحتوى والإعلانات الممولة",
      "الاستعداد لتغطية افتتاح الفروع الجديدة",
      "تقييم الأداء وتوسيع النطاق",
    ],
  },
];

/* ───────────────────────── shared bits ───────────────────────── */

const Eyebrow = ({ children }) => (
  <div
    style={{
      color: colors.gold,
      fontFamily: fonts.body,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 1,
      marginBottom: 10,
    }}
  >
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, sub }) => (
  <div style={{ marginBottom: 44, maxWidth: 720 }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2
      style={{
        fontFamily: fonts.display,
        fontWeight: 700,
        fontSize: "clamp(24px, 3.2vw, 34px)",
        color: colors.textPrimary,
        margin: 0,
        lineHeight: 1.35,
      }}
    >
      {title}
    </h2>
    {sub && (
      <p
        style={{
          fontFamily: fonts.body,
          color: colors.textMuted,
          fontSize: 16,
          lineHeight: 1.9,
          marginTop: 14,
        }}
      >
        {sub}
      </p>
    )}
  </div>
);

const Card = ({ children, style }) => (
  <div
    style={{
      background: colors.panel,
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: 26,
      ...style,
    }}
  >
    {children}
  </div>
);

/* ───────────────────────── main component ───────────────────────── */

export default function LamasatProposal() {
  const [prepay, setPrepay] = useState(false);

  return (
    <div
      dir="rtl"
      lang="ar"
      style={{
        background: colors.void,
        color: colors.textPrimary,
        fontFamily: fonts.body,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        * { box-sizing: border-box; }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 32s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }

        .pricing-card { transition: transform 0.25s ease, border-color 0.25s ease; }
        .pricing-card:hover { transform: translateY(-6px); border-color: ${colors.borderStrong}; }

        .audit-card, .stat-card, .service-card { transition: border-color 0.2s ease; }
        .audit-card:hover, .stat-card:hover, .service-card:hover { border-color: ${colors.borderStrong}; }

        .toggle-btn:focus-visible, .pricing-card:focus-visible {
          outline: 2px solid ${colors.violet};
          outline-offset: 3px;
        }

        ::selection { background: ${colors.violet}; color: white; }
      `}</style>

      {/* ───────── ticker ───────── */}
      <div
        style={{
          borderBottom: `1px solid ${colors.border}`,
          overflow: "hidden",
          background: colors.panel,
          padding: "10px 0",
        }}
      >
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 22px",
                whiteSpace: "nowrap",
                fontSize: 13,
                color: colors.textMuted,
              }}
            >
              <span style={{ color: colors.gold, fontFamily: fonts.data }}>9628</span>
              <span>{item}</span>
              <span style={{ color: colors.borderStrong }}>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── hero ───────── */}
      <header style={{ padding: "76px 24px 60px", maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: colors.violet, display: "inline-block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: colors.gold, display: "inline-block" }} />
          </div>
          <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 15, color: colors.textMuted }}>
            نقطتين · Noqtatain
          </span>
        </div>

        <Eyebrow>مقترح تعاون رقمي مقدَّم من نقطتين إلى شركة لمسات</Eyebrow>

        <h1
          style={{
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: "clamp(32px, 5.2vw, 56px)",
            lineHeight: 1.25,
            margin: "0 0 24px",
            maxWidth: 880,
          }}
        >
          الشركة دخلت السوق المالية،
          <br />
          وحان وقت أن يدخل حضورها الرقمي معها
        </h1>

        <p style={{ color: colors.textMuted, fontSize: 18, lineHeight: 2, maxWidth: 680, margin: "0 0 40px" }}>
          في فبراير 2025 أصبحت لمسات أول شركة سعودية متخصصة في التجميل تُدرج في السوق
          الموازية «نمو»، ومتحصلات الطرح مخصصة لفتح ثلاثة فروع جديدة في الدمام والرياض
          وينبع قبل نهاية 2026. لكن الحضور الرقمي للعلامة ما زال يعمل بمنطق «كل فرع لحاله»
          الذي بُني عليه منذ سنوات — وهذا بالضبط ما يضعه هذا المقترح على الطاولة.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          {overviewStats.map((s, i) => (
            <Card key={i} style={{ textAlign: "center", padding: "22px 14px" }}>
              <div style={{ fontFamily: fonts.data, fontWeight: 700, fontSize: 30, color: colors.gold }}>
                <N>{s.value}</N>
              </div>
              <div style={{ fontSize: 14, marginTop: 6, color: colors.textPrimary }}>{s.label}</div>
              <div style={{ fontSize: 12, marginTop: 2, color: colors.textFaint }}>{s.sub}</div>
            </Card>
          ))}
        </div>
      </header>

      {/* ───────── website audit ───────── */}
      <section style={{ padding: "20px 24px 80px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="القسم الأول — تحليل الوضع الحالي"
          title="الموقع الإلكتروني: محتوى قوي، تنفيذ تقني مكسور"
          sub="قصة التأسيس والإنجاز المالي موجودة وقوية على الموقع، لكن البنية التقنية التي تحملها تحتاج إصلاحًا عاجلاً قبل أي استثمار تسويقي إضافي."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {websiteAudit.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="audit-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: colors.panelAlt,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: item.color,
                      border: `1px solid ${item.color}55`,
                      borderRadius: 999,
                      padding: "3px 10px",
                    }}
                  >
                    {item.level}
                  </span>
                </div>
                <h3 style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.textMuted, fontSize: 14, lineHeight: 1.9, margin: 0 }}>{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ───────── social audit ───────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="القسم الثاني"
          title="حسابات التواصل: جمهور ضخم في منصة واحدة، وضعف شديد في الباقي"
          sub="191 ألف متابع على إنستغرام رصيد حقيقي — لكنه محصور في منصة واحدة، بينما باقي المنصات إما ضعيفة أو متوقفة تمامًا."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {socialPlatforms.map((p, i) => {
            const Icon = p.icon;
            const pct = Math.max((p.followers / maxFollowers) * 100, p.followers > 0 ? 1.5 : 0);
            return (
              <Card key={i} style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: colors.panelAlt,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={colors.textPrimary} />
                  </div>

                  <div style={{ minWidth: 140 }}>
                    <div style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 15 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: colors.textFaint, fontFamily: fonts.data }} dir="ltr">
                      {p.handle}
                    </div>
                  </div>

                  <div style={{ flex: "1 1 220px", minWidth: 180 }}>
                    <div style={{ height: 8, borderRadius: 999, background: colors.panelAlt, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          borderRadius: 999,
                          background: `linear-gradient(90deg, ${colors.violet}, ${colors.gold})`,
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ fontFamily: fonts.data, fontWeight: 700, fontSize: 22, color: colors.gold, minWidth: 70, textAlign: "left" }}>
                    {p.display}
                  </div>

                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: p.statusColor,
                      border: `1px solid ${p.statusColor}55`,
                      borderRadius: 999,
                      padding: "4px 12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <p style={{ color: colors.textMuted, fontSize: 13, lineHeight: 1.8, margin: "14px 0 0" }}>{p.note}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ───────── fragmentation ───────── */}
      <section style={{ padding: "0 24px 90px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="القسم الثالث"
          title="جذر المشكلة: تشتت وليس ضعفًا فقط"
          sub="الحضور الرقمي بُني تاريخيًا بمنطق «كل فرع لحاله». اليوم لمسات كيان واحد مدرج في السوق المالية، وهذا التشتت يُضعف كل فرع على حدة بدل أن يقوّيها مجتمعة."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {fragmentation.map((group, i) => (
            <Card key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <Building2 size={17} color={colors.violet} />
                <h3 style={{ fontFamily: fonts.display, fontSize: 15, fontWeight: 600, margin: 0 }}>{group.platform}</h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {group.items.map((it, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: colors.textMuted, lineHeight: 1.8 }}>
                    <MapPin size={14} color={colors.gold} style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────── diagnosis statement ───────── */}
      <section style={{ padding: "0 24px 90px", maxWidth: 1180, margin: "0 auto" }}>
        <Card
          style={{
            background: `linear-gradient(135deg, ${colors.panelAlt}, ${colors.panel})`,
            border: `1px solid ${colors.borderStrong}`,
            padding: "44px 36px",
            textAlign: "center",
          }}
        >
          <Sparkles size={22} color={colors.gold} style={{ marginBottom: 16 }} />
          <p
            style={{
              fontFamily: fonts.display,
              fontWeight: 600,
              fontSize: "clamp(18px, 2.4vw, 24px)",
              lineHeight: 1.7,
              maxWidth: 760,
              margin: "0 auto",
              color: colors.textPrimary,
            }}
          >
            الشركة كبرت — مالًا، وفروعًا، وثقة مستثمرين — لكن حضورها الرقمي لم يكبر معها.
            ما تحتاجه لمسات الآن ليس مزيدًا من المنشورات، بل بنية رقمية وتشغيلية موحّدة
            تليق بشركة مدرجة تستعد لثلاثة فروع جديدة.
          </p>
        </Card>
      </section>

      {/* ───────── what noqtatain offers ───────── */}
      <section style={{ padding: "0 24px 30px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="القسم الرابع — ما تقدّمه نقطتين"
          title="عرض متكامل: تسويق وأتمتة في خطة واحدة"
          sub="كل خدمة هنا مبنية مباشرة على نتيجة من التحليل أعلاه، لا على قائمة خدمات عامة."
        />
      </section>

      <section style={{ padding: "0 24px 90px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 28 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Megaphone size={18} color={colors.gold} />
              <h3 style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 700, margin: 0 }}>محور التسويق</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {marketingServices.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={i} className="service-card" style={{ display: "flex", gap: 14, padding: "18px 20px" }}>
                    <Icon size={18} color={colors.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.8 }}>{s.desc}</div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Workflow size={18} color={colors.violet} />
              <h3 style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 700, margin: 0 }}>محور الأتمتة</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {automationServices.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={i} className="service-card" style={{ display: "flex", gap: 14, padding: "18px 20px" }}>
                    <Icon size={18} color={colors.violet} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.8 }}>{s.desc}</div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── pricing ───────── */}
      <section style={{ padding: "0 24px 30px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="القسم الخامس"
          title="الباقات والأسعار"
          sub="ثلاث باقات شهرية، بالإضافة إلى رسوم تأسيس تقنية لمرة واحدة تغطي إصلاح الموقع وحسم تضارب النطاقات وإعداد بيتركس24."
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34 }}>
          <span style={{ fontSize: 14, color: prepay ? colors.textFaint : colors.textPrimary }}>دفع شهري</span>
          <button
            className="toggle-btn"
            onClick={() => setPrepay(!prepay)}
            aria-pressed={prepay}
            style={{
              width: 52,
              height: 28,
              borderRadius: 999,
              border: `1px solid ${colors.borderStrong}`,
              background: prepay ? colors.violet : colors.panelAlt,
              position: "relative",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 2,
                right: prepay ? 26 : 2,
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: colors.textPrimary,
                transition: "right 0.2s ease",
              }}
            />
          </button>
          <span style={{ fontSize: 14, color: prepay ? colors.textPrimary : colors.textFaint }}>
            دفع 6 أشهر مقدمًا{" "}
            <span style={{ color: colors.emerald, fontWeight: 600 }}>(خصم 10٪)</span>
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
          {tiers.map((t, i) => {
            const price = prepay ? Math.round(t.monthly * 0.9) : t.monthly;
            return (
              <Card
                key={i}
                tabIndex={0}
                className="pricing-card"
                style={{
                  padding: "30px 26px",
                  border: t.highlighted ? `1px solid ${colors.gold}` : `1px solid ${colors.border}`,
                  background: t.highlighted
                    ? `linear-gradient(160deg, ${colors.panelAlt}, ${colors.panel})`
                    : colors.panel,
                  position: "relative",
                }}
              >
                {t.highlighted && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      insetInlineStart: 26,
                      background: colors.gold,
                      color: colors.void,
                      fontSize: 11,
                      fontWeight: 700,
                      borderRadius: 999,
                      padding: "4px 14px",
                    }}
                  >
                    الأكثر ملاءمة
                  </span>
                )}
                <div style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 19, marginBottom: 4 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 13, color: colors.textMuted, marginBottom: 22 }}>{t.tagline}</div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: fonts.data, fontWeight: 700, fontSize: 34, color: colors.gold }}>
                    <N>{price.toLocaleString("en-US")}</N>
                  </span>
                  <span style={{ fontSize: 13, color: colors.textMuted }}>ر.س / شهريًا</span>
                </div>
                <div style={{ fontSize: 12, color: colors.textFaint, marginBottom: 24 }}>
                  + رسوم تأسيس لمرة واحدة <N>{t.setup.toLocaleString("en-US")}</N> ر.س
                </div>

                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                  {t.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, fontSize: 13.5, lineHeight: 1.7 }}>
                      <CheckCircle2 size={16} color={t.highlighted ? colors.gold : colors.violet} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: colors.textMuted }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <p style={{ fontSize: 12.5, color: colors.textFaint, marginTop: 22 }}>
          الحد الأدنى للتعاقد 3 أشهر. الأسعار لا تشمل ضريبة القيمة المضافة ولا ميزانيات الإعلانات الممولة نفسها (تُدار من قبلنا وتُحدَّد منفصلة حسب الأهداف).
        </p>
      </section>

      {/* ───────── roadmap ───────── */}
      <section style={{ padding: "60px 24px 90px", maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle eyebrow="القسم السادس" title="خارطة الطريق — أول 90 يومًا" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {roadmap.map((phase, i) => (
            <Card key={i}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: colors.panelAlt,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.data,
                  fontWeight: 700,
                  color: colors.gold,
                  marginBottom: 16,
                }}
              >
                <N>{i + 1}</N>
              </div>
              <div style={{ fontSize: 12, color: colors.textFaint, marginBottom: 4 }}>{phase.month}</div>
              <h3 style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, margin: "0 0 14px" }}>
                {phase.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {phase.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.8, display: "flex", gap: 8 }}>
                    <span style={{ color: colors.violet }}>—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* ───────── closing ───────── */}
      <footer
        style={{
          borderTop: `1px solid ${colors.border}`,
          padding: "60px 24px 50px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 18 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: colors.violet, display: "inline-block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: colors.gold, display: "inline-block" }} />
          </div>
          <h3 style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "clamp(20px,2.6vw,28px)", margin: "0 0 14px" }}>
            لمسات أول علامة تجميل سعودية مدرجة — لنجعل حضورها الرقمي بالمستوى نفسه
          </h3>
          <p style={{ color: colors.textMuted, fontSize: 14, maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.9 }}>
            نقطتين جاهزة للبدء بالمرحلة الأولى فور الاعتماد.
          </p>
          <div style={{ fontSize: 13, color: colors.textFaint }}>نقطتين للتسويق الرقمي والأتمتة · الرياض، المملكة العربية السعودية</div>
        </div>
      </footer>
    </div>
  );
}
