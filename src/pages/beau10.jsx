import React from 'react';
import {
  Sparkles,
  Store,
  Megaphone,
  Wallet,
  Trophy,
  Handshake,
  CalendarClock,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

const investmentItems = [
  'إنشاء المتجر الإلكتروني بالكامل',
  'الإعداد التقني وربط بوابات الدفع',
  'إدارة الحملات التسويقية',
  'تمويل الإعلانات في مرحلة الإطلاق',
  'إدارة المنصات الرقمية المرتبطة بالمشروع',
];

const recoveryItems = [
  'تكلفة الإعلانات الرقمية (Meta – Google – TikTok – Snapchat وغيرها)',
  'رسوم بوابات الدفع الإلكتروني',
  'تكاليف الشحن والتوصيل',
  'تكلفة إنتاج المحتوى الإعلاني (تصوير – تصميم – مونتاج)',
  'تكلفة الأدوات والمنصات التسويقية المستخدمة ضمن الحملات (اشتراكات أنظمة – أدوات تحليل – منصات بريد إلكتروني – أدوات CRM)',
  'تكلفة الوسائل التسويقية الحسية المرتبطة بالحملات (مطبوعات – تغليف دعائي – بروشورات – عينات مجانية – مواد ترويجية)',
  'أي مصروفات تسويقية مباشرة يتم اعتمادها ضمن خطة الحملة',
];

const partnerDuties = [
  'إدارة الحملات وتحسين الأداء',
  'تقديم تقارير شهرية مفصلة',
  'تطوير القناة الرقمية بشكل مستمر',
];

const ownersDuties = [
  'توفير مخزون كافٍ',
  'سرعة تجهيز الطلبات',
  'الالتزام بسياسة تسعير موحدة',
  'دعم العمليات اللوجستية',
];

const sections = [
  {
    icon: Store,
    title: 'المقدمة',
    content:
      'نظرًا للنمو المتسارع لقطاع التجارة الإلكترونية في مجال مستحضرات التجميل داخل المملكة، ومع وجود ثلاثة فروع في الرياض وفرع في صبيا، يمثل إنشاء قناة بيع رقمية خطوة استراتيجية لتعزيز المبيعات وزيادة انتشار العلامة التجارية.',
  },
  {
    icon: Megaphone,
    title: 'مرحلة الاستثمار والتأسيس',
    content: 'يتحمل الشريك التشغيلي كامل التأسيس والتشغيل التسويقي دون أي تكاليف مباشرة على الملاك في هذه المرحلة.',
    list: investmentItems,
  },
  {
    icon: Wallet,
    title: 'آلية استرداد التكاليف',
    content: 'يتم خصم المصروفات من إجمالي المبيعات الرقمية حتى استرداد كامل التكاليف، مع توثيق مالي شهري واضح.',
    list: recoveryItems,
  },
  {
    icon: Trophy,
    title: 'مكافأة التأسيس',
    content:
      'عند تغطية جميع المصروفات وتحقيق فائض قدره 20,000 ريال، يتم دفع 20,000 ريال كمكافأة تأسيس وتشغيل ناجح للمشروع.',
    highlight: '20,000 ريال فائض → 20,000 ريال مكافأة تأسيس',
  },
  {
    icon: Handshake,
    title: 'نسبة الشراكة التشغيلية',
    content:
      'بعد مرحلة التأسيس، تحتسب نسبة الشراكة من إجمالي مبيعات المتجر الإلكتروني فقط (دون الفروع أو القنوات الأخرى).',
    table: [
      ['السنة الأولى', '35%'],
      ['السنة الثانية', '30%'],
      ['السنة الثالثة وبعدها', '25%'],
    ],
  },
  {
    icon: ShieldCheck,
    title: 'التزامات الطرفين',
    duties: {
      partner: partnerDuties,
      owners: ownersDuties,
    },
  },
  // {
  //   icon: CalendarClock,
  //   title: 'مدة الشراكة',
  //   content: 'مدة الاتفاق ثلاث سنوات، قابلة للتمديد باتفاق الطرفين مع حق الإدارة الحصرية للمتجر الإلكتروني طوال مدة الشراكة.',
  //   highlight: 'مدة الاتفاق: 3 سنوات (إدارة حصرية)',
  // },
];

const SectionCard = ({ section }) => {
  const Icon = section.icon;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-violet-100 p-2 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
          <Icon size={22} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
      </div>

      {section.content && (
        <p className="leading-8 text-slate-600 dark:text-slate-300">{section.content}</p>
      )}

      {section.list && (
        <ul className="mt-4 space-y-3">
          {section.list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.highlight && (
        <div className="mt-4 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-violet-700/80">
          {section.highlight}
        </div>
      )}

      {section.table && (
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-right">
            <tbody>
              {section.table.map(([year, ratio]) => (
                <tr key={year} className="border-b border-slate-200 last:border-0 dark:border-slate-700">
                  <td className="bg-slate-50 px-4 py-3 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{year}</td>
                  <td className="px-4 py-3 text-lg font-bold text-violet-700 dark:text-violet-300">{ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.duties && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <h3 className="mb-3 font-bold text-slate-900 dark:text-white">التزامات الشريك التشغيلي</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              {section.duties.partner.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowLeft className="mt-0.5 shrink-0 text-violet-500" size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <h3 className="mb-3 font-bold text-slate-900 dark:text-white">التزامات الملاك</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              {section.duties.owners.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowLeft className="mt-0.5 shrink-0 text-violet-500" size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default function beau10() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-violet-50 py-12 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl border border-violet-200 bg-white/90 p-8 shadow-sm backdrop-blur dark:border-violet-700/50 dark:bg-slate-900/90">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <Sparkles size={16} />
            عرض شراكة استثمارية
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-4xl">
            إنشاء وتشغيل المتجر الإلكتروني
            <span className="block text-violet-700 dark:text-violet-300">لمتاجر بيوتن beau10</span>
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            تعتمد هذه الشراكة على مبدأ: «لا يوجد التزام مالي مباشر على الملاك إلا من نتائج فعلية، ويتحقق العائد للطرفين من نجاح المشروع».
          </p>
        </header>

        <div className="grid gap-5">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>

        <footer className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">مبدأ الاتفاق</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-200">
            شراكة تشغيلية تقوم على الأداء الفعلي، وتربط النمو في المبيعات الرقمية بعائد عادل ومستدام لجميع الأطراف.
          </p>
        </footer>
      </div>
    </div>
  );
}
