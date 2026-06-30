import { useState, useEffect, useRef } from "react";

/**
 * قسم التشخيص الرقمي — وامر العقارية × نقطتين
 * يحوّل النقاط غير المؤكّدة إلى أسئلة يجيب عليها العميل مباشرةً.
 * الإجابات تُحفظ تلقائياً محلياً (localStorage)، ويمكن إرسالها كتعليق
 * في تايملاين صفقة Bitrix24 عبر crm.timeline.comment.add عند الضغط على "إرسال".
 */

const STORAGE_KEY = "wameer:diagnostic:answers";
const BITRIX_WEBHOOK = "https://dpower.bitrix24.com/rest/40777/b6wx9u0nn939mnw0/";
const DEAL_ID = 81515;

// الأسئلة التشخيصية — كل سؤال كان سابقاً "استنتاجاً" في الوثيقة، صار سؤالاً قابلاً للإجابة
const QUESTIONS = [
  {
    id: "crm",
    eyebrow: "إدارة العملاء",
    text: "هل تُجمع بيانات النموذج والواتساب وX حالياً في نظام إدارة عملاء (CRM) موحّد؟",
    note: "لم نلاحظ من الخارج مؤشراً على ربط نموذج «تواصل معنا» بنظام محدّد — ونودّ التأكّد منكم.",
    options: [
      { v: "no", label: "لا يوجد نظام موحّد" },
      { v: "partial", label: "جزئياً / يدوي" },
      { v: "yes", label: "نعم، لدينا نظام" },
    ],
  },
  {
    id: "retarget",
    eyebrow: "إعادة الاستهداف",
    text: "هل تُستثمر بيانات المزايدين والمستثمرين السابقين في حملات إعادة استهداف أو تنبيهات بمزادات مشابهة؟",
    note: "إعادة الاستهداف لا تظهر من الخارج، لذا نطرحها كسؤال لا كحُكم.",
    options: [
      { v: "no", label: "لا تُستثمر حالياً" },
      { v: "planned", label: "مخطّط لها لاحقاً" },
      { v: "yes", label: "نعم، نقوم بها" },
    ],
  },
  {
    id: "whatsapp",
    eyebrow: "أتمتة واتساب",
    text: "هل تتم متابعة المهتمّين عبر واتساب بشكل آلي (ردود فورية، تأهيل، متابعة مجدولة)؟",
    note: "واتساب يظهر كقناة تواصل رئيسية — لكن لا يمكننا معرفة مستوى الأتمتة من الخارج.",
    options: [
      { v: "manual", label: "يدوي بالكامل" },
      { v: "some", label: "بعض الأتمتة" },
      { v: "full", label: "مؤتمت بالكامل" },
    ],
  },
  {
    id: "analytics",
    eyebrow: "القياس والتتبّع",
    text: "هل توجد أدوات قياس وتتبّع (Analytics / Pixel) مرتبطة بالموقع لقياس أداء الحملات؟",
    note: "لم نرصد إشارة ظاهرة لأدوات تتبّع، وهي نقطة قابلة للتحقق السريع من جانبكم.",
    options: [
      { v: "no", label: "غير مرتبطة" },
      { v: "unsure", label: "غير متأكّد" },
      { v: "yes", label: "نعم، مرتبطة" },
    ],
  },
  {
    id: "ownedchannel",
    eyebrow: "القناة الرقمية",
    text: "هل لديكم رغبة في بناء منصّة مزادات رقمية مملوكة لكم بدل الاعتماد الكامل على المنصّات الخارجية؟",
    note: "حالياً تتم المزايدة على منصّات طرف ثالث — نودّ معرفة توجّهكم تجاه قناة مملوكة.",
    options: [
      { v: "yes", label: "نعم، أولوية لنا" },
      { v: "maybe", label: "نفكّر فيها" },
      { v: "no", label: "نكتفي بالحالي" },
    ],
  },
];

