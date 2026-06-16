import React from 'react';
import { CalendarDays, Clapperboard, Flag, Wrench } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'بوست تعريفي',
    idea: 'من نحن؟',
    visualType: 'تصميم تعريفي (Branding)',
    onVisualText: 'خبرة أكثر من 25 سنة في قطع غيار السيارات الأوروبية',
    visual: 'لوقو + سيارة أوروبية فخمة + عناصر صناعية',
    caption:
      'خبرتنا ما جات من فراغ. أكثر من 25 سنة نوفر قطع غيار أصلية وبدائل موثوقة للسيارات الأوروبية. لأن سيارتك تستاهل الأفضل.',
    hashtags: '#هيكل_العربة #قطع_غيار #سيارات_أوروبية #مرسيدس #BMW'
  },
  {
    id: '2',
    title: 'بوست تثقيفي',
    idea: 'الفرق بين القطعة الأصلية والتجارية',
    visualType: 'تصميم مقارن (Split)',
    onVisualText: 'الأصلية VS التجارية - أيهما تختار؟',
    visual: 'مقارنة بصرية بين قطعتين',
    caption: 'مو كل قطعة لازم تكون أصلية. الأهم تختار المناسب لسيارتك واستخدامك. إحنا نساعدك تختار الصح.',
    hashtags: '#قطع_غيار_أصلية #صيانة_سيارات #نصائح_سيارات'
  },
  {
    id: '3',
    title: 'بوست منتج',
    idea: 'إبراز قطعة شائعة',
    visualType: 'تصميم Product Focus',
    onVisualText: 'قطعة صغيرة، تأثير كبير',
    visual: 'صورة قطعة + اسمها + نوع السيارات',
    caption: 'بعض الأعطال تبدأ من قطعة بسيطة. تأكد إنك تستخدم القطعة المناسبة لسيارتك.',
    hashtags: '#قطع_سيارات #صيانة #سيارات_فاخرة'
  },
  {
    id: '4',
    title: 'بوست مشكلة/حل',
    idea: 'أعراض تلف قطعة',
    visualType: 'تصميم إنفوجرافيك',
    onVisualText: 'هل سيارتك تعاني من هذا؟',
    visual: 'أيقونات أعطال + سيارة',
    caption: 'إذا لاحظت هالأعراض، غالبًا تحتاج تغيير قطعة معينة. لا تنتظر العطل يكبر.',
    hashtags: '#أعطال_سيارات #نصائح_صيانة'
  },
  {
    id: '5',
    title: 'بوست ثقة',
    idea: 'ليش تختارنا؟',
    visualType: 'تصميم Brand Value',
    onVisualText: 'ليه آلاف العملاء يثقون فينا؟',
    visual: 'أرقام + أيقونات (خبرة - تنوع - دعم)',
    caption: 'الجودة، الخبرة، والدعم الفني. كل هذا في مكان واحد.',
    hashtags: '#ثقة #متجر_سيارات #قطع_غيار'
  },
  {
    id: '6',
    title: 'بوست تعليمي',
    idea: 'كيف تختار القطعة المناسبة؟',
    visualType: 'تصميم خطوات',
    onVisualText: '3 خطوات قبل شراء أي قطعة',
    visual: 'Step 1 - Step 2 - Step 3',
    caption: 'لا تشتري قبل ما تتأكد. خطوات بسيطة توفر عليك وقت وفلوس.',
    hashtags: '#تعليم_سيارات #قطع_غيار'
  },
  {
    id: '7',
    title: 'بوست سيارة محددة',
    idea: 'قطع BMW / Mercedes',
    visualType: 'تصميم مخصص لماركة',
    onVisualText: 'قطع BMW بثقة',
    visual: 'سيارة + قطع',
    caption: 'نوفر قطع مخصصة لسيارات BMW بجودة عالية.',
    hashtags: '#BMW #مرسيدس #سيارات_ألمانية'
  },
  {
    id: '8',
    title: 'بوست توعوي',
    idea: 'أخطاء شائعة',
    visualType: 'تصميم تحذيري',
    onVisualText: 'خطأ شائع يكلفك كثير',
    visual: 'علامة تحذير + سيارة',
    caption: 'اختيار قطعة غير مناسبة قد يسبب أعطال أكبر. اسأل قبل ما تشتري.',
    hashtags: '#أخطاء_صيانة #نصائح'
  },
  {
    id: '9',
    title: 'بوست عرض (مسودة يجب تعديلها بعرض حقيقي)',
    idea: 'تنبيه عروض',
    visualType: 'تصميم Promo',
    onVisualText: 'عروض لفترة محدودة',
    visual: 'ألوان قوية + خصم',
    caption: 'لا تفوت العروض. تابعنا عشان توصلك أولًا.',
    hashtags: '#عروض #خصومات #قطع_غيار'
  },
  {
    id: '10',
    title: 'بوست دعم فني',
    idea: 'الاستشارة قبل الشراء',
    visualType: 'تصميم تفاعلي',
    onVisualText: 'محتار؟ اسألنا',
    visual: 'واتساب / شات',
    caption: 'فريقنا جاهز يساعدك تختار القطعة المناسبة.',
    hashtags: '#دعم_فني #استشارة'
  },
  {
    id: '11',
    title: 'بوست صيانة',
    idea: 'أهمية الصيانة الدورية',
    visualType: 'تصميم توعوي',
    onVisualText: 'الصيانة = عمر أطول لسيارتك',
    visual: 'سيارة + أدوات',
    caption: 'الصيانة الدورية توفر عليك الكثير مستقبلًا.',
    hashtags: '#صيانة_دورية #سيارات'
  },
  {
    id: '12',
    title: 'بوست CTA',
    idea: 'زيارة الموقع',
    visualType: 'تصميم Call To Action',
    onVisualText: 'اطلب الآن',
    visual: 'الموقع + سيارات',
    caption: 'كل قطع الغيار في مكان واحد. الرابط في البايو.',
    hashtags: '#تسوق_أونلاين #قطع_سيارات'
  }
];

