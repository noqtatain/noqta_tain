import React, { useState } from 'react';

const sectionData = [
  {
    title: '1) الهوية الاستراتيجية',
    points: [
      'الرؤية: أن تكون "نقطتين" الشريك الموثوق لنمو الشركات في السوق السعودي عبر حلول تسويق وتشغيل رقمية قابلة للقياس.',
      'الرسالة: تحويل الأهداف التجارية إلى خطط تنفيذية واضحة تُترجم إلى نتائج فعلية ومستمرة.',
      'الوعد القيمي: تنفيذ عملي سريع + شفافية في الأرقام + تركيز على العائد من الاستثمار (ROI).',
      'التموضع: شركة تنفيذ واستشارات تشغيلية-تسويقية تخدم أصحاب الأعمال الباحثين عن نمو منضبط.',
    ],
  },
  {
    title: '2) نموذج العمل والإيرادات',
    points: [
      'مصادر الدخل الأساسية: عقود إدارة شهرية، مشاريع تأسيس/تطوير، وباقات تشغيل مخصصة.',
      'تقسيم الباقات إلى 3 مستويات (أساسي، نمو، توسع) لتغطية شرائح مختلفة من العملاء.',
      'تسعير قائم على القيمة المتحققة، مع إبراز أثر كل خدمة على المبيعات أو كفاءة التشغيل.',
      'إضافة خدمات مكملة (تحسين التحويل، الأتمتة، التدريب) لرفع متوسط قيمة العميل LTV.',
    ],
  },
  {
    title: '3) خطة العملاء',
    points: [
      'القطاع المستهدف: منشآت صغيرة ومتوسطة في قطاعات الخدمات، التجارة، والمطاعم.',
      'قناة الاستحواذ: المحتوى التوعوي، الإحالات، الشراكات، وحملات أداء مركزة.',
      'آلية التحويل: جلسة تشخيص مجانية → عرض تنفيذي واضح → بدء سريع خلال 7 أيام.',
      'برنامج ولاء واحتفاظ: مراجعة شهرية للأداء + فرص تطوير ربع سنوية + دعم مباشر.',
    ],
  },
  {
    title: '4) الخطة التشغيلية',
    points: [
      'بناء SOPs موحدة للتسليم، التواصل، واعتماد المهام لتقليل التباين في جودة التنفيذ.',
      'تقسيم الفريق إلى مسارات واضحة: مبيعات، تنفيذ، جودة، ونجاح عملاء.',
      'استخدام أدوات إدارة مهام وتقارير أسبوعية لرفع الانضباط والسرعة.',
      'تخصيص مسؤول حساب (Account Manager) لكل عميل لضمان متابعة مستمرة.',
    ],
  },
  {
    title: '5) خارطة التنفيذ السنوية',
    points: [
      'الربع الأول: تثبيت الهوية، بناء العروض، وإنشاء قنوات بيع فعالة.',
      'الربع الثاني: مضاعفة الاستحواذ وتحسين معدل الإغلاق عبر نظام مبيعات واضح.',
      'الربع الثالث: التوسع في الشراكات والمنتجات المكملة وزيادة متوسط الفاتورة.',
      'الربع الرابع: تحسين الربحية، رفع نسب الاحتفاظ، وتجهيز خطة السنة الثانية.',
    ],
  },
  {
    title: '6) خطة الـ 90 يوم',
    points: [
      'الأيام 1-30: تهيئة البنية الداخلية، تجهيز المواد البيعية، وإطلاق حملة تعريفية قوية.',
      'الأيام 31-60: تكثيف المبيعات، اختبار الرسائل التسويقية، وإغلاق أولى العقود المتكررة.',
      'الأيام 61-90: تحسين رحلة العميل، بناء قصص نجاح، وتثبيت آلية الإحالات.',
      'مخرج الفترة: نموذج تشغيلي قابل للتكرار مع مؤشرات أداء أسبوعية واضحة.',
    ],
  },
  {
    title: '7) مؤشرات الأداء الرئيسية (KPIs)',
    points: [
      'الإيراد الشهري المتكرر (MRR) ونموه التراكمي.',
      'عدد العملاء الجدد شهريًا ومعدل الإغلاق من الاجتماعات البيعية.',
      'متوسط قيمة العقد ومعدل الاحتفاظ بالعملاء (Retention).',
      'هامش الربحية، تكلفة الاستحواذ (CAC)، وزمن التسليم لكل مشروع.',
    ],
  },
  {
    title: '8) الخلاصة التنفيذية',
    points: [
      'تحقيق هدف مليون ريال في السنة الأولى ممكن عبر مزيج من الانضباط البيعي والتشغيلي.',
      'التركيز يجب أن يكون على الإيراد المتكرر، وليس فقط المشاريع قصيرة الأجل.',
      'الشفافية في القياس والمراجعة الشهرية هي العامل الحاسم للاستدامة.',
      'بداية قوية خلال أول 90 يوم هي الأساس لتسارع النمو بقية العام.',
    ],
  },
];

const PASSWORD = '$noqt@t..n$';

export default function Plan() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === PASSWORD) {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setIsUnlocked(false);
    setError('كلمة المرور غير صحيحة. حاول مرة أخرى.');
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setPassword('');
  };

  if (!isUnlocked) {
    return (
      <section dir="rtl" className="min-h-[70vh] bg-slate-50 px-4 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h1 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-white">صفحة الخطة التنفيذية الخاصة</h1>
          <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">الرجاء إدخال كلمة المرور للوصول إلى المحتوى.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="plan-password">
              كلمة المرور
            </label>
            <input
              id="plan-password"
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
    <div dir="rtl" className="bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      <main className="mx-auto max-w-5xl space-y-8">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            وثيقة داخلية
          </p>
          <h1 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
            الخطة التنفيذية الكاملة لشركة "نقطتين" حتى تحقيق هدف 1 مليون ريال في السنة الأولى
          </h1>
          <button
            type="button"
            onClick={handleLock}
            className="mt-5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            قفل الصفحة
          </button>
        </header>

        {sectionData.map((section) => (
          <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-bold">{section.title}</h2>
            <ul className="space-y-2 text-base leading-8 text-slate-700 dark:text-slate-200">
              {section.points.map((point) => (
                <li key={point} className="list-disc pr-5 marker:text-violet-500">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
