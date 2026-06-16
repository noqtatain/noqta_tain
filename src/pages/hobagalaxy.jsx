import React from 'react';

const phases = [
  {
    title: 'المرحلة الأولى: التأسيس والبنية التحتية (Foundation)',
    items: [
      'تنظيف وتحسين بيئة WordPress عبر إزالة الإضافات غير الضرورية وتحديث النظام الأساسي لضمان سرعة الاستجابة.',
      'إعداد WooCommerce للمنتجات الرقمية كمنتجات افتراضية (Virtual) وقابلة للتنزيل (Downloadable) لضمان التسليم الفوري بعد الدفع.',
      'تجهيز وربط بوابات الدفع المحلية والعالمية (مدى، فيزا، ماستركارد، Apple Pay) بشكل آمن وسريع.',
    ],
  },
  {
    title: 'المرحلة الثانية: تصميم واجهة وتجربة المستخدم (UI/UX)',
    items: [
      'تصميم صفحة هبوط (Landing Page) تركز على العروض الرئيسية وميزة التسليم الفوري.',
      'تبسيط صفحة إدخال البيانات والبحث والتصفية لتسريع الوصول للمنتج المطلوب.',
      'تطوير صفحة نتائج/منتج تعرض السعر والوصف المختصر وزر إضافة للسلة بشكل واضح.',
      'تحسين مسار الدفع عبر One-Page Checkout لتقليل الخطوات وزيادة معدل التحويل.',
    ],
  },
  {
    title: 'المرحلة الثالثة: الأتمتة والتسليم الفوري',
    items: [
      'أتمتة تسليم الأكواد والبطاقات عبر البريد الإلكتروني مع إظهارها في صفحة نجاح الطلب فور إتمام الدفع.',
      'إعداد نظام إشعارات لتأكيد الطلب وإرسال الفواتير التلقائية.',
    ],
  },
  {
    title: 'المرحلة الرابعة: الاختبار والإطلاق (Testing & Launch)',
    items: [
      'اختبار الأداء لضمان سرعة تحميل الصفحات أقل من 3 ثوانٍ.',
      'اختبار كامل لمسار الشراء للتأكد من سلاسة الدفع والتسليم.',
      'الإطلاق الفعلي من بيئة التطوير إلى البيئة الحية.',
    ],
  },
];

const timeline = [
  {
    phase: 'التأسيس والبنية التحتية',
    duration: 'أسبوع واحد',
    details: 'إعداد السيرفر، WordPress، و WooCommerce',
  },
  {
    phase: 'تصميم واجهة وتجربة المستخدم',
    duration: 'أسبوع إلى أسبوعين',
    details: 'تصميم الصفحات الأساسية ومسار الدفع',
  },
  {
    phase: 'الأتمتة والتسليم الفوري',
    duration: 'أسبوع واحد',
    details: 'برمجة وتفعيل التسليم التلقائي للأكواد',
  },
  {
    phase: 'الاختبار والإطلاق',
    duration: '3 إلى 5 أيام',
    details: 'اختبار شامل وإطلاق المنصة',
  },
];

const team = [
  'مدير مشروع / محلل أعمال: لفهم المتطلبات، إدارة الجدول الزمني، وضمان توافق المخرجات مع أهداف الـ MVP.',
  'مصمم UI/UX: لتصميم صفحات Landing و Product و Checkout بما يركز على بساطة الاستخدام وزيادة التحويل.',
  'مطور WordPress / WooCommerce (Full-Stack): لتنفيذ المتجر، إعداد التصميم، ربط بوابات الدفع، وبرمجة نظام التسليم الفوري.',
  'مختبر جودة (QA): لاختبار مسار الشراء وضمان خلو الموقع من الأخطاء قبل الإطلاق.',
];

export default function HobaGalaxy() {
  return (
    <section dir="rtl" className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-bold text-violet-700">
            عرض فني ومالي مبدئي
          </p>
          <h1 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
            خطة تنفيذ تطوير منصة (MVP) Galaxy Hoba
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            بناءً على تحليل الموقع الحالي (hobagalaxy.com) وأفضل الممارسات في تطوير متاجر المنتجات الرقمية باستخدام WordPress و WooCommerce،
            تم إعداد هذه الخطة للتركيز على تحسين تجربة المستخدم وزيادة معدلات التحويل مع تسليم رقمي فوري وسلس.
          </p>
        </header>

        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-extrabold">1) تحليل الوضع الحالي والأهداف</h2>
          <p className="leading-8 text-slate-700">
            الموقع الحالي يقدم منتجات رقمية (بطاقات، اشتراكات، ألعاب) مع نظام ولاء. هدف مرحلة MVP هو تبسيط رحلة المستخدم لتكون:
            <span className="mx-2 rounded bg-slate-100 px-2 py-1 font-bold text-slate-900">دخول ← نتيجة ← تحويل</span>
            مع ضمان تجربة شراء واضحة وتلقائية بدون تعقيدات.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-5 text-xl font-extrabold">2) خطة التنفيذ المختصرة (4 مراحل)</h2>
          <div className="space-y-5">
            {phases.map((phase) => (
              <section key={phase.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">{phase.title}</h3>
                <ul className="space-y-2 leading-8 text-slate-700">
                  {phase.items.map((item) => (
                    <li key={item} className="list-disc pr-5 marker:text-violet-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-5 text-xl font-extrabold">3) المدة الزمنية المتوقعة</h2>
          <p className="mb-4 leading-8 text-slate-700">
            المدة الإجمالية التقديرية لمشروع MVP هي من 3 إلى 4 أسابيع مع توزيع زمني مرحلي كما يلي:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-right">
              <thead className="bg-slate-100 text-sm font-bold text-slate-800">
                <tr>
                  <th className="px-4 py-3">المرحلة</th>
                  <th className="px-4 py-3">المدة المتوقعة</th>
                  <th className="px-4 py-3">التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row) => (
                  <tr key={row.phase} className="border-t border-slate-200 bg-white text-sm text-slate-700">
                    <td className="px-4 py-3 font-semibold">{row.phase}</td>
                    <td className="px-4 py-3">{row.duration}</td>
                    <td className="px-4 py-3">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-extrabold">4) التكلفة التقديرية</h2>
          <p className="leading-8 text-slate-700">
            التكلفة التقديرية لتطوير نسخة MVP احترافية تركّز على المنتجات الرقمية تتراوح بين
            <span className="mx-2 rounded bg-violet-100 px-2 py-1 font-extrabold text-violet-700">8,000 ريال</span>
            إلى
            <span className="mx-2 rounded bg-violet-100 px-2 py-1 font-extrabold text-violet-700">12,000 ريال</span>.
          </p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-900">
            ملاحظة: التكلفة لا تشمل رسوم الاستضافة السنوية، أو رسوم بوابات الدفع، أو الإضافات المدفوعة (Premium Plugins) إن لزم.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-extrabold">5) هيكل الفريق المطلوب</h2>
          <ul className="space-y-2 leading-8 text-slate-700">
            {team.map((member) => (
              <li key={member} className="list-disc pr-5 marker:text-violet-600">
                {member}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
