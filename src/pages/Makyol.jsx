import React, { useEffect, useState } from 'react';
import makyolMarketingPlanHtml from '../makyol_marketing_plan.html?raw';

const PASSWORD = '..';

export default function Makyol() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = isUnlocked ? 'خطة التسويق – مكيول' : 'دخول خطة مكيول';
  }, [isUnlocked]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === PASSWORD) {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setIsUnlocked(false);
    setError('كلمة المرور غير صحيحة. حاول مرة أخرى.');
  };

  if (isUnlocked) {
    return (
      <iframe
        title="خطة التسويق – مكيول"
        srcDoc={makyolMarketingPlanHtml}
        className="block h-screen w-full border-0"
      />
    );
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#1C1C1A] px-4 py-16 text-[#E8DFC8]">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl border border-[#E8836A]/30 bg-[#252522] p-8 shadow-2xl shadow-black/30">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#E8836A] text-2xl font-black text-[#E8836A]">
            ..
          </div>
          <h1 className="mb-2 text-center text-2xl font-black">خطة التسويق – مكيول</h1>
          <p className="mb-6 text-center text-sm text-[#9A9485]">الرجاء إدخال كلمة المرور للوصول إلى الصفحة الخاصة.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-bold text-[#E8DFC8]" htmlFor="makyol-password">
              كلمة المرور
            </label>
            <input
              id="makyol-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-[#E8836A]/30 bg-[#1C1C1A] px-4 py-3 text-[#E8DFC8] outline-none transition placeholder:text-[#9A9485] focus:border-[#E8836A] focus:ring-2 focus:ring-[#E8836A]/30"
              placeholder="أدخل كلمة المرور"
              autoComplete="current-password"
              autoFocus
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#E8836A] px-4 py-3 font-black text-[#1C1C1A] transition hover:bg-[#F2A98A]"
            >
              دخول
            </button>
          </form>

          {error && (
            <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
