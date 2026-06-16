import React, { useState } from 'react';
import { Target, LineChart, Globe, Megaphone, BadgePercent, Handshake, BarChart3, Wallet, MonitorSmartphone, ChevronDown, ChevronUp } from 'lucide-react';

const currentBusiness = [
  'طبيعة النشاط: خدمات نقل وتأجير الحافلات (VIP – جماعي – الشركات – المدارس – الجامعات – السياحي).',
  'الواقع الرقمي: الموقع موجود لكنه بسيط جدًا ولا يبرز عروضًا أو قيمًا مضافة واضحة.',
  'المبيعات الحالية: تعتمد على التواصل المباشر عبر واتساب والهاتف، دون منظومة رقمية قوية أو تسويق منظّم.',
  'فرصة النمو: السوق السعودي يشهد نشاطًا كبيرًا في النقل بين المدن، وخدمات الشركات، والرحلات السياحية، وبناء حضور رقمي قوي يرفع المبيعات بشكل ملحوظ.'
];

const strategyGoals = [
  'زيادة الوعي بالعلامة التجارية داخل المملكة (الرياض، جدة، الدمام، وغيرها).',
  'تحسين التواجد الرقمي الرسمي: الموقع، الحسابات، ومحركات البحث.',
  'زيادة الطلبات والحجوزات الرقمية عبر الموقع وتطبيقات التواصل.',
  'تحويل العملاء المهتمين إلى عملاء دائمين عبر عروض وخدمات مخصصة.'
];

const digitalTransformation = [
  'عرض الخدمات بوضوح مع نماذج طلب أسعار.',
  'صفحة أسطول بصور احترافية لكل نوع حافلة.',
  'قسم الأسعار والمسارات النموذجية (مثل: الرياض – الطائف – المدينة).',
  'صفحة آراء العملاء الموثقة.',
  'تحسين SEO بكلمات مستهدفة مثل: تأجير حافلات VIP، نقل بين المدن، نقل شركات، نقل مدارس في السعودية.',
  'محتوى مدونة دوري حول السفر الآمن، أنواع الحافلات، ومتطلبات نقل الشركات.'
];

const socialMediaContent = [
  'فيديو قصير لجولة داخل حافلة VIP.',
  'شهادات عملاء بصيغة فيديو أو صوت.',
  'منشورات توعوية عن اختيار الحافلة المناسبة للرحلة.',
  'عروض شهرية مرتبطة بالمناسبات والعطل.'
];

const paidMarketing = [
  'حملات فيسبوك وإنستغرام بهدف توليد العملاء المحتملين (طلب سعر / تواصل واتساب).',
  'استهداف سكان المدن الكبرى في السعودية، مع شرائح الشركات والمؤسسات.',
  'حملات Google Search Ads لكلمات بحث شرائية مباشرة.',
  'مؤشرات القياس: تكلفة الاكتساب (CPA)، معدل التحويل، والعائد على الاستثمار (ROI).'
];

const offers = {
  companies: [
    'عقود شهرية وسنوية مع خصم للدفعات المبكرة.',
    'حلول نقل موظفين بتسعيرات تنافسية.'
  ],
  tourism: [
    'باقات يوم كامل مع توثيق صور وفيديو.',
    'تعاون مع منظمي الرحلات لزيادة الحجوزات.'
  ],
  education: [
    'حافلات مع إشراف ومرافقين.',
    'تقارير أمان وسلامة دورية للجهات التعليمية.'
  ]
};

const partnerships = [
  'منظمو الرحلات والسياحة.',
  'شركات الفعاليات والمؤتمرات.',
  'المدارس والجامعات.',
  'شركات التوظيف لتأمين نقل العمال.'
];

const kpiRows = [
  { metric: 'زيارات الموقع شهريًا', target: '+3000 زيارة خلال 6 أشهر' },
  { metric: 'طلبات الأسعار', target: '+100 طلب شهريًا' },
  { metric: 'التحويلات عبر واتساب', target: 'زيادة 30%' },
  { metric: 'تفاعل حسابات التواصل', target: '+20% شهريًا' }
];

const baseWhatsapp = 'https://wa.me/966543569492';
const baseEmail = 'mailto:info@noqtatain.com';