// خرائط القيم → نص عربي مقروء، تُستخدم عند بناء تعليق Bitrix24
const LABELS = {
  crm: {
    title: "نظام إدارة العملاء (CRM)",
    no: "لا يوجد نظام موحّد",
    partial: "جزئياً / يدوي",
    yes: "نعم، لديهم نظام",
  },
  retarget: {
    title: "إعادة استهداف المزايدين السابقين",
    no: "لا تُستثمر حالياً",
    planned: "مخطّط لها لاحقاً",
    yes: "نعم، يقومون بها",
  },
  whatsapp: {
    title: "أتمتة واتساب",
    manual: "يدوي بالكامل",
    some: "بعض الأتمتة",
    full: "مؤتمت بالكامل",
  },
  analytics: {
    title: "أدوات القياس والتتبّع",
    no: "غير مرتبطة",
    unsure: "غير متأكّد",
    yes: "نعم، مرتبطة",
  },
  ownedchannel: {
    title: "منصّة مزادات مملوكة",
    yes: "نعم، أولوية لهم",
    maybe: "يفكّرون فيها",
    no: "يكتفون بالحالي",
  },
};

function buildComment(answers = {}, notes = "") {
  const lines = ["[B]نتائج التشخيص الرقمي — نموذج وامر العقارية[/B]", ""];

  for (const key of Object.keys(LABELS)) {
    const map = LABELS[key];
    const val = answers[key];
    const answer = val && map[val] ? map[val] : "— لم يُجب —";
    lines.push(`[B]${map.title}:[/B] ${answer}`);
  }

  if (notes && notes.trim()) {
    lines.push("", "[B]ملاحظات العميل:[/B]", notes.trim());
  }

  const answered = Object.keys(LABELS).filter((k) => answers[k]).length;
  const total = Object.keys(LABELS).length;
  lines.push("", `[I]أُجيب على ${answered} من ${total} — ${new Date().toLocaleString("ar-SA")}[/I]`);

  return lines.join("\n");
}

async function postToBitrix(commentText) {
  const base = BITRIX_WEBHOOK.replace(/\/+$/, "");
  const url = `${base}/crm.timeline.comment.add`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        ENTITY_ID: DEAL_ID,
        ENTITY_TYPE: "deal",
        COMMENT: commentText,
      },
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) {
    throw new Error(data.error_description || data.error || `HTTP ${res.status}`);
  }
  return data;
}

