import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  Target,
  Compass,
  Rocket,
  Map,
  BarChart3,
  Layers3,
  Megaphone,
  Repeat,
  LineChart,
  UsersRound,
  MonitorSmartphone,
  Gauge,
  Activity
} from 'lucide-react';
import MobileAuditShot from '@/assets/تجربة المستخدم في الجوال.png';
import DesktopAuditShot from '@/assets/تجربة المستخدم في المتصفح.png';
import SocialInsightsShot from '@/assets/تقرير التفاعل في مواقع التواصل (انستجرام).png';

const situationData = [
  {
    title: 'نظرة عامة',
    body:
      'هيكل العربة متجر متخصص في قطع غيار السيارات الأوروبية والأمريكية (OEM وبديلة) بخبرة تتجاوز 25 عاماً في السوق السعودي، يعمل بنموذج B2C وB2B من خلال فرع الرياض ومتجر إلكتروني يغطي جميع مناطق المملكة.'
  },
  {
    title: 'الأداء التسويقي الحالي',
    bullets: [
      'لا توجد حملات إعلانية نشطة حالياً.',
      'الاعتماد الأساسي على التسويق العضوي (SEO) مع نتائج جيدة نسبياً.',
      'إيقاف إعلانات Google سابقاً بسبب مشاكل تشغيلية وضعف قياس العائد.',
      'المحتوى الحالي يعتمد على تصاميم عامة بلا مسارات تحويل واضحة.'
    ]
  },
  {
    title: 'التحديات الرئيسية',
    bullets: [
      'ارتفاع السعر مقارنة بالمنافسين في السوق المفتوح.',
      'تجربة مستخدم ضعيفة نسبياً في المتجر الإلكتروني (البحث، التأكد من التوافق).',
      'غياب تتبع دقيق للتحويلات وتكلفة الاستحواذ.',
      'عدم استغلال قيمة الضمان والخبرة كعناصر تفاضلية في الرسائل.'
    ]
  },
  {
    title: 'نقاط القوة',
    bullets: [
      'خبرة طويلة قادت إلى ثقة عالية لدى العملاء.',
      'ضمان وخدمة ما بعد البيع حقيقية.',
      'تخصص في سيارات ذات قيمة عالية مثل BMW وMercedes.',
      'امتلاك قاعدة بيانات عملاء ووجود CRM فعال.'
    ]
  }
];

const marketingDirection = {
  positioning: {
    from: 'متجر يبيع قطع غيار',
    to: 'خبير قطع غيار السيارات الأوروبية والأمريكية – يضمن لك القطعة الصحيحة وراحة البال'
  },
  strategy: [
    'عدم الدخول في منافسة سعرية مباشرة.',
    'التركيز على القيمة مقابل السعر (ضمان، تقليل المخاطر، دعم فني).',
    'تحويل المحتوى إلى أداة بيع غير مباشرة.',
    'تحسين تجربة المتجر لرفع معدل التحويل قبل زيادة الزيارات.'
  ],
  messages: ['القطعة الصح من أول مرة', 'ضمانك معنا قبل وبعد الشراء', 'نساعدك تختار، مو بس نبيعك'],
  channels: ['SEO وتعزيزه بمحتوى تقني', 'Google Ads للتحويل بذكاء', 'وسائل التواصل الاجتماعي (محتوى + إعلانات)', 'البريد الإلكتروني لإعادة تنشيط العملاء', 'شراكات مع صناع محتوى سيارات']
};

const sitePreviewImages = [
  {
    label: 'تشخيص الأداء على الجوال',
    description: 'الأداء 48/100 مقابل 85 SEO و96 أفضل ممارسات و89 إمكانية وصول – عنق الزجاجة الرئيسي في سرعة العرض الأولى.',
    url: MobileAuditShot
  },
  {
    label: 'تشخيص الأداء على المتصفح المكتبي',
    description: 'الأداء يرتفع إلى 66/100 مع الحفاظ على 85 SEO و96 أفضل ممارسات و86 إمكانية وصول.',
    url: DesktopAuditShot
  },
  {
    label: 'تفاعل Instagram الحالي',
    description: '162 منشوراً خلال 13 سنة نشاط، ومتوسط تفاعل 0.32% (أقل من المتوسط) مع 3 إعجابات لكل منشور.',
    url: SocialInsightsShot
  }
];

