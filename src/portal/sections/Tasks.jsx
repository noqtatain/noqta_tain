import React, { useState } from 'react';
import { addItem, getAll, removeItem, updateItem } from '@/portal/storage';

export default function Tasks(){
  const [list, setList] = useState(()=>getAll('tasks'));
  const [form, setForm] = useState({ title:'', assignee:'', status:'todo' });

  const submit = (e)=>{
    e.preventDefault();
    const item = addItem('tasks', form);
    setList([item, ...list]);
    setForm({ title:'', assignee:'', status:'todo' });
  };

  const del = (id)=>{ removeItem('tasks', id); setList(list.filter(i=>i.id!==id)); };
  const advance = (id)=>{
    const t = list.find(x=>x.id===id);
    const next = t.status==='todo'?'doing':(t.status==='doing'?'done':'todo');
    const updated = updateItem('tasks', id, { status: next });
    setList(list.map(x=> x.id===id? updated : x));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">مهام الموظفين</h2>
      <form onSubmit={submit} className="grid md:grid-cols-4 gap-2 mb-4">
        <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="عنوان المهمة"/>
        <input value={form.assignee} onChange={e=>setForm({...form,assignee:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="المسؤول"/>
        <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <option value="todo">قيد الانتظار</option>
          <option value="doing">جارٍ التنفيذ</option>
          <option value="done">منجز</option>
        </select>
        <button className="h-10 rounded-lg bg-violet-600 text-white">إضافة</button>
      </form>

      <div className="space-y-2">
        {list.map(i=> (
          <div key={i.id} className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-slate-500">{i.assignee} • {i.status==='todo'? 'قيد الانتظار': i.status==='doing'? 'جارٍ التنفيذ' : 'منجز'}</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={()=>advance(i.id)} className="text-sm text-violet-600">تحديث الحالة</button>
              <button onClick={()=>del(i.id)} className="text-red-500 text-sm">حذف</button>
            </div>
          </div>
        ))}
        {!list.length && <div className="text-slate-400 text-sm">لا يوجد بيانات</div>}
      </div>
    </div>
  );
}
