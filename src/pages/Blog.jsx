import React, { useMemo } from 'react';
import { getAll } from '@/portal/storage';
import { Calendar, PlayCircle } from 'lucide-react';

const fallbackPosts = [
  {
    id: 'sample-1',
    title: 'كيف تبني استراتيجية محتوى لمطعمك في 30 يومًا',
    excerpt: 'خطوات عملية لبناء خطة محتوى أسبوعية تزيد التفاعل والمبيعات مع أدوات القياس المناسبة.',
    body: 'ابدأ بتحديد الرسالة الرئيسية، ثم وزّع المحتوى بين توعوي وترويجي وتفاعلي. احرص على قياس الأداء أسبوعيًا.',
    coverImageUrl: 'https://images.unsplash.com/photo-1495195129352-a9c6f3d491e6?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '',
    created_at: new Date().toISOString(),
  },
];

export default function Blog() {
  const posts = useMemo(() => {
    const stored = getAll('blogPosts');
    return stored.length ? stored : fallbackPosts;
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">مدونة نقطتين</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            مقالات وتحديثات تسويقية تساعدك على تحسين الأداء الرقمي، بناء العلامة، وزيادة المبيعات.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              {post.coverImageUrl && (
                <div className="relative h-48">
                  <img src={post.coverImageUrl} alt={post.title} className="w-full h-full object-cover" />
                  {post.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                      <PlayCircle className="w-12 h-12" />
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.created_at ? new Date(post.created_at).toLocaleDateString('ar-SA') : '—'}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{post.excerpt}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.body}</p>
                {post.videoUrl && (
                  <a
                    href={post.videoUrl}
                    className="inline-flex items-center gap-2 text-sm text-violet-500 mt-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    مشاهدة الفيديو
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
