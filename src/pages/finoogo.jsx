import React from 'react';
import { CalendarDays, Clapperboard, Flag, Megaphone, ShieldCheck } from 'lucide-react';

const strategyGoals = [
  'تعريف البراند: من هو فينو وما الذي يميزه.',
  'بناء ثقة وشهية لدى الجمهور بدون ضغط بيع مباشر.',
  'تعويد خوارزميات المنصات على نشاط الحساب بشكل منتظم.'
];

const strategyNote = 'لا نبدأ بعروض مباشرة أو دعوات شراء في أول يوم، بل نبدأ ببناء القصة والإحساس والهوية والطعم.';

const posts = [
  {
    id: '1',
    idea: 'إطلاق الحساب',
    visual: 'تصميم براند مع الشعار',
    visualText: 'وصلنا إنستقرام',
    caption: 'أهلًا فيكم. هنا حساب فينو الرسمي. طعم مختلف، بوكسات تشبع، وتجربة تستاهل التجربة. تابعونا، الجاي أحلى.',
    hashtags: '#فينو #مطاعم_الرياض #برجر',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '2',
    idea: 'تعريف مختصر بالبراند',
    visual: 'تصميم تايبوجرافي بألوان الهوية',
    visualText: 'فينو مو وجبة، فينو مزاج',
    caption: 'نحب البساطة، ونبدع بالطعم. وش أول شيء حاب تجربه من منيو فينو؟',
    hashtags: '#فينو #مطاعم #برجر_الرياض',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '3',
    idea: 'إبراز فكرة البوكسات',
    visual: 'تصميم منتجات',
    visualText: 'بوكس واحد، رضا كامل',
    caption: 'بوكسات فينو تساوي وجبة متكاملة: ساندويتش + بطاطس + صوص. جاهز تختار؟',
    hashtags: '#بوكس #مطاعم_الرياض #فينو',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '4',
    idea: 'سيجنتشر برجر',
    visual: 'تصميم منتج مع لقطة قريبة',
    visualText: 'السيجنتشر اللي الكل يتكلم عنه',
    caption: 'هذا مو برجر عادي، هذا سيجنتشر فينو. تجربة وحدة كفيلة تقنعك.',
    hashtags: '#سيجنتشر #برجر #فينو',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '5',
    idea: 'دجاج كرسبي',
    visual: 'تصميم دايناميك',
    visualText: 'قرمشة تسمع قبل ما تنأكل',
    caption: 'إذا تحب الكرسبي، بوكس دجاج فينو خيارك.',
    hashtags: '#دجاج_كرسبي #فينو #مطاعم',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '6',
    idea: 'خيارات التوصيل والاستلام',
    visual: 'تصميم أيقونات مع نص واضح',
    visualText: 'اطلب بطريقتك',
    caption: 'تبي توصيل؟ تبي استلام سريع؟ فينو معك بكل الطرق.',
    hashtags: '#توصيل #مطاعم_الرياض #فينو',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '7',
    idea: 'البطاطس',
    visual: 'تصميم قريب للمنتج',
    visualText: 'بطاطس ما تنمل',
    caption: 'فينو فرايز بسيطة لكن مميزة. وش صوصك المفضل؟',
    hashtags: '#بطاطس #فينو #مطاعم',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '8',
    idea: 'الصوصات',
    visual: 'تصميم مقارن',
    visualText: 'العركة دايم على الصوص',
    caption: 'فينو العادي ولا فينو الحار؟ صوت بالكومنت.',
    hashtags: '#صوص #فينو #مطاعم_الرياض',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '9',
    idea: 'الساندوتشات',
    visual: 'تصميم عرض منتجات',
    visualText: 'كل مزاج وله ساندوتشه',
    caption: 'برجر، فاهيتا، فيلي ستيك. وش تختار اليوم؟',
    hashtags: '#ساندوتش #فينو #برجر',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '10',
    idea: 'جودة المكونات',
    visual: 'تصميم Minimal',
    visualText: 'نختار المكونات بعناية',
    caption: 'من الخبز للصوص، التفاصيل تفرق عندنا.',
    hashtags: '#جودة #مطاعم_الرياض #فينو',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '11',
    idea: 'تجربة العميل',
    visual: 'Quote Design',
    visualText: 'أول مرة، مو الأخيرة',
    caption: 'كذا يقولون اللي جربوا فينو. وأنت؟',
    hashtags: '#تجربة #فينو #مطاعم',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: '12',
    idea: 'دعوة للزيارة',
    visual: 'تصميم ختامي',
    visualText: 'نستناك في فرعنا بالرياض',
    caption: 'زورنا أو اطلب الآن، فينو قريب منك دائمًا.',
    hashtags: '#مطاعم_الرياض #فينو #برجر',
    platform: 'إنستقرام + تيكتوك'
  }
];

