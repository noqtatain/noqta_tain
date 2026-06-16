import React, { useState } from 'react';
import { addItem, getAll, removeItem, updateItem } from '@/portal/storage';

export default function SupportTickets(){
  const [list, setList] = useState(()=>getAll('tickets'));
  const [form, setForm] = useState({ subject:'', requester:'', status:'open', priority:'normal' });

  const submit = (e)=>{
    e.preventDefault();
    const item = addItem('tickets', form);
    setList([item, ...list]);
    setForm({ subject:'', requester:'', status:'open', priority:'normal' });
  };

  const del = (id)=>{ removeItem('tickets', id); setList(list.filter(i=>i.id!==id)); };

  const toggle = (id)=>{
    const t = list.find(x=>x.id===id);
    const updated = updateItem('tickets', id, { status: t.status==='open'?'closed':'open' });
    setList(list.map(x=> x.id===id? updated : x));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">تذاكر الدعم</h2>
      <form onSubmit={submit} className="grid md:grid-cols-5 gap-2 mb-4">
        <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الموضوع"/>
        <input value={form.requester} onChange={e=>setForm({...form,requester:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="مقدم الطلب"/>
        <select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <option value="low">منخفض</option>
          <option value="normal">عادي</option>
          <option value="high">مرتفع</option>
        </select>
        <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <option value="open">مفتوحة</option>
          <option value="closed">مغلقة</option>
        </select>
        <button className="h-10 rounded-lg bg-violet-600 text-white">إضافة</button>
      </form>
      <div className="space-y-2">
        {list.map(i=> (
          <div key={i.id} className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{i.subject}</div>
              <div className="text-sm text-slate-500">{i.requester} • أولوية: {i.priority} • الحالة: {i.status==='open'?'مفتوحة':'مغلقة'}</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={()=>toggle(i.id)} className="text-sm text-violet-600">تبديل الحالة</button>
              <button onClick={()=>del(i.id)} className="text-red-500 text-sm">حذف</button>
            </div>
          </div>
        ))}
        {!list.length && <div className="text-slate-400 text-sm">لا يوجد بيانات</div>}
      </div>
    </div>
  );
}