const performanceAudit = [
  {
    device: 'الجوال',
    summary: 'تقارير PageSpeed تُظهر عنق زجاجة في الأداء (48/100) بالرغم من علامات ممتازة في المعايير الأخرى.',
    metrics: [
      { label: 'الأداء', value: '48/100' },
      { label: 'إمكانية الوصول', value: '89/100' },
      { label: 'أفضل الممارسات', value: '96/100' },
      { label: 'تحسينات محركات البحث', value: '85/100' }
    ],
    note: 'نقترح تحسين الصور الكبيرة، ضغط ملفات JS، وتفعيل التحميل الكسول على بطاقات المنتجات.',
    highlightClass: 'text-red-600 dark:text-red-300'
  },
  {
    device: 'الكمبيوتر المكتبي',
    summary: 'النتائج تتحسن إلى 66/100 للأداء مع ثبات في بقية المعايير.',
    metrics: [
      { label: 'الأداء', value: '66/100' },
      { label: 'إمكانية الوصول', value: '86/100' },
      { label: 'أفضل الممارسات', value: '96/100' },
      { label: 'تحسينات محركات البحث', value: '85/100' }
    ],
    note: 'يُنصح بالحفاظ على جودة الصور مع توفير نسخ WebP وتقليل النصوص داخل الصور لرفع التباين.',
    highlightClass: 'text-amber-500 dark:text-amber-300'
  }
];

const socialMetrics = [
  { label: 'عدد المنشورات على Instagram', value: '162 منشوراً', note: 'مخرجات كبيرة عبر 13 سنة لكن دون نمو في المتابعين.' },
  { label: 'معدل المشاركة', value: '0.32%', note: 'أقل من المتوسط؛ المحتوى الحالي لا يحفّز التعليقات أو الحفظ.' },
  { label: 'متوسط الإعجابات', value: '3 لكل منشور', note: 'الحاجة إلى قصص مصورة وحلول مرئية تعزز القيمة.' },
  { label: 'متوسط التعليقات', value: '0 لكل منشور', note: 'الحوارات شبه معدومة؛ نوصي بأسئلة مباشرة ودعوات للتجربة.' },
  { label: 'متوسط تشغيل الفيديو', value: 'غير متوفر', note: 'لا توجد Reels أو فيديوهات حديثة لقياس الأداء.' }
];

const uxInsights = [
  {
    title: 'الرسائل وتجربة الواجهة',
    summary: 'الهوية احترافية لكن لا توجد دعوة فعلية واضحة تعزز وعد الضمان والخبرة.',
    bullets: ['إضافة شريط قيمة ثابت يبين الضمان وخدمة ما بعد البيع.', 'تضمين شواهد اجتماعية أعلى الصفحة لرفع الثقة فوراً.']
  },
  {
    title: 'البحث عن القطع والتصفية',
    summary: 'البحث يعمل لكنه لا يقدم اقتراحات ذكية أو تأكيد التوافق مباشرة.',
    bullets: ['إبراز حقل التوافق (الموديل / السنة) بجوار الأزرار الأساسية.', 'حفظ آخر عمليات البحث لتسريع العودة للمنتجات.']
  },
  {
    title: 'القنوات الرقمية والتفاعل',
    summary: 'العلامة تظهر بقوة في نتائج البحث، بينما التفاعل في Instagram / TikTok / X منخفض.',
    bullets: ['الاستفادة من قوة SEO بإعادة توجيه الزوار إلى محتوى قصصي في السوشيال.', 'تركيز خطط النشر على حالات استخدام حقيقية وفيديوهات إصلاح قصيرة.']
  }
];

