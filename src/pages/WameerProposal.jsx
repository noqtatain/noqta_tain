import { useState, useEffect } from "react";
import { ANSWER_LABELS } from "./WameerDiagnostic";
import noqtatainLogo from "@/assets/logo-transparent.png";

/**
 * العرض الكامل — وامر العقارية × نقطتين
 * مكوّن عرض مستقل (صفحة واحدة) بهوية نقطتين.
 * يقرأ إجابات التشخيص الرقمي من نفس مفتاح التخزين المحلي الذي يحفظ
 * فيه WameerDiagnostic.jsx، ويحوّل النقاط المفتوحة إلى نقاط مؤكّدة
 * عندما يكون لها إجابة من العميل.
 */

const STORAGE_KEY = "wameer:diagnostic:answers";

/* ============ المحتوى ============ */

const COMPANY = [
  ["النشاط الأساسي", "تسويق وتطوير عقاري · وكيل بيع قضائي · تنظيم مزادات"],
  ["المقر", "الرياض – حي شبرا – مخرج ٢٥"],
  ["الترخيص", "رخصة فال رقم ١٢٠٠٠٢٦٠٠٥"],
  ["القنوات", "واتساب · منصة X · نموذج تواصل على الموقع"],
  ["منصات التشغيل", "السعودية للمزادات · مباشر (طرف ثالث)"],
  ["النطاق", "الرياض · جدة · المدينة المنورة"],
];

// تحليل الحضور الرقمي — مؤكّد (مرئي) مقابل مفتوح (للتحقق)
// كل نقطة "open" مرتبطة بمعرّف سؤال من التشخيص الرقمي (qid) كي تتحوّل
// تلقائياً إلى نقطة مؤكّدة بإجابة العميل الفعلية عند توفّرها.
const FINDINGS = [
  {
    area: "الموقع الإلكتروني",
    confirmed: [
      "صفحة تعريفية واحدة أنيقة بصرياً لكنها محدودة وظيفياً.",
      "صفحة الإدارة تظهر بقوالب افتراضية («الاسم»، «رئيس مجلس الإدارة»).",
      "لا توجد صفحة مزادات حيّة أو أرشيف؛ التحويل دائماً لمنصّات خارجية.",
    ],
    open: [
      { text: "هل نموذج «تواصل معنا» مربوط بنظام إدارة عملاء؟", qid: "crm" },
      { text: "هل توجد أدوات قياس وتتبّع (Analytics / Pixel) مرتبطة بالموقع؟", qid: "analytics" },
    ],
  },
  {
    area: "منصّة X (@wameer_24)",
    confirmed: [
      "المحتوى تشغيلي: إعلانات مزادات مع روابط لمنصّات خارجية.",
      "الاعتماد على حسابات وسيطة ينقل جزءاً من قيمة العلامة لأطراف أخرى.",
    ],
    open: [
      { text: "هل تُلتقط بيانات المتابعين المهتمّين ويُعاد استهدافهم؟", qid: "retarget" },
    ],
  },
  {
    area: "القنوات والأتمتة",
    confirmed: [
      "واتساب قناة تواصل رئيسية ومعلنة.",
    ],
    open: [
      { text: "ما مستوى أتمتة واتساب (ردود فورية، تأهيل، متابعة مجدولة)؟", qid: "whatsapp" },
      { text: "هل تُستثمر بيانات المزايدين السابقين في تنبيهات بمزادات مشابهة؟", qid: "retarget" },
    ],
  },
];

const SWOT = {
  strengths: ["هوية بصرية راقية ورسالة واضحة", "ترخيص فال ووكالة بيع قضائي", "تنوّع جغرافي للمزادات", "قطاع نامٍ مدعوم برؤية ٢٠٣٠"],
  weaknesses: ["موقع تعريفي بلا التقاط عملاء", "اعتماد كامل على منصّات خارجية", "قوالب افتراضية في صفحة الإدارة", "غياب قناة رقمية مملوكة"],
  opportunities: ["بناء منصّة مزادات مملوكة", "استثمار قاعدة المزايدين بإعادة الاستهداف", "محتوى استثماري يجذب الباحثين عن فرص", "أتمتة واتساب لرفع سرعة الاستجابة"],
  threats: ["منافسة شركات أكثر نضجاً رقمياً", "فقدان قيمة العلامة لمنصّات وسيطة", "ضياع العملاء بالمتابعة اليدوية", "تشدّد تنظيمي يتطلّب احترافية أعلى"],
};

