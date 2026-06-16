const scopeItems = [
  'تهيئة بوت واتساب المبيعات وفق الدليل المعتمد لدى دي باور.',
  'إعداد رسائل الترحيب والتأهيل والردود الأساسية لمسار المبيعات.',
  'ضبط تدفق المحادثة لتحويل الاستفسارات إلى فرص بيع واضحة.',
  'تجهيز الرسائل الختامية وربطها بخطوة إجراء واضحة (طلب سعر/طلب تواصل).',
  'اختبار سيناريوهات التشغيل واعتماد النسخة الجاهزة للإطلاق.',
];

const deliverables = [
  'بوت واتساب مبيعات جاهز للتشغيل.',
  'سيناريو محادثة واضح ومهيكل حسب رحلة العميل.',
  'رسائل مبيعات أساسية قابلة للاستخدام الفوري.',
  'اختبار نهائي قبل التسليم مع تأكيد الجاهزية.',
];

const requirements = [
  'توفير صلاحية الوصول للحسابات أو المنصات المرتبطة بالتشغيل.',
  'اعتماد النصوص النهائية أو الملاحظات الخاصة بنبرة العلامة التجارية.',
  'تحديد مسؤول اعتماد من جهة دي باور لتسريع المراجعة والتنفيذ.',
];

const DPowerBotOffer = () => {
  return (
    <main className="bg-slate-50 py-16" dir="rtl">
      <div className="container mx-auto max-w-5xl px-4">
        <section className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-700">عرض سعر</p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">إعداد بوت واتساب المبيعات — دي باور</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            عرض مخصص لشركة <span className="font-semibold text-slate-900">دي باور</span> لإعداد بوت واتساب مبيعات
            احترافي حسب الدليل المعتمد، بهدف تنظيم الردود، تسريع المتابعة، ورفع جودة تحويل المحادثات إلى فرص بيع.
          </p>

          <div className="mt-8 grid gap-4 rounded-xl bg-emerald-50 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">العميل</p>
              <p className="text-lg font-semibold text-slate-900">دي باور</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">المدة التقديرية</p>
              <p className="text-lg font-semibold text-slate-900">5 - 8 يوم عمل</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">إجمالي التكلفة</p>
              <p className="text-2xl font-bold text-emerald-700">1000 ريال سعودي</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            الدليل المرجعي للإعداد:{' '}
            <a
              href="https://share.noqtatain.com/dpowerbot.html"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 underline"
            >
              share.noqtatain.com/dpowerbot.html
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">نطاق العمل</h2>
          <ul className="mt-6 list-disc space-y-3 pr-6 text-slate-600">
            {scopeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">المخرجات المتوقعة</h2>
            <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-600">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">المتطلبات من العميل</h2>
            <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-600">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl bg-emerald-900 p-8 text-white shadow-sm md:p-10">
          <h2 className="text-2xl font-bold">شروط العرض</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <p className="rounded-xl bg-white/10 p-4">صلاحية العرض: <span className="font-semibold">15 يومًا</span> من تاريخ الإصدار.</p>
            <p className="rounded-xl bg-white/10 p-4">بدء التنفيذ: مباشرة بعد اعتماد العرض وتوفير المتطلبات.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DPowerBotOffer;