const roadmapPhases = [
  {
    title: 'المرحلة الأولى: التأسيس والتحسين',
    period: 'الأيام 1–30',
    focus: [
      {
        heading: 'تحسين الأساسيات',
        bullets: ['مراجعة تجربة المستخدم في المتجر (البحث، وضوح التوافق).', 'إبراز عناصر الثقة والضمان داخل الصفحات.']
      },
      {
        heading: 'إعداد أدوات التتبع',
        bullets: ['Google Analytics', 'Google Tag Manager', 'ربط التحويلات بالـ CRM لقياس قيمة كل طلب.']
      },
      {
        heading: 'إعادة صياغة الرسائل',
        bullets: ['تأكيد قيمة الضمان والخبرة وتقليل المخاطر.', 'تحديث وصف المتجر والصفحات الأساسية بما يتماشى مع التموضع الجديد.']
      },
      {
        heading: 'إعداد المحتوى',
        bullets: ['تقويم محتوى 30 يوماً.', 'إنتاج فيديوهات Reels تثقيفية.', 'إطلاق فكرة كاركتر تسويقي يمثل الخبرة.']
      }
    ]
  },
  {
    title: 'المرحلة الثانية: الإطلاق والاختبار',
    period: 'الأيام 31–60',
    focus: [
      {
        heading: 'إطلاق الحملات الإعلانية',
        bullets: ['Google Ads لحملات بحث BMW وMercedes واستهداف نية الشراء.', 'إعلانات سوشيال توعوية + إعادة استهداف زوار المتجر.']
      },
      {
        heading: 'برنامج المحتوى',
        bullets: ['نسب نشر واضحة: 40% تثقيفي، 25% منتجات، 15% تفاعلي، 10% تعريفي، 10% مجتمعي.']
      },
      {
        heading: 'البريد الإلكتروني',
        bullets: ['حملة إعادة تنشيط العملاء السابقين.', 'محتوى تثقيفي + عروض Bundles ذكية.']
      }
    ]
  },
  {
    title: 'المرحلة الثالثة: التحسين والتوسع',
    period: 'الأيام 61–90',
    focus: [
      {
        heading: 'تحسين الأداء',
        bullets: ['تحليل الحملات أسبوعياً.', 'تعزيز الإعلانات الأعلى تحويلاً وإيقاف الضعيفة.']
      },
      {
        heading: 'زيادة متوسط قيمة الطلب',
        bullets: ['إطلاق باقات قطع (Bundles).', 'عروض مرتبطة بالصيانة الدورية.']
      },
      {
        heading: 'بناء العلامة',
        bullets: ['تعاون مع صناع محتوى سيارات.', 'ترسيخ صورة هيكل العربة كخبير موثوق.']
      }
    ]
  }
];

const kpis = ['زيادة المبيعات بنسبة 30%', 'رفع معدل التحويل في المتجر', 'تقليل السلة المهجورة', 'زيادة الطلبات من العملاء العائدين'];

const packages = [
  {
    tier: '🟢',
    name: 'باقة المحتوى والإدارة',
    highlight: 'باقة محتوى وإدارة بسعر ثابت وواضح',
    scope: [
      'المنصات: Instagram، Snapchat.',
      '12 تصميم صورة شهرياً.',
      '4 فيديوهات قصيرة شهرياً.',
      '12 Stories شهرياً.',
      'كتابة المحتوى بما يتوافق مع الهوية.',
      'جدولة النشر والمتابعة التشغيلية.',
      'تقرير شهري مختصر.'
    ],
    goals: ['تنظيم الحضور الرقمي.', 'استمرارية النشر بجودة ثابتة.', 'توحيد جودة التنفيذ شهرياً.'],
    basePrice: 4500
  },
  {
    tier: '🔵',
    name: 'باقة النمو والمبيعات (Growth)',
    highlight: 'مناسبة لتحقيق نمو فعلي ورفع المبيعات',
    scope: [
      'كل ما في باقة المحتوى والإدارة.',
      'إدارة حملات Google Ads (بحث + إعادة استهداف).',
      'إدارة حملات سوشيال ميديا ممولة على ميزانية إعلانية 15 ألف ريال كحد أقصى.',
      'إنتاج محتوى فيديو تثقيفي (Reels).',
      '١٠ منشورات إضافية للباقة.',
      '٥ فيديوهات ريلز إضافية للباقة.',
      'تفعيل البريد الإلكتروني (إعادة تنشيط + عروض).',
      'تحسين صفحات المنتجات الأعلى مبيعاً وتقارير تفصيلية تربط بالمبيعات.'
    ],
    goals: ['زيادة المبيعات الشهرية.', 'رفع متوسط قيمة الطلب.', 'تقليل السلة المهجورة.'],
    basePrice: 10000
  },
  {
    tier: '🔴',
    name: 'باقة التوسع وبناء العلامة (Scale & Brand)',
    highlight: 'مناسبة للهيمنة وبناء علامة قوية طويلة المدى',
    scope: [
      'إدارة تسويق شاملة (CMO as a Service).',
      'إدارة الحملات الممولة غير محدودة بميزانية معينة في هذه الباقة.',
      'إدارة متقدمة لإعلانات Google وSocial.',
      'استراتيجية محتوى عميقة + كاركتر تسويقي.',
      'شراكات مع صناع محتوى سيارات.',
      'تحسين متواصل لتجربة المتجر وبناء Bundles ذكية.',
      'تقارير استراتيجية واجتماعات شهرية عليا.'
    ],
    goals: ['تحقيق نمو مستدام.', 'رفع الوعي بالعلامة.', 'تثبيت هيكل العربة كمرجع موثوق.'],
    basePrice: 18000
  }
];


