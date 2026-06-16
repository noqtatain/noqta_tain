import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Store,
  ShoppingBag,
  LineChart,
  Rocket,
  BadgeCheck,
  CircleDollarSign,
  CalendarClock,
  Sparkles,
} from 'lucide-react';

const productCategories = [
  'المكسرات والمقرمشات',
  'الفواكه المجففة',
  'البهارات والتوابل',
  'القهوة والشاي',
  'المنتجات الصحية والعضوية',
  'بوكسات الهدايا والبكجات',
];

const strengths = [
  'تنوع واضح في المنتجات بين المكسرات، البهارات، والخيارات الصحية.',
  'وجود باقات وبوكسات جاهزة يسهل بناء عروض تسويقية فعالة.',
  'تقييمات منتجات جيدة يمكن استثمارها في الإعلانات الاجتماعية.',
  'طبيعة المنتجات مناسبة لمحتوى قصير مثل الوصفات والسناكات والضيافة.',
];

const challenges = [
  'الاعتماد الكبير على الخصومات يقلل من قيمة العلامة على المدى الطويل.',
  'ضعف المحتوى التسويقي مقارنة بحجم الفرص في سوق المنتجات الغذائية.',
  'الحاجة إلى خطة محتوى مرئي مستمر يدعم التحويل وليس الوصول فقط.',
];

const platforms = ['Snapchat', 'TikTok', 'Instagram', 'Google Ads'];

const campaignTypes = [
  {
    title: 'Video Ads',
    details: 'إعلانات فيديو تركّز على المنتج، طريقة الاستخدام، ولقطات lifestyle مرتبطة بالضيافة اليومية.',
  },
  {
    title: 'Offer Ads',
    details: 'حملات عروض مركزة على البكجات والخصومات الموسمية مع رسائل بيعية مباشرة.',
  },
  {
    title: 'Retargeting',
    details: 'إعادة استهداف زوار المتجر والمتفاعلين مع المحتوى لرفع معدل التحويل.',
  },
  {
    title: 'Search Ads',
    details: 'حملات بحث في Google على كلمات شرائية مثل: مكسرات فاخرة، بهارات، مكسرات أونلاين.',
  },
];

const budgetPlans = [
  {
    name: 'الخيار الأول: ميزانية صغيرة',
    adBudget: '10,000 ريال شهرياً',
    expectedTraffic: '12,000 – 20,000 زيارة شهرية',
    expectedSales: '150 – 300 طلب شهرياً',
    managementFee: '4,000 ريال شهرياً',
  },
  {
    name: 'الخيار الثاني: ميزانية متوسطة',
    adBudget: '30,000 ريال شهرياً',
    expectedTraffic: '40,000 – 70,000 زيارة شهرية',
    expectedSales: '600 – 1000 طلب شهرياً',
    managementFee: '7,000 ريال شهرياً',
  },
];

const services = [
  'إعداد استراتيجية إعلانية متكاملة حسب أهداف النمو.',
  'بناء الحملات الإعلانية على المنصات المعتمدة.',
  'تحليل المنافسين وصياغة زوايا تسويقية تنافسية.',
  'إعداد Pixel وTracking وقياس رحلة العميل.',
  'إدارة يومية للحملات وتحسين الأداء بشكل مستمر.',
  'اختبار الإعلانات والرسائل والشرائح المستهدفة.',
  'كتابة النصوص الإعلانية وتحديد الأفكار الإبداعية.',
  'تقرير أسبوعي وتقرير شهري مع تحليل واضح لمؤشرات ROAS.',
];

const ACCESS_PASSWORD = 'ebrahim';
const ACCESS_KEY = 'fustoqah-offer-access';

