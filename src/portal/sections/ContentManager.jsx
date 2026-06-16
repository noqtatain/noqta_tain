import React, { useMemo, useState } from 'react';
import { addItem, getAll, removeItem, updateItem } from '@/portal/storage';
import { PenLine, Save, Trash2 } from 'lucide-react';

const slugify = (s) => s.toString().toLowerCase().trim()
  .replace(/\s+/g,'-')
  .replace(/[^\w\-]+/g,'')
  .replace(/\-\-+/g,'-');

export default function ContentManager(){
  const [pageName, setPageName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [body, setBody] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [items, setItems] = useState(() => getAll('pages'));

  const preview = useMemo(()=>({
    slug: slugify(pageName || title),
    titleLength: title.length,
    descLength: desc.length,
    keywordCount: keywords.split(',').filter(Boolean).length,
    words: body.trim().split(/\s+/).filter(Boolean).length,
  }),[pageName,title,desc,keywords,body]);

  const resetForm = () => {
    setPageName('');
    setTitle('');
    setDesc('');
    setKeywords('');
    setBody('');
    setEditingId(null);
  };

  const save = () => {
    const payload = {
      pageName,
      title,
      description: desc,
      keywords,
      body,
      slug: preview.slug,
    };
    if (editingId) {
      updateItem('pages', editingId, payload);
      setItems(getAll('pages'));
    } else {
      addItem('pages', payload);
      setItems(getAll('pages'));
    }
    resetForm();
    alert('تم حفظ بيانات الصفحة محليًا');
  };

  const edit = (item) => {
    setEditingId(item.id);
    setPageName(item.pageName || '');
    setTitle(item.title || '');
    setDesc(item.description || '');
    setKeywords(item.keywords || '');
    setBody(item.body || '');
  };

  const remove = (itemId) => {
    removeItem('pages', itemId);
    setItems(getAll('pages'));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">إدارة المحتوى</h2>
      <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
        هذه الواجهة مخصصة لتعديل محتوى صفحات الموقع الحالية وتحسين عناصر السيو لكل صفحة.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <input
            value={pageName}
            onChange={e=>setPageName(e.target.value)}
            className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            placeholder="اسم الصفحة (مثال: الرئيسية، من نحن)"
          />
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="العنوان" />
          <input value={desc} onChange={e=>setDesc(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الوصف (Meta Description)" />
          <input value={keywords} onChange={e=>setKeywords(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الكلمات المفتاحية (افصل بينها بفواصل)" />
          <textarea value={body} onChange={e=>setBody(e.target.value)} className="w-full min-h-[180px] p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="نص المحتوى" />
          <div className="flex flex-wrap gap-3">
            <button onClick={save} className="h-11 px-4 rounded-lg bg-violet-600 text-white flex items-center gap-2">
              <Save className="w-4 h-4"/> {editingId ? 'تحديث الصفحة' : 'حفظ الصفحة'}
            </button>
            {editingId && (
              <button onClick={resetForm} className="h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800">
                إلغاء التعديل
              </button>
            )}
          </div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-2">معاون السيو</div>
          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
            <li>طول العنوان: <b>{preview.titleLength}</b> (المثالي 50–60)</li>
            <li>طول الوصف: <b>{preview.descLength}</b> (المثالي 140–160)</li>
            <li>الكلمات المفتاحية: <b>{preview.keywordCount}</b></li>
            <li>عدد كلمات المحتوى: <b>{preview.words}</b></li>
            <li>الرابط (Slug): <span className="text-violet-500">/{preview.slug}</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">الصفحات المحفوظة</h3>
        {items.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">لا توجد صفحات محفوظة بعد.</p>
        ) : (
          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.pageName || 'صفحة غير مسماة'}</p>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">/{item.slug}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => edit(item)} className="h-9 px-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-sm">
                    <PenLine className="w-4 h-4" /> تعديل
                  </button>
                  <button onClick={() => remove(item.id)} className="h-9 px-3 rounded-lg border border-red-200 text-red-600 flex items-center gap-2 text-sm">
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
