import { useState } from "react";

const LOGO = () => (
  <svg width="52" height="28" viewBox="0 0 52 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" fill="white" />
    <circle cx="38" cy="14" r="14" fill="#7B5CE5" />
  </svg>
);

const packages = [
  {
    id: 1,
    badge: "الانطلاق",
    price: "3,500",
    label: "ريال / شهرياً",
    tag: null,
    color: "#7B5CE5",
    platforms: ["انستغرام", "فيسبوك"],
    posts: "12 منشور / شهر",
    features: [
      "إدارة انستغرام + فيسبوك",
      "12 تصميم احترافي / شهر",
      "محتوى بالعربية والإنجليزية",
      "إعداد وتهيئة الصفحات",
      "الرد على التعليقات والرسائل",
      "تقرير أداء شهري أساسي",
    ],
    notIncluded: ["إعلانات مدفوعة", "ريلز وفيديو", "مؤثرون"],
  },
  {
    id: 2,
    badge: "النمو",
    price: "5,500",
    label: "ريال / شهرياً",
    tag: "الأكثر طلباً",
    color: "#7B5CE5",
    platforms: ["انستغرام", "فيسبوك", "تيك توك"],
    posts: "20 منشور + 4 ريلز / شهر",
    features: [
      "إدارة انستغرام + فيسبوك + تيك توك",
      "20 تصميم + 4 ريلز / شهر",
      "محتوى بالعربية والإنجليزية",
      "إدارة حملات Meta Ads",
      "خطة محتوى شهرية متكاملة",
      "التواصل مع مؤثر واحد / شهر",
      "تقرير تفصيلي + توصيات",
    ],
    notIncluded: ["ميزانية الإعلانات (على العميل)"],
  },
  {
    id: 3,
    badge: "التوسع",
    price: "9,500",
    label: "ريال / شهرياً",
    tag: null,
    color: "#7B5CE5",
    platforms: ["انستغرام", "فيسبوك", "تيك توك", "لينكد إن"],
    posts: "30 منشور + 8 ريلز / شهر",
    features: [
      "إدارة 4 منصات كاملة",
      "30 منشور + 8 ريلز / شهر",
      "Meta Ads + Google Ads + Snapchat",
      "تحسين محركات البحث SEO",
      "التواصل مع 3 مؤثرين / شهر",
      "تصميم لاندينج بيج واحدة",
      "مدير حساب مخصص",
      "اجتماع شهري + تقرير تفصيلي",
    ],
    notIncluded: [],
  },
  {
    id: 4,
    badge: "الشراكة الكاملة",
    price: "15,000",
    label: "ريال / شهرياً",
    tag: "للمنصات الكبيرة",
    color: "#7B5CE5",
    platforms: ["جميع المنصات", "الموقع", "المجتمع"],
    posts: "محتوى غير محدود",
    features: [
      "كل خدمات باقة التوسع",
      "تطوير الموقع الإلكتروني",
      "إدارة مجتمع EntrepreneurX",
      "إنتاج محتوى قصص النجاح",
      "دعم إطلاق برنامج الإحالة",
      "علاقات عامة رقمية",
      "تقارير أسبوعية مكثفة",
      "استراتيجية Affiliate رقمية",
    ],
    notIncluded: [],
  },
];

const extras = [
  { name: "هوية بصرية كاملة", price: "3,500 ريال", note: "مرة واحدة" },
  { name: "تصميم وتطوير موقع", price: "من 8,000 ريال", note: "مرة واحدة" },
  { name: "تطوير تطبيق جوال", price: "من 25,000 ريال", note: "مرة واحدة" },
  { name: "حملة إطلاق خاصة", price: "5,000 ريال", note: "مرة واحدة" },
  { name: "إنتاج فيديو احترافي", price: "2,500 ريال", note: "لكل فيديو" },
  { name: "تطوير منصة EntrepreneurX", price: "حسب المتطلبات", note: "يُقدَّر" },
];

const steps = [
  { n: "01", title: "مراجعة العرض", desc: "التواصل بأي استفسارات" },
  { n: "02", title: "اختيار الباقة", desc: "المناسبة للمرحلة الأولى" },
  { n: "03", title: "توقيع العقد", desc: "وتحديد موعد الانطلاق" },
  { n: "04", title: "اجتماع Kickoff", desc: "لمناقشة الاستراتيجية" },
];

