import React, { useMemo } from 'react';
import { getAll } from '@/portal/storage';

export default function ContentHub() {
  const pages = useMemo(() => {
    const stored = getAll('pages');
    return stored.filter((item) => item.published);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">مكتبة المحتوى</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            أحدث المحتويات المنشورة من فريق نقطتين، متاحة للعرض مباشرة بعد النشر من المنصة الداخلية.
          </p>
        </header>

        {pages.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-slate-600 dark:text-slate-300">
            لا توجد محتويات منشورة حتى الآن.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {pages.map((item) => (
              <article key={item.id} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">/{item.slug}</p>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{item.description}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-pre-line">{item.body}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
