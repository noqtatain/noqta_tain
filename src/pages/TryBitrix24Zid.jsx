import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Users,
  ShoppingBag,
  MessageCircle,
  ListChecks,
  Globe,
  Workflow,
  CheckCircle2,
  ArrowLeft,
  Store,
  PhoneCall,
  Settings,
  Rocket,
} from 'lucide-react';
import {
  GULF_COUNTRIES,
  isValidGulfPhone,
  normalizePhone,
  saveLocalRecord,
  submitWorkshopLead,
} from '@/pages/workshop/shared/bitrix';

const WHAT_IS_FEATURES = [
  {
    icon: Users,
    title: 'إدارة علاقات العملاء (CRM)',
    desc: 'العملاء المحتملون، الصفقات، جهات الاتصال، عروض الأسعار، الفواتير، والدفع الإلكتروني في مكان واحد.',
  },
  {
    icon: MessageCircle,
    title: 'مركز اتصال موحّد',
    desc: 'واتساب، انستقرام، مكالمات ورسائل الموقع تصل جميعها لصندوق واحد مع فريق المبيعات.',
  },
  {
    icon: ListChecks,
    title: 'المهام والمشاريع',
    desc: 'إدارة المهام، مخططات جانت، لوحات كانبان، وتتبع الوقت لفريق العمل بالكامل.',
  },
  {
    icon: Globe,
    title: 'المواقع والمتاجر',
    desc: 'بناء مواقع ومتاجر إلكترونية ونماذج ويب متجاوبة مع محركات البحث.',
  },
  {
    icon: Workflow,
    title: 'الأتمتة والموارد البشرية',
    desc: 'سير عمل آلي، موافقات، دليل الموظفين، متابعة الحضور، وقاعدة معرفة داخلية.',
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
                ? 'border-emerald-600 bg-emerald-600 text-white'
                : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-400'
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
      sourceDescription: 'صفحة /try-bitrix24-zid',
    });

    setSubmitting(false);
    setDone(true);
  }

  return (
    <main dir="rtl" className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <Sparkles className="h-4 w-4" />
            تجربة مجانية لأصحاب متاجر زد
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            جرّب Bitrix24 مربوطًا بمتجرك على زد
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            وحّد طلباتك، عملاءك، ومحادثات واتساب في مكان واحد. فريق نقطتين يجهز لك حساب Bitrix24 تجريبي
            ويربطه بمتجرك على زد خلال أيام قليلة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
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
      </section>

      {/* What is Bitrix24 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-emerald-600">ما هو Bitrix24؟</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            مساحة عمل واحدة لإدارة أعمالك بالكامل
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Bitrix24 مساحة عمل مجانية عبر الإنترنت لإدارة الأعمال، تجمع بين إدارة علاقات العملاء (CRM)،
            إنجاز المهام، عقد الاجتماعات عبر الإنترنت، بناء المواقع والمتاجر، والأتمتة — في منصة واحدة
            يستخدمها أكثر من ١٥ مليون مؤسسة حول العالم بـ١٨ لغة.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IS_FEATURES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why connect with Zid */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-emerald-600">لماذا تربطه بمتجرك على زد؟</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              فائدة مباشرة لتجار زد الباحثين عن نظام يجمع كل شيء
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY_ZID_INTEGRATION.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
          <p className="text-sm font-semibold text-emerald-600">كيف نبدأ؟</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">أربع خطوات بسيطة</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section id="form" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {done ? (
            <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold">تم استلام طلبكم بنجاح</h2>
              <p className="mt-3 leading-7 text-slate-300">
                سيتواصل معكم فريق نقطتين قريبًا لإعداد حساب Bitrix24 التجريبي وربطه بمتجركم على زد.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                الرجوع للرئيسية
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p className="text-sm font-semibold text-emerald-300">تجربة مجانية</p>
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
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 ${
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
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 ${
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
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400"
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
                      className="w-28 flex-none rounded-xl border border-white/15 bg-white/10 px-2 py-3 text-white outline-none focus:border-emerald-400"
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
                      className={`w-full min-w-0 rounded-xl border bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400 ${
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
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400"
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
                    className="w-full resize-y rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'جاري الإرسال...' : 'اطلب تجربتي المجانية'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
