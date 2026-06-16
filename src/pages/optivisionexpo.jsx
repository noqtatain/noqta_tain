const goals = [
  {
    title: 'زيادة عدد العارضين الدوليين',
    description: 'استقطاب شركات عالمية جديدة لعرض منتجاتها في المعرض.',
  },
  {
    title: 'زيادة عدد الزوار المتخصصين',
    description: 'استهداف أطباء العيون، أخصائيي البصريات، أصحاب المتاجر، والمستثمرين.',
  },
  {
    title: 'تعزيز مكانة OptiVision كمنصة إقليمية',
    description: 'ترسيخ المعرض كحدث مرجعي لقطاع البصريات في الشرق الأوسط.',
  },
  {
    title: 'توليد فرص تجارية',
    description: 'دعم الشراكات، صفقات التوزيع، وتوسع الشركات في السوق الخليجي.',
  },
];

const audience = [
  {
    title: 'الشركات المصنعة',
    items: ['شركات النظارات', 'شركات العدسات', 'شركات الأجهزة الطبية'],
  },
  {
    title: 'المهنيون',
    items: ['Ophthalmologists', 'Optometrists', 'Opticians'],
  },
  {
    title: 'التجار والموزعون',
    items: ['متاجر النظارات', 'شركات التوزيع'],
  },
  {
    title: 'المستثمرون',
    items: ['المستثمرون في القطاع الطبي', 'شركات الرعاية الصحية'],
  },
];

const digitalMarketing = [
  {
    title: 'SEO',
    body: 'تحسين الموقع ليظهر في نتائج البحث العالمية مع استهداف كلمات قطاع البصريات.',
    points: [
      'Optical exhibition Middle East',
      'Optometry conference Saudi Arabia',
      'Eyewear trade show GCC',
      'Optical industry event Saudi',
    ],
    goal: 'رفع الزيارات العضوية بنسبة 200٪.',
  },
  {
    title: 'LinkedIn Marketing',
    body: 'تنفيذ حملات B2B موجهة لاستقطاب صناع القرار في شركات البصريات العالمية.',
    points: ['CEOs', 'Sales Directors', 'Optical Distributors'],
    goal: 'رفع جودة leads للعارضين والشركاء المحتملين.',
  },
  {
    title: 'Paid Campaigns',
    body: 'إدارة حملات إعلانية عبر Google Ads وLinkedIn Ads وMeta Ads.',
    points: ['جذب العارضين', 'جذب الزوار المتخصصين'],
    goal: 'زيادة التسجيلات قبل المعرض وخلال فترة الترويج.',
  },
];

const OptivisionExpo = () => {
  return (
    <main className="bg-slate-50 py-14" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4">
        <section className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold tracking-wide text-indigo-700">العرض التسويقي الفني</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Marketing Technical Proposal</h1>
          <p className="mt-2 text-xl font-semibold text-indigo-700">OptiVision Expo</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            OptiVision هو أكبر معرض متخصص في البصريات وطب العيون في الشرق الأوسط، ويهدف إلى جمع المصنعين
            والموزعين والمتخصصين ضمن منصة واحدة لعرض الابتكار وبناء الشراكات التجارية.
          </p>

          <div className="mt-8 grid gap-4 rounded-xl bg-indigo-50 p-6 md:grid-cols-3">
            <article>
              <p className="text-sm text-slate-500">الوصول المستهدف</p>
              <p className="mt-1 text-lg font-bold text-slate-900">+2000 متجر بصريات</p>
            </article>
            <article>
              <p className="text-sm text-slate-500">شبكة المتخصصين</p>
              <p className="mt-1 text-lg font-bold text-slate-900">+6000 متخصص في العيون</p>
            </article>
            <article>
              <p className="text-sm text-slate-500">قيمة السوق السعودي</p>
              <p className="mt-1 text-lg font-bold text-slate-900">2.2 مليار دولار</p>
            </article>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">أهداف الاستراتيجية التسويقية</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {goals.map((goal) => (
              <article key={goal.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{goal.title}</h3>
                <p className="mt-2 text-slate-600">{goal.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">تحليل السوق</h2>
            <p className="mt-4 leading-8 text-slate-600">
              قطاع البصريات في السعودية يشهد نمواً سريعاً بسبب زيادة استخدام الأجهزة الرقمية وارتفاع الوعي بصحة
              العين، إضافةً إلى توسع القطاع الصحي ضمن رؤية 2030.
            </p>
            <div className="mt-5 rounded-xl bg-slate-100 p-4 text-slate-700">
              من <span className="font-bold">3.4 مليار ريال</span> إلى أكثر من{' '}
              <span className="font-bold">4.8 مليار ريال</span> بحلول 2033.
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">الجمهور المستهدف</h2>
            <div className="mt-4 space-y-4">
              {audience.map((segment) => (
                <div key={segment.title}>
                  <h3 className="text-base font-semibold text-slate-900">{segment.title}</h3>
                  <ul className="mt-2 list-disc space-y-1 pr-5 text-slate-600">
                    {segment.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-bold text-slate-900">الاستراتيجية التسويقية</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {digitalMarketing.map((channel) => (
              <article key={channel.title} className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{channel.title}</h3>
                <p className="mt-2 text-slate-600">{channel.body}</p>
                <ul className="mt-3 list-disc space-y-1 pr-5 text-sm text-slate-600">
                  {channel.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold text-indigo-700">الهدف: {channel.goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-900 p-8 text-white shadow-sm md:p-12">
          <h2 className="text-2xl font-bold">استراتيجية المحتوى</h2>
          <p className="mt-4 leading-8 text-slate-200">
            إنشاء محتوى متخصص في مجال البصريات يتضمن مقالات علمية، تقارير سوق، مقابلات مع خبراء، وأخبار الابتكار في
            العدسات. كما يمكن دعم مجلة OptiVision لتخدم مجتمع البصريات في السعودية.
          </p>
        </section>
      </div>
    </main>
  );
};

export default OptivisionExpo;