const reels = [
  {
    id: 'ريل 1',
    idea: 'تعريف البراند',
    visual: 'موشن تايبوجرافي',
    visualText: 'فينو، طعم له شخصية',
    caption: 'لسه ما تعرف فينو؟ خلك معنا.',
    hashtags: '#فينو #مطاعم_الرياض',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: 'ريل 2',
    idea: 'البوكسات',
    visual: 'مونتاج صور مع موشن',
    visualText: 'بوكس واحد يكفي',
    caption: 'اختصار الحيرة. بوكس فينو جاهز.',
    hashtags: '#بوكس #فينو #برجر',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: 'ريل 3',
    idea: 'المقارنة بين الحار والعادي',
    visual: 'AI أو موشن',
    visualText: 'حار أو عادي',
    caption: 'وش اختيارك؟ اكتب بالكومنت.',
    hashtags: '#فينو #صوص #مطاعم',
    platform: 'إنستقرام + تيكتوك'
  },
  {
    id: 'ريل 4',
    idea: 'الموقع والخدمة',
    visual: 'موشن أيقونات',
    visualText: 'فرعنا بالرياض + توصيل',
    caption: 'وين ما كنت، فينو يوصلك.',
    hashtags: '#مطاعم_الرياض #فينو',
    platform: 'إنستقرام + تيكتوك'
  }
];

function SectionCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          <Icon size={20} />
        </span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function finoogo() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-l from-slate-900 to-slate-700 p-8 text-white shadow-xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-200">خطة المحتوى التسويقي</p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">مطعم فينو - Finoo</h1>
            </div>
            <img
              src="https://play-lh.googleusercontent.com/4X9O8KHmcimP-mIsw78reGSJPG0RnZrpQkImx-MZK_7po_M0-n-_JLjboB_-lchoFg"
              alt="شعار فينو"
              className="h-20 w-20 rounded-2xl border border-white/30 bg-white/10 object-cover p-1"
              loading="lazy"
            />
          </div>
          <p className="max-w-3xl text-sm leading-7 text-slate-100 sm:text-base">
            هذه الصفحة تعرض خطة محتوى متكاملة للشهر الأول، بهدف بناء حضور رقمي قوي وتعريف الجمهور بالعلامة التجارية
            وتقديم تجربة محتوى منظمة تعكس هوية مطعم فينو.
          </p>
        </header>

        <SectionCard title="استراتيجية المحتوى للحسابات الجديدة (أول شهر)" icon={Flag}>
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">الأهداف الأساسية</h3>
          <ul className="mb-4 list-disc space-y-2 pr-5 text-sm leading-7 text-slate-700 dark:text-slate-200">
            {strategyGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-300/70 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
            {strategyNote}
          </div>
        </SectionCard>

        <SectionCard title="خطة 12 بوست تصميم" icon={CalendarDays}>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="mb-2 inline-flex rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-slate-700">بوست {post.id}</p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">الفكرة: {post.idea}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">نمط المادة المرئية:</span> {post.visual}</li>
                  <li><span className="font-semibold">النص على المادة المرئية:</span> {post.visualText}</li>
                  <li><span className="font-semibold">الكابشن:</span> {post.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {post.hashtags}</li>
                  <li><span className="font-semibold">منصة النشر:</span> {post.platform}</li>
                </ul>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="خطة 4 ريل" icon={Clapperboard}>
          <div className="grid gap-4 md:grid-cols-2">
            {reels.map((reel) => (
              <article key={reel.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{reel.id}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">الفكرة:</span> {reel.idea}</li>
                  <li><span className="font-semibold">نمط المادة المرئية:</span> {reel.visual}</li>
                  <li><span className="font-semibold">النص على المادة المرئية:</span> {reel.visualText}</li>
                  <li><span className="font-semibold">الكابشن:</span> {reel.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {reel.hashtags}</li>
                  <li><span className="font-semibold">منصة النشر:</span> {reel.platform}</li>
                </ul>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="ملخص التوجيه التنفيذي" icon={ShieldCheck}>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
            الأولوية في هذا الشهر هي بناء هوية فينو بصريًا ونصيًا، ثم تنشيط التفاعل التدريجي مع الجمهور عبر محتوى متنوع
            ومتزن بين التعريف بالمنتجات، تجربة العميل، وسهولة الطلب. يتم التركيز على الاستمرارية والجودة في الطرح قبل
            الانتقال إلى حملات البيع المباشر.
          </p>
        </SectionCard>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <Megaphone className="mx-auto mb-3 text-emerald-600 dark:text-emerald-300" />
          <h2 className="text-xl font-bold">الاسم المعتمد للصفحة: finoo</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">يمكن الوصول لهذه الصفحة عبر الرابط /finoogo</p>
        </section>
      </div>
    </div>
  );
}
