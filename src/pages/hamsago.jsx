import React from 'react';
import { CalendarDays, Clapperboard, Flag, MessageSquareText } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'بوست ترحيبي (إعادة الإطلاق)',
    idea: 'رجعنا من جديد',
    visualType: 'تصميم ثابت (هوية + طبق شعبي)',
    visualText: 'رجعنا بطعم البيت',
    caption: 'بعد غياب، رجعنا نحمّس صباحكم. فطور شعبي، طازج، ومن القلب.',
    hashtags: '#حمسة_وتغميسة #فطور_شعبي #رجعنا'
  },
  {
    id: '2',
    title: 'بوست تعريف بالحمسات',
    idea: 'تنوّع الحمسات',
    visualType: 'تصميم كروسل (6 أصناف)',
    visualText: 'أي حمسة تبدأ فيها؟',
    caption: 'حمسة باذنجان، بامية، فاصوليا، لحم. اختيارات ترضي كل الأذواق.',
    hashtags: '#حمسات #فطور_سعودي #أكل_شعبي'
  },
  {
    id: '3',
    title: 'بوست البيض',
    idea: 'البيض بلمسة حمسة',
    visualType: 'تصميم ثابت',
    visualText: 'البيض، بس مو أي بيض',
    caption: 'من أربع أجبان إلى بيض حمسة أمي. الفطور اللي يضبط المزاج.',
    hashtags: '#بيض #فطور_صباحي #حمسة'
  },
  {
    id: '4',
    title: 'بوست الفول',
    idea: 'الفول على أصوله',
    visualType: 'تصميم ثابت',
    visualText: 'الفول أساس الفطور',
    caption: 'فول أبيض، مدخن، بقوليات. اختار فولك وخلك جاهز ليومك.',
    hashtags: '#فول #فطور_شعبي #صباح_الخير'
  },
  {
    id: '5',
    title: 'بوست التغميسات',
    idea: 'التغميس أساس الجلسة',
    visualType: 'تصميم كروسل',
    visualText: 'التغميس يحكي حكاية',
    caption: 'لبنة، زيت وزعتر، قشطة وعسل. جلسة ما تكتمل بدونها.',
    hashtags: '#تغميسة #جلسة_فطور #أكل_بيتي'
  },
  {
    id: '6',
    title: 'بوست الكبدة',
    idea: 'الكبدة الحجازية',
    visualType: 'تصميم ثابت',
    visualText: 'كبدة على أصولها',
    caption: 'حجازي، ثوم وليمون، أو ستيك. نعرف كيف نضبطها.',
    hashtags: '#كبدة #فطور_حجازي #مطاعم'
  },
  {
    id: '7',
    title: 'بوست الحمص',
    idea: 'الحمص بطرق مبتكرة',
    visualType: 'تصميم كروسل',
    visualText: 'الحمص مو بس سادة',
    caption: 'أفوكادو، شمندر، باللحمة. نحب ننوّع ونفاجئك.',
    hashtags: '#حمص #فطور_خفيف #أكل_صحي'
  },
  {
    id: '8',
    title: 'بوست المشروبات الساخنة',
    idea: 'مزاج الصباح',
    visualType: 'تصميم ثابت',
    visualText: 'قهوة، شاي، والراحة',
    caption: 'قهوة عربي، تركي، شاي حبق. اختر مزاجك.',
    hashtags: '#قهوة #شاي #صباح'
  },
  {
    id: '9',
    title: 'بوست المشروبات الباردة',
    idea: 'توازن الفطور',
    visualType: 'تصميم ثابت',
    visualText: 'انتعاش مع كل رشفة',
    caption: 'ليمون نعناع، عصير برتقال. فطور ينعش يومك.',
    hashtags: '#مشروبات #ليمون_نعناع #فطور'
  },
  {
    id: '10',
    title: 'بوست أسعار',
    idea: 'الشفافية',
    visualType: 'تصميم جدول بسيط',
    visualText: 'فطور يشبع بسعر يرضي',
    caption: 'جودة وطعم وسعر في المتناول.',
    hashtags: '#أسعار #فطور_اقتصادي #مطعم'
  },
  {
    id: '11',
    title: 'بوست سؤال تفاعلي',
    idea: 'إشراك الجمهور',
    visualType: 'تصميم سؤال',
    visualText: 'حمسة ولا فول؟',
    caption: 'نبي نعرف ذوقكم.',
    hashtags: '#تصويت #تفاعل #فطور'
  },
  {
    id: '12',
    title: 'بوست تجربة',
    idea: 'إحساس البيت',
    visualType: 'تصميم اقتباس',
    visualText: 'طعم يذكرك بالبيت',
    caption: 'نطبخها كأنها على سفرة البيت.',
    hashtags: '#أكل_بيتي #ذكريات #فطور'
  }
];