export default function WameerDiagnostic() {
  const [answers, setAnswers] = useState({});
  const [notesText, setNotesText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | saving | saved | error
  const [loaded, setLoaded] = useState(false);
  const [submitState, setSubmitState] = useState("idle"); // idle | submitting | submitted | error
  const saveTimer = useRef(null);

  // تحميل الإجابات المحفوظة محلياً عند فتح الصفحة
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setAnswers(parsed.answers || {});
        setNotesText(parsed.notes || "");
      }
    } catch (e) {
      // لا توجد بيانات محفوظة بعد — بداية نظيفة
    } finally {
      setLoaded(true);
    }
  }, []);

  // حفظ مؤجَّل (debounced) محلياً لتجنّب كثرة الكتابة
  const persist = (nextAnswers, nextNotes) => {
    setStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            answers: nextAnswers,
            notes: nextNotes,
            updatedAt: new Date().toISOString(),
          })
        );
        setStatus("saved");
      } catch (e) {
        setStatus("error");
      }
    }, 500);
  };

  const choose = (qid, value) => {
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    persist(next, notesText);
  };

  const onNotes = (e) => {
    const v = e.target.value;
    setNotesText(v);
    persist(answers, v);
  };

  const submitToTeam = async () => {
    setSubmitState("submitting");
    try {
      await postToBitrix(buildComment(answers, notesText));
      setSubmitState("submitted");
    } catch (e) {
      setSubmitState("error");
    }
  };

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100);

  const statusLabel = {
    idle: "",
    saving: "يُحفظ…",
    saved: "تم الحفظ تلقائياً ✓",
    error: "تعذّر الحفظ — حاول مجدداً",
  }[status];

  const submitLabel = {
    idle: "إرسال الإجابات للفريق",
    submitting: "جارٍ الإرسال…",
    submitted: "تم الإرسال للفريق ✓",
    error: "تعذّر الإرسال — حاول مجدداً",
  }[submitState];

  return (
    <div dir="rtl" style={S.page}>
      <div style={S.wrap}>
        <style>{KEYFRAMES}</style>

        {/* ترويسة القسم */}
        <header style={S.header}>
          <span style={S.eyebrow}>نقطتين × وامر العقارية</span>
          <h2 style={S.title}>التشخيص الرقمي</h2>
          <p style={S.lead}>
            النقاط التالية لا يمكن إثباتها من خارج المنشأة، لذا نطرحها كأسئلة لا كأحكام.
            إجاباتكم تُحفظ تلقائياً وتساعدنا على تحديد نطاق العمل بدقّة.
          </p>
        </header>

        {/* شريط التقدّم */}
        <div style={S.progressRow}>
          <div style={S.progressTrack}>
            <div style={{ ...S.progressFill, width: `${progress}%` }} />
          </div>
          <span style={S.progressText}>
            {answeredCount} / {QUESTIONS.length}
          </span>
        </div>

        {/* الأسئلة */}
        <div style={S.list}>
          {QUESTIONS.map((q, i) => {
            const selected = answers[q.id];
            return (
              <section key={q.id} style={S.card} aria-labelledby={`q-${q.id}`}>
                <div style={S.cardHead}>
                  <span style={S.index}>{String(i + 1).padStart(2, "٠")}</span>
                  <div style={{ flex: 1 }}>
                    <span style={S.cardEyebrow}>{q.eyebrow}</span>
                    <h3 id={`q-${q.id}`} style={S.question}>{q.text}</h3>
                  </div>
                </div>
                <p style={S.qNote}>{q.note}</p>
                <div style={S.options} role="radiogroup" aria-label={q.text}>
                  {q.options.map((opt) => {
                    const active = selected === opt.v;
                    return (
                      <button
                        key={opt.v}
                        role="radio"
                        aria-checked={active}
                        onClick={() => choose(q.id, opt.v)}
                        style={{ ...S.option, ...(active ? S.optionActive : {}) }}
                        onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = "#6D4AFF"; }}
                        onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                      >
                        <span style={{ ...S.dot, ...(active ? S.dotActive : {}) }} />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* ملاحظات حرّة */}
        <section style={S.card}>
          <span style={S.cardEyebrow}>ملاحظات إضافية</span>
          <h3 style={S.question}>هل هناك سياق أو أنظمة حالية تودّون إخبارنا بها؟</h3>
          <textarea
            value={notesText}
            onChange={onNotes}
            placeholder="اكتب أي تفاصيل عن أدواتكم أو أولوياتكم الحالية…"
            rows={4}
            style={S.textarea}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#6D4AFF")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          />
        </section>

        {/* إرسال للفريق */}
        <div style={S.submitRow}>
          <button
            onClick={submitToTeam}
            disabled={answeredCount === 0 || submitState === "submitting"}
            style={{
              ...S.submitBtn,
              opacity: answeredCount === 0 ? 0.5 : 1,
              cursor: answeredCount === 0 ? "not-allowed" : "pointer",
            }}
          >
            {submitLabel}
          </button>
          <span style={{ ...S.submitStatus, color: submitState === "error" ? "#FF6B6B" : "#A9A6BD" }}>
            {submitState === "error" ? "تعذّر إرسال الإجابات إلى فريق المتابعة" : ""}
          </span>
        </div>

        {/* حالة الحفظ */}
        <footer style={S.footer}>
          <span style={{ ...S.status, opacity: statusLabel ? 1 : 0, color: status === "error" ? "#FF6B6B" : "#C9A227" }}>
            {statusLabel || "—"}
          </span>
          <span style={S.footNote}>
            {loaded ? "تُحفظ إجاباتكم على هذا المتصفّح تلقائياً" : "يجري تحميل إجاباتكم السابقة…"}
          </span>
        </footer>
      </div>
    </div>
  );
}

/* ---------- الهوية البصرية: نقطتين ---------- */
const VOID = "#0B0B16";
const CARD = "#14141F";
const VIOLET = "#6D4AFF";
const GOLD = "#C9A227";

const KEYFRAMES = `
  @keyframes wameerFadeUp { from { opacity:0; transform:translateY(8px);} to {opacity:1; transform:translateY(0);} }
  @media (prefers-reduced-motion: reduce){ * { animation: none !important; transition: none !important; } }
`;

const S = {
  page: {
    background: VOID,
    minHeight: "100vh",
    padding: "clamp(16px, 4vw, 40px)",
  },
  wrap: {
    background: VOID,
    color: "#E8E6F0",
    fontFamily: "'IBM Plex Sans Arabic', 'Tajawal', system-ui, sans-serif",
    padding: "clamp(20px, 5vw, 48px)",
    borderRadius: 20,
    maxWidth: 860,
    margin: "0 auto",
    border: "1px solid rgba(109,74,255,0.18)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
  },
  header: { marginBottom: 28, animation: "wameerFadeUp .5s ease both" },
  eyebrow: {
    fontSize: 12, letterSpacing: 1, color: GOLD, fontWeight: 700,
    textTransform: "uppercase", display: "block", marginBottom: 10,
  },
  title: { fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, margin: 0, color: "#fff", lineHeight: 1.15 },
  lead: { fontSize: 15, lineHeight: 1.9, color: "#A9A6BD", marginTop: 14, maxWidth: 640 },

  progressRow: { display: "flex", alignItems: "center", gap: 14, margin: "8px 0 28px" },
  progressTrack: { flex: 1, height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" },
  progressFill: { height: "100%", background: `linear-gradient(90deg, ${VIOLET}, ${GOLD})`, borderRadius: 99, transition: "width .4s ease" },
  progressText: { fontSize: 13, color: "#A9A6BD", fontWeight: 700, minWidth: 48, textAlign: "left" },

  list: { display: "flex", flexDirection: "column", gap: 16 },
  card: {
    background: CARD, border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16, padding: "22px 22px 24px",
    animation: "wameerFadeUp .5s ease both",
  },
  cardHead: { display: "flex", gap: 14, alignItems: "flex-start" },
  index: {
    fontSize: 13, fontWeight: 800, color: VIOLET,
    border: `1px solid ${VIOLET}`, borderRadius: 8,
    width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, fontFamily: "'Space Grotesk', monospace",
  },
  cardEyebrow: { fontSize: 11, letterSpacing: 0.8, color: GOLD, fontWeight: 700, display: "block", marginBottom: 6 },
  question: { fontSize: 17, fontWeight: 700, margin: 0, color: "#fff", lineHeight: 1.6 },
  qNote: { fontSize: 13, color: "#8C89A3", lineHeight: 1.8, margin: "12px 0 16px", paddingInlineStart: 48 },

  options: { display: "flex", flexWrap: "wrap", gap: 10, paddingInlineStart: 48 },
  option: {
    display: "inline-flex", alignItems: "center", gap: 9,
    background: "transparent", color: "#D8D6E6",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10,
    padding: "10px 16px", fontSize: 14, fontWeight: 600, cursor: "pointer",
    fontFamily: "inherit", transition: "all .2s ease",
  },
  optionActive: {
    borderColor: VIOLET, background: "rgba(109,74,255,0.14)", color: "#fff",
    boxShadow: "0 0 0 1px rgba(109,74,255,0.4) inset",
  },
  dot: {
    width: 11, height: 11, borderRadius: 99,
    border: "2px solid rgba(255,255,255,0.3)", transition: "all .2s ease",
  },
  dotActive: { borderColor: GOLD, background: GOLD, boxShadow: `0 0 8px ${GOLD}` },

  textarea: {
    width: "100%", boxSizing: "border-box", marginTop: 14,
    background: "rgba(0,0,0,0.25)", color: "#E8E6F0",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
    padding: "14px 16px", fontSize: 14, fontFamily: "inherit",
    lineHeight: 1.8, resize: "vertical", outline: "none", transition: "border-color .2s",
  },

  submitRow: {
    display: "flex", alignItems: "center", gap: 14,
    marginTop: 20, flexWrap: "wrap",
  },
  submitBtn: {
    background: `linear-gradient(90deg, ${VIOLET}, #8A6BFF)`,
    color: "#fff", border: "none", borderRadius: 12,
    padding: "13px 24px", fontSize: 14, fontWeight: 700,
    fontFamily: "inherit", transition: "all .2s ease",
  },
  submitStatus: { fontSize: 13, fontWeight: 600 },

  footer: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.07)",
  },
  status: { fontSize: 13, fontWeight: 700, transition: "opacity .3s" },
  footNote: { fontSize: 12, color: "#6F6C85" },
};
