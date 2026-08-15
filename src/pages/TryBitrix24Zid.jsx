import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Users,
  ShoppingBag,
  MessageCircle,
  MessagesSquare,
  Headset,
  ListChecks,
  Workflow,
  CheckCircle2,
  ArrowLeft,
  Store,
  PhoneCall,
  Settings,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import {
  GULF_COUNTRIES,
  isValidGulfPhone,
  normalizePhone,
  saveLocalRecord,
  submitWorkshopLead,
} from '@/pages/workshop/shared/bitrix';

// Official Bitrix24 marketing screenshots pulled from bitrix24.ae's own
// homepage header banner — used here to show the real product, not mockups.
const SHOT_CRM = '/bitrix24/crm.jpg';
const SHOT_WORKSPACE = '/bitrix24/workspace.jpg';
const SHOT_TASKS = '/bitrix24/tasks.jpg';
const SHOT_CONTACT_CENTER = '/bitrix24/contact-center.jpg';
const SHOT_HR = '/bitrix24/hr.jpg';

const WHAT_IS_FEATURES = [
  {
    icon: Users,
    title: 'إدارة علاقات العملاء (CRM)',
    desc: 'العملاء المحتملون، الصفقات، جهات الاتصال، عروض الأسعار، الفواتير، والدفع الإلكتروني في مكان واحد.',
    shot: SHOT_CRM,
  },
  {
    icon: MessagesSquare,
    title: 'التعاون الجماعي الداخلي',
    desc: 'فيد أخبار الشركة، مكالمات فيديو، تقويم مشترك، ومساحات عمل جماعية لفريقك بالكامل.',
    shot: SHOT_WORKSPACE,
  },
  {
    icon: ListChecks,
    title: 'المهام والمشاريع',
    desc: 'إدارة المهام، مخططات جانت، لوحات كانبان، وتتبع الوقت لفريق العمل بالكامل.',
    shot: SHOT_TASKS,
  },
  {
    icon: Headset,
    title: 'مركز الاتصال الموحّد',
    desc: 'واتساب، انستقرام، مكالمات ورسائل الموقع تصل جميعها لصندوق واحد مع فريق المبيعات.',
    shot: SHOT_CONTACT_CENTER,
  },
  {
    icon: Workflow,
    title: 'الأتمتة والموارد البشرية',
    desc: 'سير عمل آلي، موافقات، دليل الموظفين، متابعة الحضور، وقاعدة معرفة داخلية.',
    shot: SHOT_HR,
  },
];

const WHY_ZID_INTEGRATION = [
  {
    icon: ShoppingBag,
    title: 'كل طلبات زد داخل CRM واحد',
    desc: 'كل طلب جديد من متجرك على زد يتحول تلقائيًا إلى عميل أو صفقة داخل Bitrix24، بدون إدخال يدوي.',
  },
  {
    icon: MessageCircle,
    title: 'متابعة موحّدة للعملاء',
    desc: 'رسائل واتساب واستفسارات العملاء ترتبط مباشرة بسجل الطلب، فلا يضيع أي عميل محتمل.',
  },
  {
    icon: Workflow,
    title: 'أتمتة المبيعات وخدمة العملاء',
    desc: 'تذكيرات المتابعة، رسائل تلقائية، وتوزيع الطلبات على فريق المبيعات دون تدخل يدوي.',
  },
  {
    icon: ListChecks,
    title: 'تقارير أداء واضحة',
    desc: 'لوحات متابعة تُظهر المبيعات، معدل التحويل، ومصادر العملاء بشكل لحظي.',
  },
];

const STEPS = [
  { icon: Store, title: 'تعبئة النموذج', desc: 'أرسل بيانات متجرك على زد واحتياجك الأساسي.' },
  { icon: PhoneCall, title: 'تواصل فريق نقطتين', desc: 'مكالمة قصيرة لفهم طريقة عملك الحالية.' },
  { icon: Settings, title: 'إعداد وربط تجريبي', desc: 'تجهيز حساب Bitrix24 وربطه بمتجر زد.' },
  { icon: Rocket, title: 'انطلاقة سريعة', desc: 'تدريب مختصر لفريقك والبدء بالتجربة الفعلية.' },
];

const ORDER_VOLUME_OPTIONS = [
  'أقل من ٥٠ طلب',
  '٥٠ - ٢٠٠ طلب',
  '٢٠٠ - ٥٠٠ طلب',
  'أكثر من ٥٠٠ طلب',
];