const reels = [
  {
    id: '1',
    title: 'ريل اختار فطورك',
    visual: 'صور منيو + حركة نص',
    visualText: 'وش فطورك اليوم؟',
    caption: 'كل صباح له حمسته.',
    hashtags: '#فطور_اليوم #ريلز'
  },
  {
    id: '2',
    title: 'ريل منيو سريع',
    visual: 'انتقالات بين الأصناف',
    visualText: 'منيو شعبي بطعم فاخر',
    caption: 'نظرة سريعة على اللي نطبخه بحب.',
    hashtags: '#منيو #مطاعم_السعودية'
  },
  {
    id: '3',
    title: 'ريل مزاج الصباح',
    visual: 'قهوة + فطور (تصميم)',
    visualText: 'الصباح يبدأ من هنا',
    caption: 'قهوة + حمسة = يوم مضبوط.',
    hashtags: '#صباح_الخير #فطور'
  },
  {
    id: '4',
    title: 'ريل تصويت',
    visual: 'مقارنة صنفين',
    visualText: 'بيض ولا كبدة؟',
    caption: 'جاوبنا بدون تفكير.',
    hashtags: '#تصويت #أكل'
  }
];

function Section({ title, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          <Icon size={20} />
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function hamsago() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-l from-slate-900 to-slate-700 p-8 text-white shadow-xl">
          <p className="text-sm font-medium text-slate-200">خطة محتوى</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">مطعم حمسة وتغميسة</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 sm:text-base">
            خطة محتوى شهرية متكاملة تركّز على الهوية الشعبية، تنويع الأصناف، وبناء تفاعل مستمر مع الجمهور عبر محتوى تصميمي
            وريلز قصيرة.
          </p>
        </header>

        <Section title="أولًا: 12 بوست تصاميم" icon={CalendarDays}>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="mb-2 inline-flex rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-slate-700">بوست {post.id}</p>
                <h3 className="text-base font-bold">{post.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">الفكرة:</span> {post.idea}</li>
                  <li><span className="font-semibold">نوع المادة المرئية:</span> {post.visualType}</li>
                  <li><span className="font-semibold">النص على التصميم:</span> {post.visualText}</li>
                  <li><span className="font-semibold">الكابشن:</span> {post.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {post.hashtags}</li>
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="ثانيًا: 4 ريل" icon={Clapperboard}>
          <div className="grid gap-4 md:grid-cols-2">
            {reels.map((reel) => (
              <article key={reel.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <h3 className="text-base font-bold">{reel.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">المرئي:</span> {reel.visual}</li>
                  <li><span className="font-semibold">النص على الفيديو:</span> {reel.visualText}</li>
                  <li><span className="font-semibold">الكابشن:</span> {reel.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {reel.hashtags}</li>
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="ملخص تنفيذي" icon={Flag}>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
            المحتوى المقترح يوازن بين الطابع الشعبي، وضوح المنتج، وتحفيز الجمهور على التفاعل. يتم تقديم الرسائل بشكل
            احترافي ومتدرج لضمان حضور قوي للحساب خلال الشهر الأول.
          </p>
        </Section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <MessageSquareText className="mx-auto mb-3 text-emerald-600 dark:text-emerald-300" />
          <h2 className="text-xl font-bold">Slug: hamsa-go</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">يمكن الوصول إلى الصفحة عبر الرابط /hamsa-go</p>
        </section>
      </div>
    </div>
  );
}