const PACKAGES = [
  {
    num: "٠١", title: "منصّة رقمية مملوكة",
    desc: "موقع متعدّد الصفحات بمعمارية الجوال أولاً يحوّل الزائر إلى عميل محتمل.",
    items: ["صفحة مزادات حيّة وأرشيف بنتائجه لبناء الثقة", "صفحات هبوط لكل مزاد قابلة للربط بالحملات", "نماذج التقاط ذكية مرتبطة بالـCRM", "هوية احترافية لصفحة الإدارة والفريق"],
  },
  {
    num: "٠٢", title: "نظام إدارة العملاء Bitrix24",
    desc: "توحيد العملاء من الموقع وX وواتساب في مسار مبيعات واحد.",
    items: ["مسار مخصّص لرحلة المزايد (اهتمام ← تأهيل ← مزايدة ← إغلاق)", "توزيع تلقائي مع تنبيهات متابعة", "لوحات تقارير لمصادر العملاء وكفاءة التحويل", "تصنيف المستثمرين حسب نوع العقار والمنطقة"],
  },
  {
    num: "٠٣", title: "أتمتة واتساب",
    desc: "تحويل واتساب من قناة يدوية إلى محرّك استجابة ومتابعة آلي.",
    items: ["ردود فورية وتأهيل أولي للمهتمّين", "تنبيهات تلقائية بالمزادات المطابقة للاهتمام", "متابعة مجدولة قبل وبعد كل مزاد", "أرشفة المحادثات داخل ملف العميل"],
  },
  {
    num: "٠٤", title: "التسويق الرقمي والمحتوى",
    desc: "حضور يجذب المستثمرين بين المزادات لا أثناءها فقط.",
    items: ["إدارة احترافية لحساب X بمحتوى استثماري", "حملات مدارة (Meta / X) موجّهة لصفحات الهبوط", "تحسين الظهور في محركات البحث (SEO)", "إعادة استهداف الزوّار والمزايدين السابقين"],
  },
];

const ROADMAP = [
  ["المرحلة الأولى", "الأسابيع ١–٤", "تركيب Bitrix24، ربط واتساب والموقع بنظام الالتقاط، وتوحيد القنوات."],
  ["المرحلة الثانية", "الأسابيع ٥–١٠", "تطوير المنصّة المملوكة وصفحات المزادات والهبوط."],
  ["المرحلة الثالثة", "الأسابيع ١١–١٤", "إطلاق أتمتة واتساب الكاملة وحملات إعادة الاستهداف."],
  ["المرحلة الرابعة", "مستمر", "إدارة المحتوى والحملات وتحسين معدّلات التحويل بالتقارير."],
];

const WHY = [
  "خبرة عميقة في Bitrix24 وأتمتة واتساب وأنظمة إدارة العملاء للسوق السعودي.",
  "فهم لمتطلّبات قطاع المزادات والبيئة التنظيمية للهيئة العامة للعقار.",
  "نهج يجمع الجمالية الراقية بالبنية التقنية القابلة للقياس.",
  "شراكة طويلة المدى تبني أصلاً رقمياً تملكه وامر بالكامل.",
];

const OWNED_CHANNEL_NOTES = {
  yes: "بناءً على إجابتكم بأنّ امتلاك منصّة مزادات رقمية أولوية لكم، نوصي بالبدء بالحزمة ٠١ ضمن المرحلة الأولى.",
  maybe: "بما أنّكم تفكّرون حالياً في قناة مملوكة، أدرجنا الحزمة ٠١ كخيار مرن ضمن خارطة الطريق يمكن جدولته بعد استقرار القنوات الحالية.",
};

/* ============ أدوات مساعدة لدمج إجابات التشخيص ============ */

function splitOpenFindings(open, answers) {
  const resolved = [];
  const remaining = [];
  open.forEach((item) => {
    const value = answers[item.qid];
    if (value) {
      resolved.push({ question: item.text, answer: ANSWER_LABELS[item.qid]?.[value] || "تم التأكيد من العميل" });
    } else {
      remaining.push(item.text);
    }
  });
  return { resolved, remaining };
}

/* ============ المكوّن ============ */

