import React, { useState } from 'react';

const goals = [
  { title: 'الهدف المالي', value: '60,000 – 80,000 ريال', note: 'إيراد شهري متكرر (MRR)' },
  { title: 'الهدف البيعي', value: '10 عملاء نشطين', note: 'متوسط الاشتراك: 4,500 – 12,000 ريال' },
  { title: 'الهدف التسويقي', value: '60 Lead', note: '30 جلسة تشخيص + 10 صفقات مغلقة' },
];

const pillars = [
  {
    title: '1) تأسيس البنية التشغيلية',
    objective: 'بناء أساس الشركة قبل التوسع',
    tasks: [
      'تطوير الهوية البصرية النهائية',
      'إعداد عرض خدمات احترافي وبروفايل الشركة',
      'إعداد عرض تقديمي للمبيعات وقوالب التقارير',
      'تجهيز نظام CRM ونظام إدارة المهام',
      'إعداد نماذج العقود والفواتير',
    ],
    result: 'شركة جاهزة للبيع والتنفيذ.',
  },
  {
    title: '2) بناء نظام البيع',
    objective: 'إنشاء عملية بيع واضحة وقابلة للتكرار',
    tasks: [
      'إنشاء صفحة حجز جلسة تشخيص',
      'إعداد سكربت جلسة البيع ونموذج تحليل النشاط التجاري',
      'إعداد عرض نظام النمو وتحديد آلية التسعير',
      'تجهيز عرض السعر الرسمي',
    ],
    result: 'عملية بيع واضحة يمكن تكرارها مع كل عميل.',
  },
  {
    title: '3) التسويق وجلب العملاء',
    objective: 'جلب 20 عميل محتمل شهريًا',
    tasks: [
      'تنشيط شبكة العلاقات وطلب الإحالات (هدف 3 عملاء)',
      'تفعيل شبكة دي باور باجتماعات تعريفية وعرض نظام النمو (هدف 4 عملاء)',
      'إطلاق حملات LinkedIn / Instagram / Google بميزانية 2000 ريال شهريًا',
      'إدارة حسابات التواصل عبر 3 منشورات أسبوعيًا (تعليمي + نصائح + دراسات حالة)',
    ],
    result: 'تدفّق مستمر للعملاء المحتملين مع تعزيز المصداقية.',
  },
  {
    title: '4) تشغيل المشاريع الأولى',
    objective: 'تنفيذ المشاريع بجودة عالية لبناء السمعة',
    tasks: [
      'اختيار فريق Outsourcing (تصميم، فيديو، محتوى، إعلانات، أتمتة)',
      'إعداد دليل العمل ومعايير الجودة',
      'إنشاء قوالب التسليم وآلية إدارة المشاريع',
    ],
    result: 'القدرة على إدارة 10 – 15 عميل بدون ضغط.',
  },
];

const monthlyPlan = [
  {
    month: 'أبريل',
    focus: 'الإطلاق وبناء الثقة',
    target: '3 عملاء',
    tasks: ['إطلاق الحملات', 'التواصل مع العلاقات', 'تقديم العروض'],
  },
  {
    month: 'مايو',
    focus: 'توسيع البيع',
    target: '6 عملاء (إجمالي)',
    tasks: ['تحسين الحملات', 'زيادة الاجتماعات', 'تحسين عرض البيع'],
  },
  {
    month: 'يونيو',
    focus: 'الاستقرار التشغيلي',
    target: '10 عملاء',
    tasks: ['تحسين الخدمة', 'توثيق النتائج', 'استخدام العملاء كدراسات حالة'],
  },
];

const kpis = [
  'عدد العملاء المحتملين: 20 شهريًا',
  'عدد جلسات التشخيص: 10 شهريًا',
  'عدد الصفقات المغلقة: 3 شهريًا',
  'الإيراد الشهري النهائي: 70,000 ريال',
];

