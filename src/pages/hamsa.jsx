import React, { useEffect, useState } from 'react';
import { ClipboardList, Target, Megaphone, Wallet, MapPin } from 'lucide-react';

const objectives = [
  'بناء وتعزيز الهوية الرقمية للعلامة التجارية.',
  'الوصول إلى شريحة أكبر من الجمهور في مدينة الرياض.',
  'زيادة الطلبات (داخل المطعم + التوصيل).'
];

const socialScope = [
  'وضع استراتيجية محتوى مناسبة للمطاعم.',
  'إعداد خطة نشر شهرية.',
  'إنشاء وتصميم المحتوى (صور + فيديوهات قصيرة Reels / TikTok).',
  'كتابة المحتوى (Captions) بأسلوب جذاب ومتوافق مع الهوية.',
  'إدارة التفاعل (الرد على التعليقات والرسائل).',
  'تحسين الحسابات (Bio – Highlights – Hashtags).'
];

const socialContent = ['12 تصميم صورة', '4 فيديوهات قصيرة', '12 Stories'];

const adsScope = [
  'إعداد استراتيجية إعلانية مناسبة لأهداف المطعم.',
  'إنشاء الحملات الإعلانية.',
  'استهداف الجمهور المناسب (حسب الموقع والاهتمامات).',
  'إدارة الميزانية وتحسين الأداء.',
  'تقارير شهرية مبسطة عن النتائج.'
];

const adsGoals = ['زيادة الوعي بالعلامة التجارية.', 'زيادة التفاعل.', 'زيادة الطلبات والوصول للفرعين.'];

const feeItems = ['إدارة حسابات التواصل الاجتماعي', 'إنشاء المحتوى', 'كتابة المحتوى', 'جدولة النشر', 'التقارير'];

function SectionCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200/70 bg-white/80 text-slate-900 shadow-lg backdrop-blur-lg p-6 dark:border-white/10 dark:bg-white/5 dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function hamsa() {
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
      const stored = sessionStorage.getItem('hamsaAccess');
      if (stored === 'granted') {
        setIsAuthorized(true);
      }
    }
  }, []);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (passcode.trim() === 'hamsaplan33') {
      setIsAuthorized(true);
      setAuthError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hamsaAccess', 'granted');
      }
    } else {
      setAuthError('رمز المرور غير صحيح. حاول مرة أخرى.');
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur">
          <h1 className="text-2xl font-semibold mb-2">ملف مطعم حمسة وتغميسة الداخلي</h1>
          <p className="text-sm text-slate-300 mb-6">
            هذه الصفحة محمية. يرجى إدخال رمز المرور للوصول إلى تفاصيل العرض.
          </p>
          <form className="space-y-4" onSubmit={handleUnlock}>
            <div>
              <label className="block text-sm mb-2" htmlFor="hamsa-passcode">رمز المرور</label>
              <input
                id="hamsa-passcode"
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
          <p className="text-sm text-emerald-500 font-semibold">عرض فني ومالي</p>
          <h1 className="text-4xl font-semibold">إدارة التسويق الإلكتروني</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>مطعم حمسة وتغميسة – الرياض (فرعين)</span>
            </div>
            <span className="text-slate-400">•</span>
            <span>مدة العرض: 6 أشهر</span>
          </div>
        </header>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">01</p>
              <h2 className="text-3xl font-semibold">أولًا: العرض الفني</h2>
            </div>
          </div>
          <SectionCard>
            <p className="text-sm text-slate-400 mb-3">أهداف العمل</p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">02</p>
              <h2 className="text-3xl font-semibold">نطاق الخدمات</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-emerald-300" />
                <h3 className="text-xl font-semibold">إدارة حسابات التواصل الاجتماعي</h3>
              </div>
              <p className="text-sm text-slate-400">المنصات</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">Instagram، Snapchat</p>
              <p className="text-sm text-slate-400 mt-4">يشمل</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">عدد المحتوى المقترح شهريًا</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialContent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-emerald-300" />
                <h3 className="text-xl font-semibold">إدارة الحملات الإعلانية المدفوعة</h3>
              </div>
              <p className="text-sm text-slate-400">المنصات</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">Instagram Ads، TikTok Ads</p>
              <p className="text-sm text-slate-400 mt-4">يشمل</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {adsScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">أهداف الحملات</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {adsGoals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wallet className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">03</p>
              <h2 className="text-3xl font-semibold">ثانيًا: العرض المالي</h2>
            </div>
          </div>
          <SectionCard>
            <p className="text-sm text-slate-400">أتعاب إدارة التسويق (شهريًا)</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
              {feeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-200 font-semibold">سعر البيع</p>
              <p className="text-2xl font-bold text-white mt-2">4,500 ريال سعودي</p>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-300 font-semibold">التقارير</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white mt-2">تقرير شهري مختصر</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">سعر البيع المعتمد ضمن باقات الشراكة الخارجية</p>
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