const packageCards = [
  {
    title: 'باقة التأسيس الرقمي',
    price: '5,500 ريال شهريًا',
    goal: 'بناء حضور رقمي رسمي واحترافي يعزز الثقة ويبدأ في توليد الاستفسارات.',
    items: [
      'تطوير وتحسين الموقع الحالي.',
      'إنشاء نموذج طلب عرض سعر.',
      'تحسين SEO داخلي أساسي.',
      'إدارة حسابي Instagram وFacebook.',
      '12 منشورًا شهريًا (تصميم + كتابة محتوى).',
      '4 فيديوهات قصيرة شهريًا.',
      'إعداد وتحسين Google Business.',
      'توحيد الهوية البصرية.',
      'تقرير أداء شهري.'
    ],
    fit: 'مناسبة للشركات التي ترغب ببداية احترافية دون استثمار إعلاني كبير.'
  },
  {
    title: 'باقة النمو والمبيعات',
    price: '10,000 ريال شهريًا (لا يشمل ميزانية الإعلانات)',
    goal: 'تحويل المنصات الرقمية إلى مصدر مبيعات مباشر.',
    items: [
      'تشمل جميع عناصر باقة التأسيس.',
      'إدارة حملات Meta Ads.',
      'إدارة حملات Google Search Ads.',
      'إعداد Funnel مبيعات.',
      'تحسين وتحليل مستمر للإعلانات.',
      '16 منشورًا شهريًا.',
      '8 فيديوهات قصيرة.',
      'سكريبتات ردود احترافية للواتساب.',
      'تقارير أداء تفصيلية شهرية.'
    ],
    fit: 'مناسبة للشركات التي ترغب بمضاعفة عدد الطلبات وزيادة الحجوزات بوضوح.',
    note: 'مدة التعاقد لا تقل عن 3 أشهر لضمان نتائج ملموسة.'
  }
];

const redesignItems = [
  'تصميم احترافي حديث متجاوب 100% مع هوية بصرية متكاملة.',
  'هيكلة صفحات احترافية: الرئيسية، الأسطول، الخدمات، طلب عرض سعر، من نحن.',
  'تحسين SEO تقني ومحتوى متوافق مع الكلمات المفتاحية.',
  'ربط Google Analytics وGoogle Search Console.',
  'عناصر تحويل: زر واتساب ثابت، أزرار اتصال فوري، شهادات عملاء، وتتبع التحويلات.'
];

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function SectionToggle({ title, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white px-5 py-4 text-right transition hover:bg-slate-100"
      aria-expanded={isOpen}
    >
      <span className="text-xl font-semibold text-slate-900">{title}</span>
      {isOpen ? <ChevronUp className="h-5 w-5 text-slate-700" /> : <ChevronDown className="h-5 w-5 text-slate-700" />}
    </button>
  );
}