const adsPlan = {
  budget: {
    total: '10,000 – 15,000 ريال شهرياً',
    split: [
      { label: 'Google Ads', value: '60% (6,000 – 9,000 ريال)' },
      { label: 'Social Ads (Meta / TikTok)', value: '40% (4,000 – 6,000 ريال)' }
    ]
  },
  google: {
    campaigns: ['Search Ads (أساسية)', 'Remarketing عبر الشبكة وعبر البحث'],
    budgetSplit: ['حملات البحث 70%', 'إعادة الاستهداف 30%'],
    structure: ['حملة BMW Parts', 'حملة Mercedes Parts', 'حملة Brand (اسم هيكل العربة)'],
    metrics: [
      'CPC متوقع 2 – 5 ريال',
      'نقرات شهرية 1,500 – 2,500',
      'معدل تحويل 1.5% – 2.5%',
      'طلب متوقع من Google: 25 – 60 طلب',
      'متوسط قيمة الطلب 700 – 1,000 ريال',
      'إيراد شهري متوقع 17,500 – 60,000 ريال'
    ]
  },
  social: {
    goal: 'بناء الوعي بالقيمة (ضمان – ثقة) وإعادة الاستهداف.',
    campaignTypes: ['Awareness (فيديو)', 'Traffic', 'Remarketing (تحويل)'],
    budgetSplit: ['توعية 50%', 'إعادة استهداف 30%', 'تحويل مباشر 20%'],
    metrics: ['CPM 10 – 20 ريال', 'Reach شهري 200K – 350K', 'CTR 0.8% – 1.5%', 'زيارات للمتجر 1,200 – 2,000']
  }
};

const remarketing = {
  audiences: ['زوار المتجر خلال 30/60/90 يوماً.', 'زوار صفحات BMW وMercedes.', 'السلة المهجورة.', 'متابعو المنصات الاجتماعية.'],
  messages: ['لسه محتار بالقطعة؟ إحنا نساعدك تختار الصح', 'ضمان القطعة أهم من السعر', 'خبرة 25 سنة معك خطوة بخطوة']
};

const expectations = [
  {
    title: 'سيناريو محافظ',
    details: ['إجمالي الطلبات: 70 – 100', 'إجمالي الإيرادات: 50,000 – 80,000 ريال']
  },
  {
    title: 'سيناريو واقعي',
    details: ['إجمالي الطلبات: 120 – 180', 'إجمالي الإيرادات: 90,000 – 150,000 ريال']
  },
  {
    title: 'سيناريو متفائل',
    details: ['إجمالي الطلبات: 200+', 'إجمالي الإيرادات: 180,000+ ريال']
  }
];

const executionNotes = [
  'لا يتم إطلاق الإعلانات قبل ضبط التتبع الكامل.',
  'أول 14 يوماً مخصصة للاختبار والتحسين.',
  'التركيز على كلمات نية الشراء وليس الكلمات العامة.',
  'المحتوى التوعوي عنصر أساسي لنجاح الحملات والإقناع بالقيمة.'
];

function SectionCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200/70 bg-white/80 text-slate-900 shadow-lg backdrop-blur-lg p-6 dark:border-white/10 dark:bg-white/5 dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function hk24() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const message = `قبول العرض المقدم في "${pageUrl}"`;
  const encodedMessage = encodeURIComponent(message);
  const emailLink = `mailto:info@noqtatain.com?subject=${encodeURIComponent('قبول العرض')}&body=${encodedMessage}`;
  const whatsappLink = `https://wa.me/966543569492?text=${encodedMessage}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('hk24Access');
      if (stored === 'granted') {
        setIsAuthorized(true);
      }
    }
  }, []);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (passcode.trim() === 'khaledabuasem24') {
      setIsAuthorized(true);
      setAuthError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hk24Access', 'granted');
      }
    } else {
      setAuthError('رمز المرور غير صحيح. حاول مرة أخرى.');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur">
          <h1 className="text-2xl font-semibold mb-2">ملف هيكل العربة الداخلي</h1>
          <p className="text-sm text-slate-300 mb-6">
            هذه الصفحة محمية. يرجى إدخال رمز المرور للوصول إلى تفاصيل الدراسة.
          </p>
          <form className="space-y-4" onSubmit={handleUnlock}>
            <div>
              <label className="block text-sm mb-2" htmlFor="hk24-passcode">رمز المرور</label>
              <input
                id="hk24-passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
                placeholder="••••••••"
                autoComplete="off"
              />
            </div>
            {authError && <p className="text-sm text-red-400">{authError}</p>}
            <button
              type="submit"
              className="w-full rounded-2xl bg-violet-600 py-3 text-center text-sm font-semibold text-white hover:bg-violet-500 transition"
            >
              فتح الصفحة
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="hk24-page min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:bg-[#04060D] dark:bg-none dark:text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at top, rgba(16,185,129,0.25), transparent 55%)' }} />
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-20" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.4), transparent)' }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-6 dark:text-emerald-200 dark:bg-white/10">
            <Sparkles size={16} />
            <span>ملف خاص · 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            الخطة التسويقية الشاملة –
            <span className="text-emerald-300 block mt-2">هيكل العربة</span>
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mt-6">
            مرجع داخلي متكامل لتحليل الوضع الحالي، ورسم التوجه التسويقي، وخارطة طريق تنفيذية تمتد 90 يوماً لتحقيق نمو فعلي دون المساس بهوية العلامة أو دخول حرب أسعار.
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-20 space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MonitorSmartphone className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">00</p>
              <h2 className="text-3xl font-semibold">الوضع الحالي · واجهة المتجر وسرعته</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <SectionCard className="space-y-4 lg:col-span-1">
              <p className="text-sm text-slate-500 dark:text-slate-400">لقطات شاشة مرجعية (صور مؤقتة)</p>
              <div className="space-y-6">
                {sitePreviewImages.map((preview) => (
                  <div key={preview.label} className="space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10">
                      <img src={preview.url} alt={`لقطة ${preview.label}`} className="w-full h-56 object-cover" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{preview.label}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{preview.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
            <SectionCard className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Gauge className="text-emerald-500 dark:text-emerald-300" />
                <p className="text-sm text-slate-500 dark:text-slate-400">مطابقة القياسات الداخلية مع تقارير Google PageSpeed</p>
              </div>
              <div className="space-y-4">
                {performanceAudit.map((device) => (
                  <div key={device.device} className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-4 bg-white/70 dark:bg-white/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{device.device}</p>
                        <p className="text-base font-semibold text-slate-900 dark:text-white">{device.summary}</p>
                      </div>
                      <span className={`text-lg font-bold ${device.highlightClass}`}>{device.metrics[0].value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3 text-xs text-slate-600 dark:text-slate-300">
                      {device.metrics.slice(1).map((metric) => (
                        <div key={metric.label} className="rounded-xl border border-slate-200/60 dark:border-white/10 p-2">
                          <p className="font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                          <p>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{device.note}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 p-4 bg-white/80 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-400">القنوات الحالية وقياس التفاعل (Instagram)</p>
                <p className="text-base font-semibold text-slate-900 dark:text-white mt-1">نشط بقوة في محركات البحث، وتفاعل منخفض على الشبكات الاجتماعية</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {socialMetrics.map((metric) => (
                    <li key={metric.label} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{metric.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{metric.note}</p>
                      </div>
                      <span className="text-base font-semibold text-slate-900 dark:text-white">{metric.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">00.1</p>
              <h2 className="text-3xl font-semibold">تحليل تجربة المستخدم على hikalaraba.com</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {uxInsights.map((item) => (
              <SectionCard key={item.title} className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pr-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">01</p>
              <h2 className="text-3xl font-semibold">الوضع الحالي (Current Situation Analysis)</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {situationData.map((item) => (
              <SectionCard key={item.title}>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                {item.body && <p className="text-sm leading-relaxed text-slate-200">{item.body}</p>}
                {item.bullets && (
                  <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc pr-5">
                    {item.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </SectionCard>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Compass className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">02</p>
              <h2 className="text-3xl font-semibold">مقترحات التوجه التسويقي</h2>
            </div>
          </div>
          <SectionCard className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400">التمركز التسويقي</p>
                <div className="mt-3 bg-white/5 rounded-2xl p-4">
                  <p className="text-xs text-slate-400">الوضع الحالي</p>
                  <p className="text-base font-semibold text-white">{marketingDirection.positioning.from}</p>
                  <p className="text-xs text-slate-400 mt-3">التمركز الجديد</p>
                  <p className="text-base font-semibold text-emerald-300">{marketingDirection.positioning.to}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">الاستراتيجية العامة</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc pr-5">
                  {marketingDirection.strategy.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400 mb-2">الرسائل الأساسية</p>
                <div className="flex flex-wrap gap-2">
                  {marketingDirection.messages.map((msg) => (
                    <span key={msg} className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white">
                      {msg}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-2">القنوات المعتمدة</p>
                <ul className="space-y-2 text-sm text-slate-200 list-disc pr-5">
                  {marketingDirection.channels.map((channel) => (
                    <li key={channel}>{channel}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Map className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">03</p>
              <h2 className="text-3xl font-semibold">خارطة طريق 90 يوماً لتحقيق نمو فعلي</h2>
            </div>
          </div>
          <div className="space-y-6">
            {roadmapPhases.map((phase) => (
              <SectionCard key={phase.title} className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">{phase.period}</p>
                    <h3 className="text-2xl font-semibold">{phase.title}</h3>
                  </div>
                  <span className="text-sm text-emerald-200 bg-emerald-500/10 px-4 py-1 rounded-full">Milestone</span>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {phase.focus.map((block) => (
                    <div key={block.heading} className="rounded-2xl border border-white/10 p-4 bg-white/2">
                      <p className="text-base font-semibold text-white">{block.heading}</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc pr-5">
                        {block.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">04</p>
              <h2 className="text-3xl font-semibold">مؤشرات الأداء (KPIs)</h2>
            </div>
          </div>
          <SectionCard className="flex flex-wrap gap-3">
            {kpis.map((kpi) => (
              <span key={kpi} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white border border-white/10">
                {kpi}
              </span>
            ))}
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Layers3 className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">05</p>
              <h2 className="text-3xl font-semibold">باقات خدمات التسويق المقترحة</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <SectionCard key={pkg.name} className="flex flex-col h-full">
                <div>
                  <p className="text-3xl mb-2">{pkg.tier}</p>
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <p className="text-sm text-emerald-200 mt-1">{pkg.highlight}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mb-2">نطاق العمل</p>
                  <ul className="space-y-2 text-sm text-slate-200 list-disc pr-5">
                    {pkg.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-400 mb-2">الأهداف</p>
                  <ul className="space-y-1 text-sm text-slate-200 list-disc pr-5">
                    {pkg.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <p className="text-sm text-emerald-200 font-semibold">سعر البيع</p>
                    <p className="text-lg font-bold text-white mt-2">{pkg.basePrice.toLocaleString('ar-SA')} ريال / شهر</p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">06</p>
              <h2 className="text-3xl font-semibold">خطة الإعلانات المدفوعة (Google + Social)</h2>
            </div>
          </div>
          <div className="space-y-6">
            <SectionCard>
              <p className="text-sm text-slate-400">الميزانية المقترحة شهرياً</p>
              <p className="text-2xl font-semibold mt-2">{adsPlan.budget.total}</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {adsPlan.budget.split.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 p-4">
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-base font-semibold text-white mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <div className="grid gap-6 md:grid-cols-2">
              <SectionCard>
                <div className="flex items-center gap-2 mb-4">
                  <Rocket className="text-emerald-300" />
                  <h3 className="text-xl font-semibold">خطة Google Ads</h3>
                </div>
                <p className="text-sm text-slate-400">نوع الحملات</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.google.campaigns.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-4">تقسيم الميزانية</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.google.budgetSplit.map((split) => (
                    <li key={split}>{split}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-4">هيكلة الحملات</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.google.structure.map((structure) => (
                    <li key={structure}>{structure}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-4">الأرقام المتوقعة</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.google.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard>
                <div className="flex items-center gap-2 mb-4">
                  <Megaphone className="text-emerald-300" />
                  <h3 className="text-xl font-semibold">خطة Social Ads</h3>
                </div>
                <p className="text-sm text-slate-400">الهدف الرئيسي</p>
                <p className="text-sm text-slate-200 mt-2">{adsPlan.social.goal}</p>
                <p className="text-sm text-slate-400 mt-4">أنواع الحملات</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.social.campaignTypes.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-4">تقسيم الميزانية</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.social.budgetSplit.map((split) => (
                    <li key={split}>{split}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-4">الأرقام المتوقعة</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                  {adsPlan.social.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </SectionCard>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Repeat className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">07</p>
              <h2 className="text-3xl font-semibold">إستراتيجية إعادة الاستهداف والنتائج المتوقعة</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <h3 className="text-xl font-semibold mb-3">الفئات والرسائل</h3>
              <p className="text-sm text-slate-400">الفئات المستهدفة</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                {remarketing.audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">الرسائل المستخدمة</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {remarketing.messages.map((message) => (
                  <span key={message} className="px-4 py-2 rounded-full border border-white/10 text-xs text-white">
                    {message}
                  </span>
                ))}
              </div>
            </SectionCard>
            <SectionCard>
              <h3 className="text-xl font-semibold mb-3">التوقعات خلال 90 يوماً</h3>
              <div className="space-y-4">
                {expectations.map((scenario) => (
                  <div key={scenario.title} className="rounded-2xl border border-white/10 p-4 bg-white/2">
                    <p className="text-sm text-emerald-200">{scenario.title}</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200 list-disc pr-5">
                      {scenario.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <LineChart className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">08</p>
              <h2 className="text-3xl font-semibold">مؤشرات الأداء والتشغيل</h2>
            </div>
          </div>
          <SectionCard className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-400 mb-2">KPIs حاكمة</p>
              <ul className="space-y-1 text-sm text-slate-200 list-disc pr-5">
                {['Cost per Purchase', 'ROAS', 'Conversion Rate', 'Average Order Value', 'نسبة السلة المهجورة'].map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-2">ملاحظات تنفيذية</p>
              <ul className="space-y-1 text-sm text-slate-200 list-disc pr-5">
                {executionNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </SectionCard>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <UsersRound className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">09</p>
              <h2 className="text-3xl font-semibold">الخلاصة والتوصية</h2>
            </div>
          </div>
          <SectionCard>
            <p className="text-base leading-relaxed text-slate-100">
              التوصية المباشرة هي البدء بـ <span className="text-emerald-200 font-semibold">باقة النمو والمبيعات</span> لمدة 90 يوماً، مع مراقبة مؤشرات الأداء المذكورة، ثم الانتقال إلى باقة التوسع عند ثبات النمو. الخطة مصممة لتحقيق مبيعات فعلية وبناء قيمة طويلة المدى من خلال ضمان القطعة الصحيحة، وتفعيل المحتوى كأداة بيع، والاستثمار الذكي في الإعلانات دون الدخول في حرب أسعار.
            </p>
          </SectionCard>
        </section>

        <section>
          <SectionCard className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">قبول العرض</h2>
              <p className="text-sm text-slate-200 mt-1">اختر طريقة التواصل المناسبة لإتمام القبول.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={emailLink}
                className="rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-500 transition"
              >
                قبول العرض عبر الإيميل
              </a>
              <a
                href={whatsappLink}
                className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-center text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition"
              >
                قبول العرض عبر الواتساب
              </a>
            </div>
          </SectionCard>
        </section>
      </div>
    </div>
  );
}