const CURRENT_TOOLS_OPTIONS = [
  'واتساب شخصي',
  'إكسل / دفتر يدوي',
  'نظام CRM آخر',
  'لوحة تحكم زد فقط',
  'لا يوجد نظام بعد',
];

const TERMS = [
  'أن يكون لدى التاجر متجر نشط في زد.',
  'أن يكون حساب البتركس جديداً أو لم يتم تفعيل اشتراك مدفوع فيه من قبل.',
  'أن يكون الطلب ضمن الفترة المحددة للعرض من 15 أغسطس إلى 15 سبتمبر.',
];

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function ChipToggle({ options, selected, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active
                ? 'border-[#409EEF] bg-[#409EEF] text-white'
                : 'border-slate-300 bg-white text-slate-700 hover:border-[#409EEF]/60'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function buildSummary({ name, storeName, storeUrl, whatsapp, email, orderVolume, currentTools, notes }) {
  const lines = [
    'طلب تجربة Bitrix24 مربوط مع متجر زد',
    '',
    `الاسم: ${name}`,
    `اسم المتجر: ${storeName}`,
  ];
  if (storeUrl) lines.push(`رابط المتجر على زد: ${storeUrl}`);
  lines.push(`واتساب: ${whatsapp}`);
  if (email) lines.push(`البريد: ${email}`);
  if (orderVolume) lines.push('', `عدد الطلبات الشهرية تقريبًا: ${orderVolume}`);
  lines.push(`الأدوات الحالية: ${currentTools.length ? currentTools.join('، ') : '—'}`);
  if (notes.trim()) lines.push('', `ملاحظات إضافية: ${notes.trim()}`);
  return lines.join('\n');
}

export default function TryBitrix24Zid() {
  const [name, setName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [dial, setDial] = useState('966');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderVolume, setOrderVolume] = useState('');
  const [currentTools, setCurrentTools] = useState([]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = 'جرّب Bitrix24 مع متجرك على زد | نقطتين';
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = true;
    if (!storeName.trim()) nextErrors.storeName = true;
    if (!isValidGulfPhone(dial, phone)) nextErrors.phone = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const whatsapp = normalizePhone(dial, phone).e164;
    const comments = buildSummary({ name, storeName, storeUrl, whatsapp, email, orderVolume, currentTools, notes });

    setSubmitting(true);
    saveLocalRecord('try_bitrix24_zid_backup', {
      name, storeName, storeUrl, whatsapp, email, orderVolume, currentTools, notes,
    });

    await submitWorkshopLead({
      title: `طلب تجربة Bitrix24 + زد — ${storeName}`,
      name,
      phone: whatsapp,
      email,
      comments,
      sourceDescription: 'صفحة /try-bitrix24',
    });

    setSubmitting(false);
    setDone(true);
  }

  return (
    <main dir="rtl" className="bg-white text-slate-900">
      {/* Hero — Bitrix24's own brand blues (#409EEF / #2FC7F7) over a deep navy gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081B3D] via-[#0B2A5B] to-[#0F52A0] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(47,199,247,0.28),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#2FC7F7]/30 bg-[#2FC7F7]/10 px-4 py-1.5 text-sm font-semibold text-[#7FE0FB]">
              <Sparkles className="h-4 w-4" />
              تجربة مجانية لأصحاب متاجر زد
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              جرّب Bitrix24 مربوطًا بمتجرك على زد
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              وحّد طلباتك، عملاءك، ومحادثات واتساب في مكان واحد. فريق نقطتين يجهز لك حساب Bitrix24 تجريبي
              ويربطه بمتجرك على زد خلال يوم عمل.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#form"
                className="inline-flex items-center gap-2 rounded-full bg-[#409EEF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#409EEF]/30 transition hover:bg-[#2f8ee0]"
              >
                اطلب تجربتك المجانية
                <ArrowLeft className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                الرئيسية — نقطتين
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
              <img
                src={SHOT_CRM}
                alt="لوحة إدارة العملاء والصفقات (CRM) داخل Bitrix24"
                className="block w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Bitrix24 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#1E7FE0]">ما هو Bitrix24؟</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            مساحة عمل واحدة لإدارة أعمالك بالكامل
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Bitrix24 مساحة عمل مجانية عبر الإنترنت لإدارة الأعمال، تجمع بين إدارة علاقات العملاء (CRM)،
            إنجاز المهام، عقد الاجتماعات عبر الإنترنت، بناء المواقع والمتاجر، والأتمتة — في منصة واحدة
            يستخدمها أكثر من ١٥ مليون مؤسسة حول العالم بـ١٨ لغة.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IS_FEATURES.map(({ icon: Icon, title, desc, shot }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={shot} alt={title} className="block h-40 w-full object-cover object-top" loading="lazy" />
              <div className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#409EEF]/10 text-[#1E7FE0]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why connect with Zid */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#1E7FE0]">لماذا تربطه بمتجرك على زد؟</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              فائدة مباشرة لتجار زد الباحثين عن نظام يجمع كل شيء
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              نربط Bitrix24 مباشرة بمتجرك الحالي على زد كما هو — دون إنشاء أي موقع أو متجر جديد. كل
              زيارة وطلب فعلي من متجرك يتحول تلقائيًا إلى بيانات حية داخل CRM واحد، بدون جداول إكسل ولا
              نسخ يدوي بين الأنظمة.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY_ZID_INTEGRATION.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#409EEF]/10 text-[#1E7FE0]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#1E7FE0]">كيف نبدأ؟</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">أربع خطوات بسيطة</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0B2A5B] text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#409EEF]/10 text-[#1E7FE0]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section id="form" className="bg-gradient-to-b from-[#081B3D] to-[#0B2A5B] py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {done ? (
            <div className="rounded-3xl border border-[#2FC7F7]/30 bg-[#2FC7F7]/10 p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#409EEF] text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold">تم استلام طلبكم بنجاح</h2>
              <p className="mt-3 leading-7 text-slate-300">
                سيتواصل معكم فريق نقطتين قريبًا لإعداد حساب Bitrix24 التجريبي وربطه بمتجركم على زد.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#409EEF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f8ee0]"
              >
                الرجوع للرئيسية
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#7FE0FB]">تجربة مجانية</p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">اطلب تجربتك الآن</h2>
                <p className="mt-3 text-slate-300">عبّئ بياناتك وسيتواصل معك فريقنا خلال يوم عمل واحد.</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    الاسم الكامل <span className="text-rose-400">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="اسمك الكامل"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7] ${
                      errors.name ? 'border-rose-400' : 'border-white/15'
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-rose-400">الرجاء إدخال الاسم</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    اسم المتجر <span className="text-rose-400">*</span>
                  </label>
                  <input
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="اسم متجرك على زد"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7] ${
                      errors.storeName ? 'border-rose-400' : 'border-white/15'
                    }`}
                  />
                  {errors.storeName && <p className="mt-1.5 text-xs text-rose-400">الرجاء إدخال اسم المتجر</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    رابط المتجر على زد <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <input
                    dir="ltr"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    placeholder="https://store.zid.sa/..."
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    رقم واتساب <span className="text-rose-400">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={dial}
                      onChange={(e) => setDial(e.target.value)}
                      dir="ltr"
                      className="w-28 flex-none rounded-xl border border-white/15 bg-white/10 px-2 py-3 text-white outline-none focus:border-[#2FC7F7]"
                    >
                      {Object.entries(GULF_COUNTRIES).map(([code, info]) => (
                        <option key={code} value={code} className="text-slate-900">
                          {info.flag} +{code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="5xxxxxxxx"
                      className={`w-full min-w-0 rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7] ${
                        errors.phone ? 'border-rose-400' : 'border-white/15'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1.5 text-xs text-rose-400">الرجاء إدخال رقم جوال صحيح</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    البريد الإلكتروني <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7]"
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium">عدد الطلبات الشهرية تقريبًا</p>
                  <ChipToggle
                    options={ORDER_VOLUME_OPTIONS}
                    selected={orderVolume ? [orderVolume] : []}
                    onToggle={(v) => setOrderVolume((prev) => (prev === v ? '' : v))}
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium">ما الأدوات التي تستخدمها حاليًا؟</p>
                  <ChipToggle
                    options={CURRENT_TOOLS_OPTIONS}
                    selected={currentTools}
                    onToggle={(v) => setCurrentTools((prev) => toggle(prev, v))}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    ملاحظات إضافية <span className="text-slate-400 font-normal">(اختياري)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="أي تفاصيل إضافية تساعدنا على تجهيز التجربة..."
                    rows={4}
                    className="w-full resize-y rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-[#2FC7F7]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-[#409EEF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#409EEF]/30 transition hover:bg-[#2f8ee0] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'جاري الإرسال...' : 'اطلب تجربتي المجانية'}
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#7FE0FB]">
                  <ShieldCheck className="h-4 w-4" />
                  الشروط والأحكام
                </div>
                <ul className="space-y-2 text-sm leading-7 text-slate-300">
                  {TERMS.map((term) => (
                    <li key={term} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#2FC7F7]">*</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