export default function MedhalJazeera() {
  const [isTechnicalOpen, setIsTechnicalOpen] = useState(true);
  const [isFinancialOpen, setIsFinancialOpen] = useState(true);

  const buildLinks = (packageName) => {
    const benefitText = `أرغب باختيار ${packageName} من العرض التسويقي الخاص بشركة مدهال الجزيرة. الرجاء تزويدي بخطوات البدء.`;
    return {
      whatsapp: `${baseWhatsapp}?text=${encodeURIComponent(benefitText)}`,
      email: `${baseEmail}?subject=${encodeURIComponent(`اختيار ${packageName}`)}&body=${encodeURIComponent(benefitText)}`
    };
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-slate-900 p-8 text-white">
          <p className="text-sm text-slate-300">تصوّر استراتيجي وتسويقي</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">مشروع التسويق لصالح شركة مدهال الجزيرة</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-200">
            هذا التصور يقدّم خارطة عمل متكاملة خلال 6 إلى 12 شهرًا، تشمل التطوير الرقمي، التسويق بالمحتوى، الإعلانات المدفوعة،
            ونظام عروض يساعد على رفع الطلبات وتحويل القنوات الرقمية إلى مصدر مبيعات ثابت.
          </p>
        </header>

        <section className="space-y-4">
          <SectionToggle
            title="القسم الفني"
            isOpen={isTechnicalOpen}
            onToggle={() => setIsTechnicalOpen((prev) => !prev)}
          />

          {isTechnicalOpen && (
            <div className="space-y-8">
              <section className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">1. فهم النشاط الحالي</h2>
                  </div>
                  <ul className="space-y-2 pr-5 text-sm leading-7 list-disc">
                    {currentBusiness.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">2. أهداف استراتيجية التسويق (6–12 شهر)</h2>
                  </div>
                  <ul className="space-y-2 pr-5 text-sm leading-7 list-disc">
                    {strategyGoals.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">3. التحول الرقمي</h2>
                  </div>
                  <ul className="space-y-2 pr-5 text-sm leading-7 list-disc">
                    {digitalTransformation.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <Megaphone className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">4. الحضور على منصات التواصل</h2>
                  </div>
                  <p className="text-sm leading-7">المنصات الأساسية: إنستغرام، تيك توك، فيسبوك.</p>
                  <ul className="mt-3 space-y-2 pr-5 text-sm leading-7 list-disc">
                    {socialMediaContent.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <BadgePercent className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">5. التسويق المدفوع</h2>
                  </div>
                  <ul className="space-y-2 pr-5 text-sm leading-7 list-disc">
                    {paidMarketing.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">6. العروض والباقات التسويقية</h2>
                  </div>
                  <div className="space-y-3 text-sm leading-7">
                    <p className="font-semibold">شركات وأعمال</p>
                    <ul className="pr-5 list-disc">
                      {offers.companies.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="font-semibold">رحلات سياحية</p>
                    <ul className="pr-5 list-disc">
                      {offers.tourism.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="font-semibold">مدارس وجامعات</p>
                    <ul className="pr-5 list-disc">
                      {offers.education.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="text-xs text-slate-500">كل عرض يتضمن دعوة واضحة: احصل على عرض سعر الآن عبر واتساب.</p>
                  </div>
                </Card>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">7. شراكات استراتيجية</h2>
                  </div>
                  <ul className="space-y-2 pr-5 text-sm leading-7 list-disc">
                    {partnerships.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <div className="mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-slate-700" />
                    <h2 className="text-xl font-semibold">8. قياس الأداء KPI</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="py-2 font-semibold">المعيار</th>
                          <th className="py-2 font-semibold">الهدف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kpiRows.map((row) => (
                          <tr key={row.metric} className="border-b border-slate-100">
                            <td className="py-2">{row.metric}</td>
                            <td className="py-2">{row.target}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </section>

              <Card>
                <h2 className="text-2xl font-semibold">خلاصة التصوّر الاستراتيجي</h2>
                <ul className="mt-4 space-y-2 pr-5 text-sm leading-7 list-disc">
                  <li>بناء حضور رقمي محترف يعزز الثقة.</li>
                  <li>الحملات المدفوعة تسهم في زيادة الطلبات.</li>
                  <li>تنويع العروض يوسع قنوات الإيرادات.</li>
                  <li>قياس الأداء يضمن التحسين المستمر.</li>
                </ul>
              </Card>
            </div>
          )}
        </section>

        <section className="space-y-4">
          <SectionToggle
            title="القسم المالي"
            isOpen={isFinancialOpen}
            onToggle={() => setIsFinancialOpen((prev) => !prev)}
          />

          {isFinancialOpen && (
            <div className="space-y-8">
              <section>
                <div className="mb-5 flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-slate-700" />
                  <h2 className="text-2xl font-semibold">القسم الأول: الباقات التسويقية المقترحة</h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {packageCards.map((pack) => {
                    const links = buildLinks(pack.title);
                    return (
                      <Card key={pack.title} className="flex h-full flex-col">
                        <h3 className="text-xl font-semibold">{pack.title}</h3>
                        <p className="mt-2 text-lg font-bold text-slate-800">{pack.price}</p>
                        <p className="mt-3 text-sm leading-7">{pack.goal}</p>
                        <ul className="mt-4 flex-1 space-y-2 pr-5 text-sm leading-7 list-disc">
                          {pack.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className="mt-3 text-sm text-slate-600">{pack.fit}</p>
                        {pack.note && <p className="mt-2 text-xs text-slate-500">{pack.note}</p>}
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <a
                            href={links.whatsapp}
                            className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                          >
                            اختيار الباقة عبر واتساب
                          </a>
                          <a
                            href={links.email}
                            className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                          >
                            اختيار الباقة عبر الإيميل
                          </a>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-center gap-2">
                  <MonitorSmartphone className="h-5 w-5 text-slate-700" />
                  <h2 className="text-2xl font-semibold">القسم الثاني: إعادة تصميم الموقع وتطويره</h2>
                </div>
                <Card>
                  <p className="text-sm leading-7">
                    الهدف من إعادة التصميم هو تحويل الموقع من واجهة تعريفية بسيطة إلى منصة تسويقية تولّد طلبات مباشرة، مع تحسين الثقة،
                    وتسريع تجربة المستخدم، ورفع الظهور في نتائج البحث.
                  </p>

                  <div className="mt-5 grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold">الوضع الحالي</h3>
                      <ul className="mt-3 space-y-2 pr-5 text-sm leading-7 list-disc">
                        <li>تصميم بسيط غير مهيأ للتحويلات.</li>
                        <li>غياب دعوات واضحة لاتخاذ إجراء.</li>
                        <li>ضعف عرض الأسطول والخدمات.</li>
                        <li>غياب نظام تتبع وتحسين SEO متقدم.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">المقترح الجديد Website 2.0</h3>
                      <ul className="mt-3 space-y-2 pr-5 text-sm leading-7 list-disc">
                        {redesignItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-4">
                    <h4 className="text-lg font-semibold">النتيجة المتوقعة</h4>
                    <ul className="mt-3 space-y-2 pr-5 text-sm leading-7 list-disc">
                      <li>رفع معدل التحويل بنسبة 30% إلى 50%.</li>
                      <li>زيادة طلبات عرض السعر بشكل مباشر.</li>
                      <li>تعزيز الثقة عند التعاقد مع الشركات.</li>
                      <li>تقليل الاعتماد على الاجتهادات الشخصية.</li>
                    </ul>
                  </div>

                  <div className="mt-6 grid gap-4 rounded-2xl border border-slate-300 bg-white p-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-slate-500">الاستثمار</p>
                      <p className="mt-1 text-2xl font-bold">15,000 ريال</p>
                      <p className="mt-2 text-sm leading-7">يشمل: التصميم، البرمجة، المحتوى، تحسين SEO الأساسي، التدريب، ودعم فني 30 يوم بعد الإطلاق.</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">مدة التنفيذ</p>
                      <p className="mt-1 text-lg font-semibold">من 3 إلى 5 أسابيع</p>
                      <p className="mt-2 text-sm leading-7">بحسب سرعة توفير المحتوى والصور من طرف العميل.</p>
                    </div>
                  </div>
                </Card>
              </section>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
