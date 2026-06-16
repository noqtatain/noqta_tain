import React from 'react';
import {
  BadgeCheck,
  CalendarClock,
  ChefHat,
  CheckCircle2,
  Clock3,
  Landmark,
  Layers3,
  Laptop,
  QrCode,
  Rocket,
  Settings2,
  Sparkles,
  Star,
  TrendingUp,
  XCircle,
} from 'lucide-react';

const readyPros = ['سرعة التنفيذ', 'تكلفة منخفضة', 'دعم تقني جاهز', 'إمكانية الطلب أونلاين'];
const readyCons = ['محدودية التخصيص', 'الاعتماد على الشركة المزودة', 'احتمالية وجود عمولات على الطلبات'];

const customPros = [
  'تصميم احترافي مطابق لهوية المطعم',
  'تخصيص كامل لتجربة العميل',
  'إمكانية التوسع مستقبلاً',
  'تكامل مع الأنظمة الأخرى',
  'ملكية كاملة للنظام',
];
const customCons = ['تكلفة أعلى في البداية', 'مدة تطوير أطول', 'الحاجة إلى استضافة وصيانة'];

const comparisonRows = [
  { label: 'التكلفة', ready: '٢٥٠ ريال شهرياً أو ٣٠٠٠ ريال سنوياً + ٢٥٠٠ ريال تخصيص (مرة واحدة)', custom: '١٢٠٠٠ ريال موزعة على ٤ دفعات (٤ حزم تطوير)' },
  { label: 'مدة التنفيذ', ready: 'عدة أيام', custom: 'من أسبوعين إلى أربعة أسابيع' },
  { label: 'مستوى التخصيص', ready: 'محدود', custom: 'عالي جداً' },
  { label: 'قابلية التوسع', ready: 'متوسطة', custom: 'مرتفعة' },
  { label: 'الملكية التقنية', ready: 'مرتبطة بالمنصة', custom: 'ملكية كاملة للمطعم' },
  { label: 'إمكانية التكامل', ready: 'حسب قدرات المنصة', custom: 'مرنة حسب احتياج التشغيل' },
];

