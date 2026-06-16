import React, { useState } from 'react';
import { addItem, getAll, removeItem } from '@/portal/storage';

export default function Calendar(){
  const [list, setList] = useState(()=>getAll('events'));
  const [form, setForm] = useState({ title:'', date: new Date().toISOString().slice(0,10) });

  const submit = (e)=>{
    e.preventDefault();
    const item = addItem('events', form);
    setList([item, ...list]);
    setForm({ title:'', date: new Date().toISOString().slice(0,10) });
  };

  const del = (id)=>{ removeItem('events', id); setList(list.filter(i=>i.id!==id)); };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">التقويم</h2>
      <form onSubmit={submit} className="grid md:grid-cols-3 gap-2 mb-4">
        <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="اسم الحدث"/>
        <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"/>
        <button className="h-10 rounded-lg bg-violet-600 text-white">إضافة</button>
      </form>
      <div className="space-y-2">
        {list.map(i=> (
          <div key={i.id} className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between">
            <div className="font-medium">{i.title}</div>
            <div className="text-sm text-slate-500">{new Date(i.date).toLocaleDateString('ar-SA')}</div>
            <button onClick={()=>del(i.id)} className="text-red-500 text-sm">حذف</button>
          </div>
        ))}
        {!list.length && <div className="text-slate-400 text-sm">لا يوجد بيانات</div>}
      </div>
    </div>
  );
}