const ceoWeekly = [
  'المبيعات: 10 تواصلات جديدة أسبوعيًا + 5 اجتماعات بيع',
  'العلاقات: متابعة شبكة العلاقات + متابعة دي باور',
  'الإدارة: إدارة الفريق الخارجي + متابعة المشاريع',
];

export default function FirstQuarter() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === 'Bismillah') {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setIsUnlocked(false);
    setError('كلمة المرور غير صحيحة. حاول مرة أخرى.');
  };

  if (!isUnlocked) {
    return (
      <section dir="rtl" className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-50/95 px-4 py-16 backdrop-blur-sm dark:bg-slate-950/95">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-white">صفحة الربع الأول مغلقة بكلمة مرور</h1>
          <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">الرجاء إدخال كلمة المرور للوصول إلى الخطة التشغيلية.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="first-quarter-password">
              كلمة المرور
            </label>
            <input
              id="first-quarter-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none ring-violet-300 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="أدخل كلمة المرور"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 px-4 py-2.5 font-semibold text-white transition hover:bg-violet-700"
            >
              دخول
            </button>
          </form>

          {error && (
            <p className="mt-4 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              {error}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <div dir="rtl" className="bg-slate-50 px-4 pb-14 pt-28 text-slate-900 dark:bg-slate-950 dark:text-white">
      <main className="mx-auto max-w-6xl space-y-8">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
          <p className="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            خطة تشغيلية Q1 • نقطة انطلاق النمو
          </p>
          <h1 className="text-2xl font-extrabold leading-relaxed sm:text-4xl">
            الخطة التشغيلية للربع الأول (أبريل – مايو – يونيو) لشركة نقطتين
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            الهدف من هذه الخطة هو الوصول إلى أول 10 عملاء وبناء نظام التشغيل الأساسي للشركة عبر مسار تنفيذي واضح يجمع بين الانضباط البيعي والجودة التشغيلية.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {goals.map((goal) => (
            <article key={goal.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-lg font-bold text-violet-600 dark:text-violet-400">{goal.title}</h2>
              <p className="mt-2 text-2xl font-extrabold">{goal.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{goal.note}</p>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">المحاور التشغيلية الأربعة</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm font-semibold text-violet-600 dark:text-violet-400">الهدف: {pillar.objective}</p>
                <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
                  {pillar.tasks.map((task) => (
                    <li key={task} className="list-disc pr-5 marker:text-violet-500">{task}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium dark:bg-slate-800">
                  النتيجة المطلوبة: {pillar.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-extrabold">خطة العملاء للربع الأول</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {monthlyPlan.map((item) => (
              <article key={item.month} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400">شهر {item.month}</p>
                <h3 className="mt-1 text-xl font-bold">{item.focus}</h3>
                <p className="mt-2 text-violet-600 dark:text-violet-400">الهدف: {item.target}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                  {item.tasks.map((task) => (
                    <li key={task}>• {task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-extrabold">مؤشرات الأداء الأسبوعية (KPIs)</h2>
            <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
              {kpis.map((item) => (
                <li key={item} className="list-disc pr-5 marker:text-violet-500">{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-extrabold">جدول المهام الأسبوعية للمدير التنفيذي</h2>
            <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
              {ceoWeekly.map((item) => (
                <li key={item} className="list-disc pr-5 marker:text-violet-500">{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900/60 dark:bg-violet-900/20">
          <h2 className="text-2xl font-extrabold text-violet-900 dark:text-violet-200">الخلاصة بنهاية الربع الأول</h2>
          <div className="mt-3 grid gap-2 text-violet-900 dark:text-violet-100 sm:grid-cols-2">
            <p>✔ 10 عملاء نشطين</p>
            <p>✔ 60k – 80k دخل شهري</p>
            <p>✔ نظام بيع واضح وقابل للتكرار</p>
            <p>✔ نظام تشغيل مستقر وقابل للتوسع</p>
          </div>
        </section>
      </main>
    </div>
  );
}