const OptionCard = ({ title, subtitle, icon: Icon, pros, cons, budget, duration, accent }) => (
  <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
    <div className="mb-5 flex items-center gap-3">
      <div className={`rounded-xl p-2 ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-300">{subtitle}</p>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-200">
          <BadgeCheck className="h-4 w-4" />
          الإيجابيات
        </p>
        <ul className="space-y-2 text-sm">
          {pros.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 dark:border-rose-500/30 dark:bg-rose-500/10">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-200">
          <XCircle className="h-4 w-4" />
          السلبيات
        </p>
        <ul className="space-y-2 text-sm">
          {cons.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <XCircle className="mt-0.5 h-4 w-4 text-rose-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
        <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Landmark className="h-4 w-4" />
          الميزانية التقديرية
        </p>
        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
          {budget.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
        <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Clock3 className="h-4 w-4" />
          مدة التنفيذ
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{duration}</p>
      </div>
    </div>
  </article>
);

export default function HamsaMenuPlan() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-slate-100 text-slate-900 dark:from-[#030712] dark:via-[#0b1120] dark:to-[#020617] dark:text-white">
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-amber-200/70 bg-white p-8 shadow-lg dark:border-amber-400/20 dark:bg-white/5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
            <ChefHat className="h-4 w-4" />
            مقترح استشاري مقدم من فريق التسويق
          </div>
          {/* <p className="mb-3 text-sm font-medium text-amber-700 dark:text-amber-200">تم الإعداد من قبل فريق التسويق</p> */}
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">مقترح إنشاء منيو رقمي لمطعم حمسة وتغميسة</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            يهدف هذا المقترح إلى تمكين المطعم من تقديم تجربة رقمية حديثة تسهّل تصفح الأصناف، تسرّع عملية الطلب، وتعزز رضا العملاء داخل المطعم وخارجه بما ينعكس على زيادة الطلبات وتحسين الكفاءة التشغيلية.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-4 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-bold">مقدمة</h2>
          </div>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">المنيو الرقمي أصبح عنصرًا أساسيًا في المطاعم الحديثة، لأنه يرفع مستوى الخدمة ويمنح الإدارة مرونة أكبر في التحديث والتطوير.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'تسهيل تصفح الأصناف بطريقة منظمة وجذابة.',
              'تقليل الاعتماد على المنيو الورقي وتكاليف إعادة الطباعة.',
              'تحسين تجربة العميل داخل المطعم عبر واجهة سهلة وسريعة.',
              'إمكانية تحديث الأسعار والأصناف والعروض بشكل فوري.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-white/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <OptionCard
            title="الخيار الأول: استخدام منصة منيو جاهزة"
            subtitle="حل سريع للانطلاق خلال وقت قصير وتكلفة منخفضة"
            icon={Laptop}
            accent="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
            pros={readyPros}
            cons={readyCons}
            budget={['رسوم إعداد (مرة واحدة)', 'اشتراك شهري حسب الباقة المختارة', 'تكلفة تخصيص المنيو: ٢٥٠٠ ريال (مرة واحدة)']}
            duration="عدة أيام فقط"
          />

          <OptionCard
            title="الخيار الثاني: تطوير منيو رقمي مخصص"
            subtitle="حل احترافي يركز على الهوية والمرونة والتوسع"
            icon={Layers3}
            accent="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
            pros={customPros}
            cons={customCons}
            budget={['تكلفة التصميم والتطوير', 'تكلفة الاستضافة السنوية', 'تكلفة الصيانة الاختيارية']}
            duration="من أسبوعين إلى أربعة أسابيع"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-500/10">
            <div className="mb-3 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-bold">التكلفة المالية - الخيار الأول</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">استخدام تسعيرة منصة TryOrder:</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/60 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-300">الاشتراك الشهري</p>
                <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">٢٥٠ ريال</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-300">الاشتراك السنوي</p>
                <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">٣٠٠٠ ريال</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-300">تكلفة الإعداد</p>
                <p className="mt-1 text-2xl font-bold text-indigo-700 dark:text-indigo-300">٢٥٠٠ ريال <span className="text-sm font-medium">(مرة واحدة)</span></p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <div className="mb-3 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold">التكلفة المالية - الخيار الثاني</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">تطوير منيو رقمي مخصص بنظام التطوير المستمر:</p>
            <div className="mt-4 rounded-2xl border border-white/60 bg-white p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-300">التكلفة الإجمالية</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-300">١٢٠٠٠ ريال</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">موزعة على ٤ دفعات (٤ حزم تطوير)، كل حزمة ٣٠٠٠ ريال، والمدة حسب اختيار الإدارة والميزانية.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-white/60 bg-white p-4 text-sm dark:border-white/10 dark:bg-white/5">
              <p className="mb-2 font-semibold">المميزات المضمنة:</p>
              <p className="text-slate-600 dark:text-slate-300">تشمل جميع مميزات منصة TryOrder ما عدا تطبيق الجوال.</p>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-cyan-500" />
            <h2 className="text-2xl font-bold">جدول المقارنة</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200 text-sm dark:border-white/10">
              <thead className="bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-100">
                <tr>
                  <th className="px-4 py-3 text-right font-semibold">المعيار</th>
                  <th className="px-4 py-3 text-right font-semibold">منصة جاهزة</th>
                  <th className="px-4 py-3 text-right font-semibold">تطوير مخصص</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-slate-50/70 dark:bg-white/5'}>
                    <td className="px-4 py-3 font-semibold">{row.label}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.ready}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-300 bg-emerald-50 p-6 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <div className="mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold">التوصية الاستشارية</h2>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>المنصة الجاهزة مناسبة للحلول السريعة منخفضة التكلفة.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /><span>الحل المخصص مناسب للمطاعم التي تسعى لتجربة رقمية احترافية وقابلة للتوسع.</span></li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-indigo-500" />
              <h2 className="text-xl font-bold">خطة تنفيذ مقترحة</h2>
            </div>
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                <p className="mb-2 flex items-center gap-2 font-semibold"><CalendarClock className="h-4 w-4 text-indigo-500" />المرحلة الأولى</p>
                <p>إطلاق منيو رقمي سريع لضمان حضور رقمي فوري وتحسين الخدمة مباشرة.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                <p className="mb-2 flex items-center gap-2 font-semibold"><Settings2 className="h-4 w-4 text-indigo-500" />المرحلة الثانية</p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2"><QrCode className="h-4 w-4" />طلب عبر QR للطاولات</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4" />برنامج ولاء للعملاء</li>
                  <li className="flex items-center gap-2"><Clock3 className="h-4 w-4" />تكامل مع أنظمة الإدارة</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
