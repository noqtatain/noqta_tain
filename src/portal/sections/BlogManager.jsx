import React, { useMemo, useState } from 'react';
import { addItem, getAll, removeItem, updateItem } from '@/portal/storage';
import { Image, Save, Trash2, Video } from 'lucide-react';

const slugify = (s) => s.toString().toLowerCase().trim()
  .replace(/\s+/g,'-')
  .replace(/[^\w\-]+/g,'')
  .replace(/\-\-+/g,'-');

export default function BlogManager() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [posts, setPosts] = useState(() => getAll('blogPosts'));

  const preview = useMemo(() => ({
    slug: slugify(title),
    wordCount: body.trim().split(/\s+/).filter(Boolean).length,
    excerptLength: excerpt.length,
  }), [title, body, excerpt]);

  const reset = () => {
    setTitle('');
    setExcerpt('');
    setBody('');
    setCoverImageUrl('');
    setVideoUrl('');
    setEditingId(null);
  };

  const save = () => {
    const payload = {
      title,
      excerpt,
      body,
      coverImageUrl,
      videoUrl,
      slug: preview.slug,
    };
    if (editingId) {
      updateItem('blogPosts', editingId, payload);
      setPosts(getAll('blogPosts'));
    } else {
      addItem('blogPosts', payload);
      setPosts(getAll('blogPosts'));
    }
    reset();
    alert('تم حفظ المقالة محليًا');
  };

  const edit = (post) => {
    setEditingId(post.id);
    setTitle(post.title || '');
    setExcerpt(post.excerpt || '');
    setBody(post.body || '');
    setCoverImageUrl(post.coverImageUrl || '');
    setVideoUrl(post.videoUrl || '');
  };

  const remove = (postId) => {
    removeItem('blogPosts', postId);
    setPosts(getAll('blogPosts'));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">إدارة المدونة</h2>
      <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
        أضف منشورات جديدة للمدونة مع صور الغلاف أو روابط الفيديو لدعم المحتوى.
      </p>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="عنوان المقالة" />
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full min-h-[90px] p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="مقدمة قصيرة للمقالة" />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} className="w-full min-h-[180px] p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="محتوى المقالة الكامل" />
          <div className="flex items-center gap-2">
            <Image className="w-4 h-4 text-slate-400" />
            <input value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="رابط صورة الغلاف" />
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-400" />
            <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="رابط فيديو (اختياري)" />
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={save} className="h-11 px-4 rounded-lg bg-violet-600 text-white flex items-center gap-2">
              <Save className="w-4 h-4" /> {editingId ? 'تحديث المقالة' : 'حفظ المقالة'}
            </button>
            {editingId && (
              <button onClick={reset} className="h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800">
                إلغاء التعديل
              </button>
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-2">ملخص المقالة</div>
          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
            <li>طول المقدمة: <b>{preview.excerptLength}</b> حرف</li>
            <li>عدد كلمات المقالة: <b>{preview.wordCount}</b></li>
            <li>الرابط (Slug): <span className="text-violet-500">/blog/{preview.slug}</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">منشورات المدونة</h3>
        {posts.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">لا توجد منشورات بعد.</p>
        ) : (
          <div className="grid gap-3">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">/blog/{post.slug}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => edit(post)} className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-sm">
                    تعديل
                  </button>
                  <button onClick={() => remove(post.id)} className="h-9 px-3 rounded-lg border border-red-200 text-red-600 flex items-center gap-2 text-sm">
                    <Trash2 className="w-4 h-4" /> حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