export default function NoqtatainOffer() {
  const [activePackage, setActivePackage] = useState(1);
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);

  function handleUnlock(e) {
    e.preventDefault();
    if (passwordInput === "fawzi") {
      setUnlocked(true);
    } else {
      setError(true);
      setPasswordInput("");
      setTimeout(() => setError(false), 2000);
    }
  }

  if (!unlocked) {
    return (
      <div
        dir="rtl"
        style={{
          background: "#0A0A0F",
          minHeight: "100vh",
          fontFamily: "'Tajawal', 'Cairo', 'Segoe UI', sans-serif",
          color: "#F0F0F5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap');`}</style>
        <LOGO />
        <div style={{ marginTop: 32, textAlign: "center", maxWidth: 340, width: "100%" }}>
          <div style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#7B5CE5",
            fontWeight: 700,
            marginBottom: 12,
          }}>
            وثيقة سرية وخاصة
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
            EntrepreneurX × نقطتين
          </h2>
          <p style={{ color: "#555", fontSize: 13, marginBottom: 32, lineHeight: 1.7 }}>
            هذا العرض مخصص فقط للأستاذ فوزي<br />أدخل كلمة المرور للمتابعة
          </p>
          <form onSubmit={handleUnlock} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="كلمة المرور"
              autoFocus
              style={{
                background: "#111118",
                border: `1px solid ${error ? "#EF4444" : "#2A2A3E"}`,
                borderRadius: 10,
                padding: "13px 18px",
                color: "#F0F0F5",
                fontSize: 15,
                fontFamily: "inherit",
                textAlign: "center",
                outline: "none",
                transition: "border-color 0.2s",
                letterSpacing: 4,
              }}
            />
            {error && (
              <div style={{ color: "#EF4444", fontSize: 12, textAlign: "center" }}>
                كلمة المرور غير صحيحة
              </div>
            )}
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #7B5CE5, #9B7BFF)",
                color: "white",
                border: "none",
                padding: "13px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              دخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        fontFamily: "'Tajawal', 'Cairo', 'Segoe UI', sans-serif",
        color: "#F0F0F5",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #7B5CE5; border-radius: 2px; }

        .pkg-card {
          background: #111118;
          border: 1px solid #1E1E2E;
          border-radius: 16px;
          padding: 32px 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; right: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #7B5CE5, #A78BFA);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .pkg-card.active {
          border-color: #7B5CE5;
          background: #13131F;
        }
        .pkg-card.active::before { opacity: 1; }
        .pkg-card:hover { border-color: #7B5CE540; }
        .pkg-card.active:hover { border-color: #7B5CE5; }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #1E1E2E;
          font-size: 14px;
          color: #B0B0C0;
          line-height: 1.6;
        }
        .feature-item:last-child { border-bottom: none; }

        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #7B5CE520;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .extra-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #1A1A28;
          transition: background 0.2s;
        }
        .extra-row:last-child { border-bottom: none; }

        .badge {
          display: inline-block;
          background: #7B5CE520;
          border: 1px solid #7B5CE540;
          color: #A78BFA;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hot-badge {
          background: linear-gradient(135deg, #7B5CE5, #A78BFA);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .step-card {
          background: #111118;
          border: 1px solid #1E1E2E;
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: border-color 0.3s;
        }
        .step-card:hover { border-color: #7B5CE540; }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #7B5CE530, transparent);
          margin: 48px 0;
        }

        .section-tag {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7B5CE5;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .price-num {
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #fff 60%, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .platform-tag {
          background: #1A1A2E;
          border: 1px solid #2A2A40;
          color: #8888AA;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 11px;
        }

        .cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #7B5CE5, #9B7BFF);
          color: white;
          border: none;
          padding: 14px 36px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 0.3px;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px #7B5CE550;
        }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns: 1fr 1fr; }
          .grid-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header
        style={{
          borderBottom: "1px solid #1A1A28",
          padding: "20px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          background: "#0A0A0Fee",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <LOGO />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "#666", letterSpacing: 2 }}>عرض تقني ومالي</div>
          <div style={{ fontSize: 13, color: "#A78BFA", fontWeight: 700 }}>EntrepreneurX × نقطتين</div>
        </div>
        <div style={{ fontSize: 12, color: "#555", textAlign: "left", direction: "ltr" }}>
          مايو 2026<br />
          <span style={{ color: "#7B5CE5" }}>سري وخاص</span>
        </div>
      </header>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* ─── HERO ─── */}
        <section style={{ padding: "72px 0 56px", textAlign: "center" }}>
          <div className="section-tag">عرض تقني ومالي — 2026</div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            خدمات التسويق الرقمي
            <br />
            <span style={{ color: "#7B5CE5" }}>لمنصة EntrepreneurX</span>
          </h1>
          <p style={{ color: "#888", fontSize: 16, maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.8 }}>
            مقدم من <strong style={{ color: "#A78BFA" }}>نقطتين للتسويق الرقمي</strong> إلى الأستاذ فوزي — Global Group
            <br />صالح لمدة 30 يوماً من تاريخ الإصدار
          </p>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { val: "+10", label: "سنوات خبرة" },
              { val: "100%", label: "شفافية في التقارير" },
              { val: "20%", label: "خصم للمنظمات غير الربحية" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#7B5CE5" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ─── ABOUT PROJECT ─── */}
        <section style={{ marginBottom: 64 }}>
          <div className="section-tag">عن المشروع</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "🎓", title: "تعليم بالذكاء الاصطناعي", desc: "مسارات تعليمية مخصصة بالـ AI" },
              { icon: "🏆", title: "منافسات عالمية", desc: "Grand Prix Finals من البحرين" },
              { icon: "🌐", title: "شبكة MLM عالمية", desc: "هدف 100,000+ عضو في 5 سنوات" },
              { icon: "💰", title: "هدف $100M إيرادات", desc: "مستهدف السنة الخامسة" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#111118",
                  border: "1px solid #1E1E2E",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ─── PACKAGES ─── */}
        <section>
          <div className="section-tag">الباقات</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>اختر الباقة المناسبة</h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 14 }}>
            جميع الباقات تشمل خصماً خاصاً للمنظمات غير الربحية يصل إلى 20% بعد تقديم الوثائق الرسمية
          </p>

          {/* Package tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                style={{
                  background: activePackage === pkg.id ? "#7B5CE5" : "#111118",
                  border: `1px solid ${activePackage === pkg.id ? "#7B5CE5" : "#2A2A3E"}`,
                  color: activePackage === pkg.id ? "white" : "#888",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
              >
                {pkg.badge}
              </button>
            ))}
          </div>

          {/* Package grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`pkg-card ${activePackage === pkg.id ? "active" : ""}`}
                onClick={() => setActivePackage(pkg.id)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div>
                    <span className="badge">{pkg.badge}</span>
                  </div>
                  {pkg.tag && <span className="hot-badge">{pkg.tag}</span>}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div className="price-num">{pkg.price}</div>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{pkg.label}</div>
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  {pkg.platforms.map((p) => (
                    <span key={p} className="platform-tag">{p}</span>
                  ))}
                </div>

                <div style={{
                  background: "#0D0D18",
                  borderRadius: 8,
                  padding: "8px 12px",
                  fontSize: 12,
                  color: "#7B5CE5",
                  fontWeight: 600,
                  marginBottom: 20,
                }}>
                  📅 {pkg.posts}
                </div>

                <div>
                  {pkg.features.map((f) => (
                    <div key={f} className="feature-item">
                      <div className="check-icon">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#7B5CE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                  {pkg.notIncluded.map((f) => (
                    <div key={f} className="feature-item" style={{ opacity: 0.4 }}>
                      <div className="check-icon" style={{ background: "#2A2A2A" }}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 1L7 7M7 1L1 7" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Nonprofit note */}
          <div style={{
            marginTop: 24,
            background: "#0F0F20",
            border: "1px solid #7B5CE530",
            borderRadius: 12,
            padding: "18px 24px",
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}>
            <span style={{ fontSize: 24 }}>💜</span>
            <div>
              <div style={{ fontWeight: 700, color: "#A78BFA", marginBottom: 4 }}>خصم خاص للمنظمات غير الربحية</div>
              <div style={{ fontSize: 13, color: "#666" }}>
                نظراً للطابع التعليمي والخيري لمشروع EntrepreneurX، نقدم خصماً يتراوح بين <strong style={{ color: "#A78BFA" }}>15% – 20%</strong> على جميع الباقات بعد تقديم الوثائق الرسمية لجمعية رواد الأعمال
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ─── EXTRAS ─── */}
        <section>
          <div className="section-tag">خدمات إضافية</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>خدمات اختيارية</h2>

          <div style={{ background: "#111118", border: "1px solid #1E1E2E", borderRadius: 16, padding: "8px 28px" }}>
            {extras.map((ex) => (
              <div key={ex.name} className="extra-row">
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{ex.name}</div>
                  <div style={{ fontSize: 11, color: "#555" }}>{ex.note}</div>
                </div>
                <div style={{ textAlign: "left", direction: "ltr" }}>
                  <span style={{ color: "#A78BFA", fontWeight: 700, fontSize: 15 }}>{ex.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ─── WHY US ─── */}
        <section>
          <div className="section-tag">لماذا نقطتين</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>الشريك المناسب لإطلاقكم</h2>

          <div className="grid-2">
            {[
              { icon: "🇸🇦", title: "+10 سنوات في السوق السعودي", desc: "خبرة عميقة بسلوك المستهلك الخليجي واحتياجات السوق المحلي" },
              { icon: "🤖", title: "فريق متخصص متكامل", desc: "محتوى + إعلانات مدفوعة + تقنية + تصميم تحت سقف واحد" },
              { icon: "🌐", title: "دعم ثنائي اللغة", desc: "محتوى احترافي بالعربية والإنجليزية يناسب جمهوركم العالمي" },
              { icon: "📊", title: "شفافية كاملة في التقارير", desc: "نتائج قابلة للقياس وتقارير مفصّلة بدون مجاملات" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#111118",
                  border: "1px solid #1E1E2E",
                  borderRadius: 14,
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ─── ROADMAP ─── */}
        <section>
          <div className="section-tag">خطوات التعاون</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>كيف نبدأ معاً</h2>

          <div className="grid-4">
            {steps.map((s, i) => (
              <div key={s.n} className="step-card">
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: i === 0 ? "linear-gradient(135deg, #7B5CE5, #A78BFA)" : "#1A1A28",
                  border: i !== 0 ? "1px solid #2A2A40" : "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 12, fontWeight: 800,
                  color: i === 0 ? "white" : "#555",
                }}>
                  {s.n}
                </div>
                <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 14 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "#555" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ─── TERMS ─── */}
        <section style={{ marginBottom: 64 }}>
          <div className="section-tag">الشروط العامة</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { title: "العقد", val: "شهري قابل للتجديد" },
              { title: "الدفع", val: "مقدماً — بداية كل شهر" },
              { title: "الإشعار", val: "30 يوماً قبل الإلغاء" },
              { title: "الإعلانات", val: "ميزانية منفصلة على العميل" },
              { title: "التعديلات", val: "مرتان على كل منشور" },
              { title: "الصلاحية", val: "30 يوماً من تاريخ العرض" },
            ].map((t) => (
              <div key={t.title} style={{
                background: "#111118",
                border: "1px solid #1E1E2E",
                borderRadius: 10,
                padding: "16px 20px",
              }}>
                <div style={{ fontSize: 11, color: "#555", marginBottom: 6 }}>{t.title}</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{
          background: "linear-gradient(135deg, #0F0F20, #13102A)",
          border: "1px solid #7B5CE530",
          borderRadius: 20,
          padding: "56px 40px",
          textAlign: "center",
        }}>
          {/* Logo centered */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <LOGO />
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>
            مستعدون للانطلاق معكم
          </h2>
          <p style={{ color: "#888", marginBottom: 36, fontSize: 15, lineHeight: 1.8 }}>
            نتطلع لشراكة ناجحة تسهم في نشر ثقافة ريادة الأعمال في المنطقة
            <br />
            <span style={{ color: "#A78BFA" }}>EntrepreneurX × نقطتين — معاً نبني المستقبل</span>
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn">ابدأ الآن</button>
            <button style={{
              background: "transparent",
              border: "1px solid #7B5CE5",
              color: "#A78BFA",
              padding: "14px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.3s",
            }}>
              تواصل معنا
            </button>
          </div>

          <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid #1A1A2E", fontSize: 12, color: "#444" }}>
            نقطتين للتسويق الرقمي والأتمتة — noqtatain.com
            <br />
            <span style={{ color: "#333" }}>وثيقة سرية وخاصة — جميع الحقوق محفوظة © 2026</span>
          </div>
        </section>

      </main>
    </div>
  );
}