const FustoqahOffer = () => {
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

    if (password.trim().toLowerCase() === ACCESS_PASSWORD) {
      localStorage.setItem(ACCESS_KEY, 'granted');
      setIsUnlocked(true);
      setError('');
      return;
    }

    setError('كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.');
  };

  if (!isUnlocked) {
    return (
      <main dir="rtl" className="min-h-[80vh] bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold text-indigo-700">صفحة محمية</p>
            <h1 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">عرض متجر Fustoqah</h1>
            <p className="mt-3 leading-7 text-slate-600">
              يرجى إدخال كلمة المرور للوصول إلى العرض الفني والمالي.
            </p>

            <form onSubmit={handleUnlock} className="mt-6 space-y-4">
              <label htmlFor="offer-password" className="block text-sm font-medium text-slate-700">
                كلمة المرور
              </label>
              <input
                id="offer-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                placeholder="أدخل كلمة المرور"
                autoComplete="current-password"
              />
              {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                دخول العرض
              </button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main dir="rtl" className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_55%)]" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700">
              <Sparkles className="h-4 w-4" />
              العرض الفني والمالي لإدارة الحملات الإعلانية
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              متجر Fustoqah
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              وثيقة عرض احترافية مصممة لدعم نمو متجر فستقة في السوق الخليجي عبر استراتيجية إعلانية عملية،
              واضحة، وقابلة للقياس خلال فترة تنفيذ مبدئية مدتها ثلاثة أشهر.
            </p>

            <div className="mt-8 grid gap-4 rounded-2xl bg-slate-100/80 p-5 md:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">مجال المتجر</p>
                <p className="mt-1 font-semibold text-slate-900">منتجات غذائية استهلاكية وهديا</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">متوسط سلة الشراء</p>
                <p className="mt-1 font-semibold text-slate-900">120 – 180 ريال</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">الأسواق المستهدفة</p>
                <p className="mt-1 font-semibold text-slate-900">السعودية ودول الخليج</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Store className="h-6 w-6 text-indigo-600" />
              نبذة وتحليل المتجر
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              متجر إلكتروني سعودي يعمل منذ عام 2017 ويقدم منتجات متنوعة تشمل المكسرات، الفواكه المجففة،
              البهارات، القهوة والشاي، المنتجات العضوية، وبوكسات الهدايا مع خدمة شحن لعدة دول.
            </p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">متوسط أسعار المنتجات</p>
              <p className="mt-1 text-slate-700">المنتجات الفردية: 10 – 70 ريال</p>
              <p className="text-slate-700">البكجات والبوكسات: 90 – 220 ريال</p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <ShoppingBag className="h-6 w-6 text-indigo-600" />
              الفئات الرئيسية للمنتجات
            </h2>
            <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
              {productCategories.map((category) => (
                <li key={category} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium">
                  {category}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <BadgeCheck className="h-6 w-6 text-emerald-600" />
              نقاط القوة
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {strengths.map((point) => (
                <li key={point} className="rounded-xl bg-white/80 p-3 leading-7">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Target className="h-6 w-6 text-amber-600" />
              التحديات التسويقية
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {challenges.map((point) => (
                <li key={point} className="rounded-xl bg-white/80 p-3 leading-7">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">الجمهور المستهدف</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">الفئة العمرية الأساسية</p>
              <p className="mt-1 font-semibold text-slate-900">النساء 23 – 45</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">الشرائح</p>
              <p className="mt-1 font-semibold text-slate-900">ربات المنزل، المهتمون بالصحة، الضيافة، الهدايا</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">المناطق</p>
              <p className="mt-1 font-semibold text-slate-900">الرياض، جدة، المنطقة الشرقية</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Rocket className="h-6 w-6 text-indigo-600" />
            الاستراتيجية الإعلانية المقترحة
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                {platform}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {campaignTypes.map((type) => (
              <article key={type.title} className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">{type.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{type.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <CircleDollarSign className="h-6 w-6 text-indigo-600" />
            العرض المالي وتوزيع الميزانية
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {budgetPlans.map((plan) => (
              <article key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <dl className="mt-4 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt>ميزانية الإعلانات</dt>
                    <dd className="font-semibold">{plan.adBudget}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt>أجر إدارة الحملات</dt>
                    <dd className="font-semibold">{plan.managementFee}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt>الزيارات المتوقعة</dt>
                    <dd className="font-semibold">{plan.expectedTraffic}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt>المبيعات المتوقعة</dt>
                    <dd className="font-semibold">{plan.expectedSales}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <LineChart className="h-6 w-6 text-indigo-600" />
            نطاق الخدمات المقدمة
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <CalendarClock className="h-6 w-6 text-indigo-600" />
            المدة المقترحة
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">
            عقد مبدئي لمدة 3 أشهر، بهدف جمع البيانات، تحسين الحملات تدريجياً، وبناء أداء ثابت ينعكس على
            المبيعات بشكل مستدام.
          </p>
          <Link
            to="/Contact"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            اعتماد العرض والبدء بالتنفيذ
          </Link>
        </section>
      </div>
    </main>
  );
};

export default FustoqahOffer;
