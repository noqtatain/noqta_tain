import React, { useState } from 'react';
import { addItem, getAll, removeItem } from '@/portal/storage';

export default function ClientRequests(){
  const [list, setList] = useState(()=>getAll('requests'));
  const [form, setForm] = useState({ title:'', client:'', status:'new' });

  const submit = (e)=>{
    e.preventDefault();
    const item = addItem('requests', form);
    setList([item, ...list]);
    setForm({ title:'', client:'', status:'new' });
  };

  const del = (id)=>{ removeItem('requests', id); setList(list.filter(i=>i.id!==id)); };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">طلبات العملاء</h2>
      <form onSubmit={submit} className="grid md:grid-cols-4 gap-2 mb-4">
        <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="عنوان الطلب"/>
        <input value={form.client} onChange={e=>setForm({...form,client:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="اسم العميل"/>
        <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <option value="new">جديد</option>
          <option value="in_progress">قيد التنفيذ</option>
          <option value="done">منجز</option>
        </select>
        <button className="h-10 rounded-lg bg-violet-600 text-white">إضافة</button>
      </form>
      <div className="space-y-2">
        {list.map(i=> (
          <div key={i.id} className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-slate-500">{i.client} • {i.status}</div>
            </div>
            <button onClick={()=>del(i.id)} className="text-red-500 text-sm">حذف</button>
          </div>
        ))}
        {!list.length && <div className="text-slate-400 text-sm">لا يوجد بيانات</div>}
      </div>
    </div>
  );
}
