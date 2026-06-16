import React, { useEffect, useState } from 'react';
import { ClipboardList, Target, Megaphone, UsersRound, Wallet, BadgeCheck } from 'lucide-react';

const goals = [
  'تأسيس التواجد الرقمي من الصفر عبر منصات التواصل الاجتماعي والموقع الإلكتروني وتطبيقات الهاتف.',
  'رفع المبيعات إلى الضعف (من 30,000 ريال شهريًا إلى 60,000 ريال شهريًا).',
  'تحقيق تفاعل إيجابي ومستمر مع الجمهور من خلال عروض وفعاليات تسويقية.'
];

const socialManagement = {
  platforms: ['Instagram', 'Snapchat'],
  monthlyOutput: ['12 تصميم صورة', '4 فيديوهات قصيرة', '12 Stories'],
  contentTypes: [
    'كتابة المحتوى بما يتناسب مع هوية العلامة.',
    'جدولة النشر وفق خطة شهرية ثابتة.',
    'متابعة الأداء ورفع تقرير شهري مختصر.'
  ]
};

const paidAds = [
  { label: 'Instagram/Facebook Ads', value: '3,000 ريال سعودي شهريًا' },
  { label: 'Google Ads', value: '5,000 ريال سعودي شهريًا' },
  { label: 'TikTok Ads', value: '2,000 ريال سعودي شهريًا' }
];

const influencers = {
  goal: 'بناء الثقة وجذب متابعين جدد عبر مؤثرين محليين.',
  count: 'من 3 إلى 5 مؤثرين',
  types: 'زيارات للمطعم، تغريدات، أو فيديوهات لعرض منتجات المطعم.'
};

const financialRows = [
  { service: 'الإدارة', budget: 'إدارة حسابات المنصات' },
  { service: 'المحتوى', budget: '12 تصميم صورة + 4 فيديوهات قصيرة + 12 Stories' },
  { service: 'الإدارة التشغيلية', budget: 'كتابة المحتوى + جدولة النشر' },
  { service: 'التقارير', budget: 'تقرير شهري مختصر' }
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

export default function finoo() {
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
      const stored = sessionStorage.getItem('finooAccess');
      if (stored === 'granted') {
        setIsAuthorized(true);
      }
    }
  }, []);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (passcode.trim() === 'khaledfinoo') {
      setIsAuthorized(true);
      setAuthError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('finooAccess', 'granted');
      }
    } else {
      setAuthError('رمز المرور غير صحيح. حاول مرة أخرى.');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur">
          <h1 className="text-2xl font-semibold mb-2">ملف مطعم فينو الداخلي</h1>
          <p className="text-sm text-slate-300 mb-6">
            هذه الصفحة محمية. يرجى إدخال رمز المرور للوصول إلى تفاصيل العرض.
          </p>
          <form className="space-y-4" onSubmit={handleUnlock}>
            <div>
              <label className="block text-sm mb-2" htmlFor="finoo-passcode">رمز المرور</label>
              <input
                id="finoo-passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                placeholder="••••••••"
                autoComplete="off"
              />
            </div>
            {authError && <p className="text-sm text-red-400">{authError}</p>}
            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-600 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-500 transition"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <header className="space-y-4">
          <p className="text-sm text-emerald-500 font-semibold">عرض فني ومالي - FINOO</p>
          <h1 className="text-4xl font-semibold">الخطة والميزانية التسويقية</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">اسم العميل: مطعم فينو</p>
          <SectionCard>
            <p className="text-base text-slate-700 dark:text-slate-200">
              تأسيس تواجد رقمي قوي ورفع المبيعات إلى الضعف يتطلب استراتيجية تسويقية شاملة ومتنوعة تجمع بين التواجد الرقمي،
              حملات الإعلانات المدفوعة، وتنمية تفاعل العملاء عبر منصات التواصل الاجتماعي. سنقوم بتطوير خطة تسويقية تناسب أهداف مطعمكم
              في الرياض لزيادة الوعي بالعلامة التجارية وتحفيز المبيعات.
            </p>
          </SectionCard>
        </header>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">01</p>
              <h2 className="text-3xl font-semibold">الهدف العام</h2>
            </div>
          </div>
          <SectionCard>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">02</p>
              <h2 className="text-3xl font-semibold">الخطة الفنية التسويقية</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-emerald-300" />
                <h3 className="text-xl font-semibold">إدارة حسابات منصات التواصل</h3>
              </div>
              <p className="text-sm text-slate-400">المنصات المستهدفة</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">{socialManagement.platforms.join('، ')}</p>
              <p className="text-sm text-slate-400 mt-4">عدد المنشورات الشهرية</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialManagement.monthlyOutput.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">نوع المحتوى</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialManagement.contentTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="text-emerald-300" />
                <h3 className="text-xl font-semibold">حملات إعلانات مدفوعة</h3>
              </div>
              <p className="text-sm text-slate-400">الهدف</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">
                زيادة الوعي بالعلامة التجارية وتحميل التطبيق وجلب التواصلات من العملاء.
              </p>
              <div className="mt-4 space-y-3">
                {paidAds.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/60 p-3 dark:bg-white/5">
                    <p className="text-sm text-slate-500 dark:text-slate-300">{item.label}</p>
                    <p className="text-base font-semibold text-slate-900 dark:text-white mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <UsersRound className="text-emerald-300" />
                <h3 className="text-xl font-semibold">التعاون مع المؤثرين</h3>
              </div>
              <p className="text-sm text-slate-400">الهدف</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-2">{influencers.goal}</p>
              <p className="text-sm text-slate-400 mt-4">عدد المؤثرين المستهدفين</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">{influencers.count}</p>
              <p className="text-sm text-slate-400 mt-4">أنواع التعاون</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">{influencers.types}</p>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wallet className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">03</p>
              <h2 className="text-3xl font-semibold">التخصيص المالي الإجمالي</h2>
            </div>
          </div>
          <SectionCard>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="text-slate-400">
                    <th className="pb-3">الخدمة</th>
                    <th className="pb-3">التخصيص المالي الشهري</th>
                  </tr>
                </thead>
                <tbody>
                  {financialRows.map((row) => (
                    <tr key={row.service} className="border-t border-white/10">
                      <td className="py-3 text-slate-700 dark:text-slate-200">{row.service}</td>
                      <td className="py-3 font-semibold text-slate-900 dark:text-white">{row.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-sm text-emerald-200 font-semibold">سعر البيع</p>
                <p className="text-2xl font-bold text-white mt-2">4,500 ريال سعودي</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-300 font-semibold">سعر البيع</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">4,500 ريال سعودي</p>
              </div>
            </div>
          </SectionCard>
        </section>

        <section>
          <SectionCard className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">قبول العرض</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">اختر طريقة التواصل المناسبة لإتمام القبول.</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">للاستفسارات: info@noqtatain.com</p>
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
                className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-200 hover:bg-emerald-500/20 transition"
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