const reels = [
  {
    id: '1',
    title: 'Reel 1',
    idea: 'نصائح سريعة',
    visualType: 'Motion + نص',
    onVisualText: '3 أشياء تأكد منها قبل شراء أي قطعة',
    visual: 'خلفية سيارات + نص متحرك',
    caption: 'وفر على نفسك مشاكل مستقبلية.',
    hashtags: '#نصائح_سيارات #ريلز'
  },
  {
    id: '2',
    title: 'Reel 2',
    idea: 'مشكلة/حل',
    visualType: 'سلايد نصي',
    onVisualText: 'سيارتك تستهلك بنزين أكثر؟',
    visual: 'أيقونات + نص',
    caption: 'أحيانًا السبب قطعة بسيطة.',
    hashtags: '#أعطال #سيارات'
  },
  {
    id: '3',
    title: 'Reel 3',
    idea: 'ثقة وخبرة',
    visualType: 'Motion Branding',
    onVisualText: '25 سنة خبرة',
    visual: 'Timeline بسيط',
    caption: 'خبرة طويلة = قرارات صحيحة.',
    hashtags: '#خبرة #قطع_غيار'
  },
  {
    id: '4',
    title: 'Reel 4',
    idea: 'CTA',
    visualType: 'نص متحرك',
    onVisualText: 'لا تخاطر، اسألنا',
    visual: 'واتساب + سيارة',
    caption: 'تواصل معنا قبل الشراء.',
    hashtags: '#دعم_فني #سيارات'
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

export default function hikalgo() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-l from-slate-900 to-slate-700 p-8 text-white shadow-xl">
          <p className="text-sm font-medium text-slate-200">خطة المحتوى</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Hikalaraba</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 sm:text-base">
            صفحة مخصصة لخطة المحتوى الشهرية تشمل 12 بوست تصميم و4 ريلز، مع تنظيم واضح للأفكار، الرسائل، والنصوص
            المقترحة للنشر.
          </p>
        </header>

        <Section title="أولًا: البوستات (12 بوست - تصاميم)" icon={CalendarDays}>
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <p className="mb-2 inline-flex rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-slate-700">بوست {post.id}</p>
                <h3 className="text-base font-bold">{post.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">الفكرة:</span> {post.idea}</li>
                  <li><span className="font-semibold">نوع المادة المرئية:</span> {post.visualType}</li>
                  <li><span className="font-semibold">النص على المادة:</span> {post.onVisualText}</li>
                  <li><span className="font-semibold">المرئية:</span> {post.visual}</li>
                  <li><span className="font-semibold">الكابشن:</span> {post.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {post.hashtags}</li>
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="ثانيًا: الريلز" icon={Clapperboard}>
          <div className="grid gap-4 md:grid-cols-2">
            {reels.map((reel) => (
              <article key={reel.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <h3 className="text-base font-bold">{reel.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  <li><span className="font-semibold">الفكرة:</span> {reel.idea}</li>
                  <li><span className="font-semibold">نوع المادة المرئية:</span> {reel.visualType}</li>
                  <li><span className="font-semibold">النص على المادة:</span> {reel.onVisualText}</li>
                  <li><span className="font-semibold">المرئية:</span> {reel.visual}</li>
                  <li><span className="font-semibold">الكابشن:</span> {reel.caption}</li>
                  <li><span className="font-semibold">الهاشتاجز:</span> {reel.hashtags}</li>
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="ملاحظة تنفيذية" icon={Flag}>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
            بوست العروض في هذه النسخة هو مسودة ويجب استبداله بعرض حقيقي قبل النشر. بقية المحتوى جاهز للاستخدام ضمن خطة
            شهرية متكاملة.
          </p>
        </Section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <Wrench className="mx-auto mb-3 text-emerald-600 dark:text-emerald-300" />
          <h2 className="text-xl font-bold">Slug: hikalgo</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">يمكن الوصول إلى الصفحة عبر الرابط /hikalgo</p>
        </section>
      </div>
    </div>
  );
}