export default function WameerProposal() {
  const [openPkg, setOpenPkg] = useState(0);
  const [answers, setAnswers] = useState({});
  const [clientNotes, setClientNotes] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setAnswers(parsed.answers || {});
        setClientNotes(parsed.notes || "");
      }
    } catch (e) {
      // لا توجد إجابات محفوظة — يُعرض العرض بصيغته العامة
    } finally {
      // إعادة تصفير إجابات التشخيص بعد عرضها هنا، كي تبدأ أي زيارة لاحقة لصفحة التشخيص فارغة
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const hasAnswers = Object.keys(answers).length > 0;

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const ctaMessage = encodeURIComponent(
    `مرحباً، أرغب في حجز جلسة عمل لمناقشة عرض نقطتين المقترح لشركة وامر العقارية.\nرابط العرض: ${pageUrl}`
  );
  const ctaWhatsappUrl = `https://wa.me/966543569492?text=${ctaMessage}`;

  return (
    <div dir="rtl" style={S.outer}>
      <div style={S.page}>
      <style>{CSS}</style>

      {/* الغلاف */}
      <section style={S.cover}>
        <div style={S.coverGlow} />
        <img src={noqtatainLogo} alt="نقطتين" style={S.brandLogo} />
        <span style={S.brandMark}>نقطتين</span>
        <span style={S.brandSub}>Noqtatain · شريكك التقني في التسويق</span>
        <h1 style={S.coverTitle}>تحليل الأعمال والحضور الرقمي</h1>
        <p style={S.coverLead}>مع عرض خدمات مُقترح</p>
        <div style={S.coverClient}>
          <span style={S.coverClientName}>شركة وامر العقارية</span>
          <span style={S.coverClientEn}>Wamer Real Estate</span>
        </div>
        <span style={S.coverMeta}>وثيقة خاصة · فريق نقطتين · يونيو ٢٠٢٦</span>
      </section>

      {/* الملخّص التنفيذي */}
      <Section n="٠١" title="الملخّص التنفيذي">
        <p style={S.body}>
          وامر العقارية شركة سعودية متخصّصة في التسويق والتطوير العقاري، ومن أبرز نشاطاتها العمل كوكيل
          بيع قضائي وتنظيم المزادات. تمتلك هويّة راقية ورسالة مبنيّة على «صناعة الثقة»، إلا أنّ حضورها
          الرقمي وبنيتها التشغيلية دون مستوى طموح علامتها وحجم الفرص في السوق.
        </p>
        <p style={S.body}>
          يكشف التحليل عن فجوات قابلة للمعالجة في ثلاثة محاور: ضعف تحويل الزيارات إلى عملاء، الاعتماد
          الكامل على منصّات خارجية دون قناة مملوكة، ومحدودية الأتمتة في متابعة المزايدين. ويقترح خارطة
          طريق ترفع كفاءة التحويل وتبني أصلاً رقمياً تملكه وامر بالكامل.
        </p>
      </Section>

      {/* لمحة عن الشركة */}
      <Section n="٠٢" title="لمحة عن الشركة">
        <div style={S.factGrid}>
          {COMPANY.map(([k, v]) => (
            <div key={k} style={S.fact}>
              <span style={S.factKey}>{k}</span>
              <span style={S.factVal}>{v}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* الحضور الرقمي */}
      <Section n="٠٣" title="تحليل الحضور الرقمي">
        <p style={S.note}>
          {hasAnswers
            ? "حدّثنا النقاط أدناه بناءً على إجاباتكم في التشخيص الرقمي — ما تبقّى دون إجابة لا يزال بحاجة لتأكيدكم."
            : "نفصل بين ما يمكن ملاحظته من الخارج (مؤكّد) وما يحتاج تأكيداً منكم (نقاط مفتوحة) — حفاظاً على دقّة التحليل."}
        </p>
        {FINDINGS.map((f) => {
          const { resolved, remaining } = splitOpenFindings(f.open, answers);
          return (
            <div key={f.area} style={S.findCard}>
              <h3 style={S.findArea}>{f.area}</h3>
              <div style={S.findCols}>
                <div style={S.findCol}>
                  <span style={{ ...S.findTag, color: "#5BD68A", borderColor: "rgba(91,214,138,.35)" }}>
                    ملاحظات مؤكّدة
                  </span>
                  {f.confirmed.map((t, i) => <p key={i} style={S.findItem}>• {t}</p>)}
                  {resolved.map((r, i) => (
                    <p key={`r-${i}`} style={S.findItem}>✓ {r.question} — {r.answer}</p>
                  ))}
                </div>
                {remaining.length > 0 && (
                  <div style={S.findCol}>
                    <span style={{ ...S.findTag, color: GOLD, borderColor: "rgba(201,162,39,.4)" }}>
                      نقاط نودّ تأكيدها معكم
                    </span>
                    {remaining.map((t, i) => <p key={i} style={S.findItem}>؟ {t}</p>)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {clientNotes && clientNotes.trim() && (
          <div style={S.findCard}>
            <h3 style={S.findArea}>ملاحظات العميل</h3>
            <p style={S.findItem}>{clientNotes.trim()}</p>
          </div>
        )}
      </Section>

      {/* SWOT */}
      <Section n="٠٤" title="تحليل SWOT المختصر">
        <div style={S.swotGrid}>
          <SwotBox title="نقاط القوة" items={SWOT.strengths} c="#5BD68A" bg="rgba(91,214,138,.08)" />
          <SwotBox title="نقاط الضعف" items={SWOT.weaknesses} c="#FF6B6B" bg="rgba(255,107,107,.08)" />
          <SwotBox title="الفرص" items={SWOT.opportunities} c="#6D9BFF" bg="rgba(109,155,255,.08)" />
          <SwotBox title="التهديدات" items={SWOT.threats} c="#E0A93B" bg="rgba(224,169,59,.08)" />
        </div>
      </Section>

      {/* العرض */}
      <Section n="٠٥" title="عرض خدمات نقطتين">
        <p style={S.body}>
          نقترح خارطة تحوّل وامر من حضور تعريفي إلى منظومة رقمية تُنتج عملاء مؤهّلين وتُدار بكفاءة.
        </p>
        {OWNED_CHANNEL_NOTES[answers.ownedchannel] && (
          <p style={S.note}>{OWNED_CHANNEL_NOTES[answers.ownedchannel]}</p>
        )}
        <div style={S.pkgList}>
          {PACKAGES.map((p, i) => {
            const open = openPkg === i;
            return (
              <div key={p.num} style={{ ...S.pkg, ...(open ? S.pkgOpen : {}) }}>
                <button style={S.pkgHead} onClick={() => setOpenPkg(open ? -1 : i)}>
                  <span style={S.pkgNum}>{p.num}</span>
                  <span style={S.pkgTitle}>{p.title}</span>
                  <span style={{ ...S.pkgChevron, transform: open ? "rotate(180deg)" : "none" }}>⌄</span>
                </button>
                {open && (
                  <div style={S.pkgBody}>
                    <p style={S.pkgDesc}>{p.desc}</p>
                    {p.items.map((it, j) => (
                      <p key={j} style={S.pkgItem}><span style={S.pkgDot} />{it}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* خارطة الطريق */}
      <Section n="٠٦" title="خارطة الطريق المقترحة">
        <div style={S.timeline}>
          {ROADMAP.map(([phase, time, desc], i) => (
            <div key={i} style={S.tlRow}>
              <div style={S.tlMarker}>
                <span style={S.tlDot} />
                {i < ROADMAP.length - 1 && <span style={S.tlLine} />}
              </div>
              <div style={S.tlContent}>
                <div style={S.tlHead}>
                  <span style={S.tlPhase}>{phase}</span>
                  <span style={S.tlTime}>{time}</span>
                </div>
                <p style={S.tlDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* لماذا نقطتين */}
      <Section n="٠٧" title="لماذا نقطتين">
        <div style={S.whyGrid}>
          {WHY.map((w, i) => (
            <div key={i} style={S.whyCard}>
              <span style={S.whyNum}>{String(i + 1).padStart(2, "٠")}</span>
              <p style={S.whyText}>{w}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* الخطوة التالية */}
      <section style={S.cta}>
        <div style={S.coverGlow} />
        <h2 style={S.ctaTitle}>الخطوة التالية</h2>
        <p style={S.ctaText}>
          نقترح جلسة عمل مدّتها ٤٥ دقيقة لاستعراض الأولويات والاتفاق على نطاق المرحلة الأولى.
          فريق نقطتين جاهز للبدء فور موافقتكم.
        </p>
        <button style={S.ctaBtn} onClick={() => window.open && window.open(ctaWhatsappUrl, "_blank")}>
          حجز جلسة عمل
        </button>
        <span style={S.ctaContact}>نقطتين · info@noqtatain.com · الرياض</span>
      </section>
      </div>
    </div>
  );
}

/* ============ مكوّنات مساعدة ============ */

function Section({ n, title, children }) {
  return (
    <section style={S.section}>
      <div style={S.sectionHead}>
        <span style={S.sectionNum}>{n}</span>
        <h2 style={S.sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SwotBox({ title, items, c, bg }) {
  return (
    <div style={{ ...S.swotBox, background: bg, borderColor: c + "44" }}>
      <h3 style={{ ...S.swotTitle, color: c }}>{title}</h3>
      {items.map((t, i) => <p key={i} style={S.swotItem}>• {t}</p>)}
    </div>
  );
}

/* ============ الهوية ============ */
const VOID = "#0B0B16";
const CARD = "#14141F";
const VIOLET = "#6D4AFF";
const GOLD = "#C9A227";
const TEXT = "#E8E6F0";
const MUTE = "#A9A6BD";

const CSS = `
  @keyframes propFade { from {opacity:0; transform:translateY(10px);} to {opacity:1; transform:translateY(0);} }
  @media (prefers-reduced-motion: reduce){ * { animation:none !important; transition:none !important; } }
`;

const S = {
  outer: {
    background: VOID,
    minHeight: "100vh",
    padding: "clamp(16px, 4vw, 40px)",
  },
  page: {
    background: VOID, color: TEXT,
    fontFamily: "'IBM Plex Sans Arabic','Tajawal',system-ui,sans-serif",
    maxWidth: 880, margin: "0 auto", borderRadius: 22, overflow: "hidden",
    border: "1px solid rgba(109,74,255,.18)",
  },

  cover: {
    position: "relative", padding: "clamp(48px,9vw,90px) clamp(24px,6vw,56px)",
    textAlign: "center", overflow: "hidden",
    background: "linear-gradient(160deg,#11101F 0%,#0B0B16 70%)",
    borderBottom: "1px solid rgba(255,255,255,.05)",
  },
  coverGlow: {
    position: "absolute", top: "-30%", right: "-10%", width: 420, height: 420,
    background: "radial-gradient(circle,rgba(109,74,255,.25),transparent 65%)",
    pointerEvents: "none",
  },
  brandLogo: { width: 44, height: 44, objectFit: "contain", display: "block", margin: "0 auto 12px", position: "relative" },
  brandMark: { fontSize: 26, fontWeight: 800, color: VIOLET, display: "block", position: "relative" },
  brandSub: { fontSize: 13, color: GOLD, display: "block", marginTop: 6, position: "relative" },
  coverTitle: { fontSize: "clamp(28px,6vw,46px)", fontWeight: 800, color: "#fff", margin: "36px 0 8px", position: "relative", lineHeight: 1.2 },
  coverLead: { fontSize: 17, color: MUTE, margin: 0, position: "relative" },
  coverClient: { marginTop: 40, position: "relative" },
  coverClientName: { fontSize: "clamp(22px,4vw,30px)", fontWeight: 800, color: VIOLET, display: "block" },
  coverClientEn: { fontSize: 15, color: MUTE, fontFamily: "'Space Grotesk',sans-serif", display: "block", marginTop: 4 },
  coverMeta: { fontSize: 12, color: "#6F6C85", display: "block", marginTop: 44, position: "relative" },

  section: { padding: "clamp(32px,6vw,52px) clamp(24px,6vw,56px)", borderBottom: "1px solid rgba(255,255,255,.05)", animation: "propFade .5s ease both" },
  sectionHead: { display: "flex", alignItems: "center", gap: 14, marginBottom: 22 },
  sectionNum: { fontFamily: "'Space Grotesk',monospace", fontSize: 15, fontWeight: 700, color: VIOLET, border: `1px solid ${VIOLET}`, borderRadius: 8, padding: "5px 10px" },
  sectionTitle: { fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "#fff", margin: 0 },

  body: { fontSize: 15, lineHeight: 2, color: "#CFCDDE", margin: "0 0 16px" },
  note: { fontSize: 14, lineHeight: 1.9, color: MUTE, margin: "0 0 22px", padding: "12px 16px", background: "rgba(201,162,39,.06)", borderRight: `3px solid ${GOLD}`, borderRadius: 8 },

  factGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 },
  fact: { background: CARD, border: "1px solid rgba(255,255,255,.06)", borderRadius: 12, padding: "16px 18px" },
  factKey: { fontSize: 12, color: GOLD, fontWeight: 700, display: "block", marginBottom: 6 },
  factVal: { fontSize: 14.5, color: TEXT, fontWeight: 600, lineHeight: 1.6 },

  findCard: { background: CARD, border: "1px solid rgba(255,255,255,.06)", borderRadius: 14, padding: "20px 22px", marginBottom: 14 },
  findArea: { fontSize: 17, fontWeight: 700, color: "#fff", margin: "0 0 16px" },
  findCols: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 },
  findCol: {},
  findTag: { fontSize: 12, fontWeight: 800, padding: "4px 11px", borderRadius: 99, border: "1px solid", display: "inline-block", marginBottom: 12 },
  findItem: { fontSize: 14, lineHeight: 1.85, color: "#CFCDDE", margin: "0 0 8px" },

  swotGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 },
  swotBox: { border: "1px solid", borderRadius: 14, padding: "20px 22px" },
  swotTitle: { fontSize: 16, fontWeight: 800, margin: "0 0 12px" },
  swotItem: { fontSize: 14, lineHeight: 1.8, color: "#CFCDDE", margin: "0 0 7px" },

  pkgList: { display: "flex", flexDirection: "column", gap: 12, marginTop: 8 },
  pkg: { background: CARD, border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, overflow: "hidden", transition: "border-color .2s" },
  pkgOpen: { borderColor: "rgba(109,74,255,.45)" },
  pkgHead: { width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "right" },
  pkgNum: { fontFamily: "'Space Grotesk',monospace", fontSize: 15, fontWeight: 700, color: GOLD, flexShrink: 0 },
  pkgTitle: { fontSize: 16.5, fontWeight: 700, color: "#fff", flex: 1 },
  pkgChevron: { fontSize: 20, color: VIOLET, transition: "transform .25s", flexShrink: 0 },
  pkgBody: { padding: "0 20px 20px 52px", animation: "propFade .3s ease both" },
  pkgDesc: { fontSize: 14, color: MUTE, lineHeight: 1.9, margin: "0 0 14px" },
  pkgItem: { fontSize: 14, color: "#CFCDDE", lineHeight: 1.7, margin: "0 0 9px", display: "flex", alignItems: "center", gap: 9 },
  pkgDot: { width: 6, height: 6, borderRadius: 99, background: VIOLET, flexShrink: 0 },

  timeline: { paddingInlineStart: 6 },
  tlRow: { display: "flex", gap: 18 },
  tlMarker: { display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 },
  tlDot: { width: 14, height: 14, borderRadius: 99, background: VIOLET, boxShadow: "0 0 0 4px rgba(109,74,255,.18)", marginTop: 4 },
  tlLine: { width: 2, flex: 1, background: "linear-gradient(rgba(109,74,255,.5),rgba(109,74,255,.05))", marginTop: 4 },
  tlContent: { paddingBottom: 28, flex: 1 },
  tlHead: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 },
  tlPhase: { fontSize: 16, fontWeight: 800, color: "#fff" },
  tlTime: { fontSize: 12, fontWeight: 700, color: GOLD, background: "rgba(201,162,39,.1)", padding: "3px 10px", borderRadius: 99 },
  tlDesc: { fontSize: 14, lineHeight: 1.9, color: MUTE, margin: 0 },

  whyGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 },
  whyCard: { background: CARD, border: "1px solid rgba(255,255,255,.06)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start" },
  whyNum: { fontFamily: "'Space Grotesk',monospace", fontSize: 18, fontWeight: 700, color: VIOLET, flexShrink: 0 },
  whyText: { fontSize: 14.5, lineHeight: 1.85, color: "#CFCDDE", margin: 0 },

  cta: { position: "relative", padding: "clamp(44px,7vw,64px) clamp(24px,6vw,56px)", textAlign: "center", overflow: "hidden", background: "linear-gradient(160deg,#13111F,#0B0B16)" },
  ctaTitle: { fontSize: "clamp(24px,5vw,34px)", fontWeight: 800, color: GOLD, margin: "0 0 14px", position: "relative" },
  ctaText: { fontSize: 15.5, lineHeight: 2, color: "#CFCDDE", maxWidth: 560, margin: "0 auto 28px", position: "relative" },
  ctaBtn: { padding: "15px 44px", borderRadius: 12, border: "none", cursor: "pointer", background: `linear-gradient(90deg,${VIOLET},#8B6BFF)`, color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: "inherit", boxShadow: "0 12px 34px rgba(109,74,255,.4)", position: "relative" },
  ctaContact: { display: "block", marginTop: 30, fontSize: 13, color: "#6F6C85", position: "relative" },
};
