const scopeItems = [
  {
    title: 'تحليل المتطلبات وتنظيم رحلة العمل',
    points: [
      'جلسة مواءمة لفهم الهيكل التشغيلي والأدوار.',
      'تحديد دورة العمل من الاستقبال وحتى الإغلاق.',
      'توثيق الحالات والاستثناءات ونقاط الموافقة.',
    ],
  },
  {
    title: 'إنشاء Workflow داخل Bitrix24',
    points: [
      'تصميم مسارات العمل (Pipeline/Stages) بما يتوافق مع إجراءات جانب آمن.',
      'تعريف قواعد الانتقال بين المراحل حسب الحالة.',
      'تفعيل حقول البيانات الأساسية المطلوبة للمتابعة والقياس.',
    ],
  },
  {
    title: 'تنفيذ الأتمتات',
    points: [
      'أتمتة إنشاء المهام تلقائيًا عند انتقال الحالة.',
      'أتمتة الإشعارات الداخلية للمسؤولين في نقاط القرار.',
      'أتمتة التذكيرات المرتبطة بالمهل الزمنية (SLA داخلي).',
      'أتمتة تحديثات الحالة وربطها بمالكي المهام.',
      'أتمتة إجراءات الإغلاق والتوثيق النهائي.',
    ],
  },
  {
    title: 'الاختبار والتشغيل',
    points: [
      'اختبار سيناريوهات العمل الأساسية قبل الإطلاق.',
      'ضبط نهائي للأتمتات بناءً على نتائج الاختبار.',
      'تشغيل فعلي (Go-Live) ومتابعة أولية قصيرة لضمان الاستقرار.',
    ],
  },
];

const SafetySideOffer = () => {
  return (
    <main className="bg-slate-50 py-16" dir="rtl">
      <div className="container mx-auto max-w-5xl px-4">
        <section className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-700">العرض الفني والمالي</p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">إعداد Bitrix24 لشركة جانب آمن</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            يهدف هذا العرض إلى بناء بيئة عمل متكاملة داخل Bitrix24 لشركة جانب آمن تشمل تصميم Workflow
            تشغيلي واضح، وإنشاء الأتمتات الأساسية المطلوبة لرفع كفاءة الفريق وتسريع الإنجاز وتقليل العمل
            اليدوي.
          </p>
          <div className="mt-8 grid gap-4 rounded-xl bg-emerald-50 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">العميل</p>
              <p className="text-lg font-semibold text-slate-900">شركة جانب آمن</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">المدة التقديرية</p>
              <p className="text-lg font-semibold text-slate-900">٤ إلى ٥ أسابيع</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">إجمالي التكلفة</p>
              <p className="text-2xl font-bold text-emerald-700">٢,٠٠٠ ريال سعودي</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">نطاق العمل</h2>
          <div className="mt-6 space-y-6">
            {scopeItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pr-5 text-slate-600">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">المخرجات المتوقعة</h2>
            <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-600">
              <li>Workflow مكتمل داخل Bitrix24 حسب دورة عمل جانب آمن.</li>
              <li>أتمتات جاهزة وفعّالة على المسار التشغيلي.</li>
              <li>لوحة متابعة واضحة للمراحل والمهام.</li>
              <li>دليل استخدام مختصر للفريق (Quick Guide).</li>
              <li>جلسة تسليم وشرح للمسؤول المعني.</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
};

export default SafetySideOffer;
