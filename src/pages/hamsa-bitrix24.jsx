import React from 'react';
import {
  ArrowLeft,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TimerReset,
  UserCog,
  Users,
  Wallet,
  Workflow
} from 'lucide-react';

const painPoints = [
  'فقدان طلبات الموظفين بسبب الاعتماد على الرسائل والمحادثات المتفرقة.',
  'عدم وضوح مسار الموافقات بين الإدارة والمشرفين.',
  'مشاكل الحضور والانصراف وصعوبة تتبع التأخير والعمل الإضافي.',
  'ضغط واتساب وعدم توثيق المحادثات المرتبطة بالعمل.',
  'تأخر الصيانة بسبب ضعف المتابعة وعدم وجود نظام واضح للتصعيد.'
];

const solutionBlocks = [
  {
    icon: Users,
    title: 'إدارة الموظفين (50 موظف)',
    points: ['تعريف صلاحيات دقيقة حسب المنصب.', 'هيكل إداري واضح يحدد المسؤوليات وخطوط الموافقة.']
  },
  {
    icon: MessageSquareText,
    title: 'دمج واتساب رسمي',
    points: ['استقبال الرسائل داخل Bitrix24 بشكل مركزي.', 'توزيع المحادثات على المسؤول المناسب.', 'أرشفة كاملة لكل التفاعلات.']
  },
  {
    icon: CalendarCheck,
    title: 'نظام الحضور والانصراف',
    points: ['تسجيل الحضور عبر الجوال أو جهاز البصمة.', 'تقارير دقيقة للتأخير وساعات العمل.', 'احتساب العمل الإضافي بشكل واضح.']
  },
  {
    icon: Workflow,
    title: 'نماذج إلكترونية مع سير موافقات تلقائي',
    points: [
      'طلب إجازة (جميع الأنواع) + طلب استئذان.',
      'طلب سلفة + طلب استقالة.',
      'طلب صيانة سكن + طلب صيانة أدوات + طلب صيانة فرع.',
      'كل طلب يمر بموافقة تلقائية ويتم أرشفته بالكامل.'
    ]
  }
];

const workflowSteps = [
  'تحليل احتياج المطعم.',
  'إعداد النظام وتجهيز البنية الإدارية.',
  'تصميم النماذج وسير العمل والاعتمادات.',
  'دمج واتساب والحضور والانصراف.',
  'تدريب الإدارة والموظفين على الاستخدام الفعلي.',
  'تقديم دعم فني بعد الإطلاق.'
];

const outcomes = [
  'تقليل الأخطاء الإدارية اليومية.',
  'تسريع الموافقات وسلاسة التنفيذ.',
  'تقارير دقيقة تساعد الإدارة على اتخاذ القرار.',
  'ضبط الحضور والانضباط الوظيفي.',
  'رقابة كاملة على العمليات من منصة واحدة.'
];

const whyUs = [
  'خبرة عملية في تنفيذ أنظمة Bitrix24.',
  'فهم عميق لبيئة وتشغيل المطاعم.',
  'أتمتة احترافية لسير العمل والنماذج.',
  'دعم فني مستمر لضمان الاستقرار والتطوير.'
];

const financialItems = [
  'تحليل العمليات وإعداد الهيكل الإداري داخل Bitrix24.',
  'إعداد النماذج الإلكترونية وسير الموافقات الآلية.',
  'ربط واتساب الرسمي وتوزيع المحادثات والأرشفة.',
  'تفعيل نظام الحضور والانصراف وإخراج التقارير.',
  'تدريب فريق الإدارة والموظفين + دعم ما بعد الإطلاق.'
];

const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
const approvalText = encodeURIComponent(`أوافق على العرض الفني والمالي لنظام إدارة موظفي مطعم حمسة وتغميسة Bitrix24\nرابط العرض: ${pageUrl}`);
const emailApproval = `mailto:info@noqtatain.com?subject=${encodeURIComponent('موافقة على العرض الفني والمالي - حمسة وتغميسة')}&body=${approvalText}`;
const whatsappApproval = `https://wa.me/966543569492?text=${approvalText}`;

const CTAButton = ({ href, children, secondary = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition ${
      secondary
        ? 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
        : 'bg-emerald-600 text-white hover:bg-emerald-500'
    }`}
  >
    {children}
    <ArrowLeft className="h-4 w-4" />
  </a>
);

export default function HamsaBitrix24() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 dark:from-[#030712] dark:to-[#020617] dark:text-white">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-white/5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
            <Sparkles className="h-4 w-4" />
            عرض فني ومالي
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">نظام إدارة موظفي مطعم حمسة وتغميسة Bitrix24</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-600 dark:text-emerald-300">حول إدارة منشأتك إلى نظام رقمي متكامل</p>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            تنفيذ نظام Bitrix24 لإدارة الموظفين، الطلبات، الحضور، والصيانة من منصة واحدة.
          </p>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">عدد الموظفين المستهدف: 50 موظف</div>
            <div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">مدة التنفيذ: 3 - 4 أسابيع</div>
            <div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">صلاحية العرض: 15 يوم من تاريخ الإصدار</div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <TimerReset className="h-6 w-6 text-amber-500" />
            <h2 className="text-2xl font-bold">المشكلة التي نحلها</h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {painPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/10 dark:bg-white/5">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-6 w-6 text-emerald-500" />
            <h2 className="text-2xl font-bold">العرض الفني</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {solutionBlocks.map(({ icon: Icon, title, points }) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-5 dark:border-white/10">
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-emerald-500" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {points.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <UserCog className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">آلية العمل</h2>
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-white/10">
                <span className="mb-2 inline-block rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-100">
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-bold">النتائج المتوقعة</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-violet-500" />
              <h2 className="text-2xl font-bold">لماذا نحن؟</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <Wallet className="h-6 w-6 text-emerald-500" />
            <h2 className="text-2xl font-bold">العرض المالي</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">يشمل التنفيذ</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {financialItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-400/40 bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="text-sm text-slate-500 dark:text-slate-300">رسوم تنفيذ النظام (مرة واحدة)</p>
                <p className="mt-2 text-3xl font-bold text-emerald-700 dark:text-emerald-300">٩٠٠٠ ريال</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                <p className="text-sm text-slate-500 dark:text-slate-300">الدعم الفني الشهري (اختياري)</p>
                <p className="mt-2 text-2xl font-semibold">1,500 ريال / شهر</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                <p className="text-sm text-slate-500 dark:text-slate-300">تكاليف الاشتراكات السنوية</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                  <li>اشتراك Bitrix24 السنوي: 8,960 ريال</li>
                  <li>دمج واتساب الرسمي السنوي: 2,480 ريال</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-300">
                الأسعار أعلاه تمثل تكاليف الاشتراك السنوية، وتُضاف على رسوم تنفيذ النظام.
              </div>
            </div>
          </div>
        </section>

        <section id="approval" className="rounded-3xl border border-emerald-300 bg-emerald-50 p-8 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-500/10">
          <div className="mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-bold">الموافقة على العرض</h2>
          </div>
          <p className="mb-5 text-sm text-slate-600 dark:text-slate-200">
            في حال الموافقة، اختر طريقة التأكيد المناسبة لبدء التنفيذ وجدولة اجتماع الانطلاق.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={emailApproval}>موافقة عبر الإيميل</CTAButton>
            <CTAButton href={whatsappApproval} secondary>
              موافقة عبر واتساب
            </CTAButton>
          </div>
        </section>
      </div>
    </div>
  );
}
