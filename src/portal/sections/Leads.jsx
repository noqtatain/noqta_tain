import React, { useMemo, useState } from 'react';
import { addItem, getAll, removeItem } from '@/portal/storage';

export default function Leads(){
  const initial = useMemo(()=>{
    try {return JSON.parse(localStorage.getItem('contact_requests')||'[]').map(l=>({
      id: l.id || `${Date.now()}_${Math.random()}`, name:l.name, email:l.email, phone:l.phone, company:l.company, service:l.service_interest, created_at:l.created_at
    }))} catch {return []}
  },[]);

  const [leads, setLeads] = useState(()=>{
    const saved = getAll('leads');
    if (!saved.length && initial.length) {
      initial.forEach(x=> addItem('leads', x));
      return getAll('leads');
    }
    return saved;
  });

  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'' });

  const submit = (e)=>{
    e.preventDefault();
    const item = addItem('leads', form);
    setLeads([item, ...leads]);
    setForm({ name:'', email:'', phone:'', company:'' });
  }

  const del = (id)=>{
    removeItem('leads', id);
    setLeads(leads.filter(l=>l.id!==id));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">العملاء المحتملين</h2>
      <form onSubmit={submit} className="grid md:grid-cols-5 gap-2 mb-4">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الاسم"/>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="البريد"/>
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الهاتف"/>
        <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الشركة"/>
        <button className="h-10 rounded-lg bg-violet-600 text-white">إضافة</button>
      </form>
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-right text-slate-500">
              <th className="p-3">الاسم</th><th>البريد</th><th>الهاتف</th><th>الشركة</th><th>وقت الإضافة</th><th></th>
            </tr>
          </thead>
          <tbody>
            {leads.map(l=> (
              <tr key={l.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="p-3">{l.name}</td>
                <td>{l.email}</td>
                <td>{l.phone}</td>
                <td>{l.company}</td>
                <td>{l.created_at ? new Date(l.created_at).toLocaleString('ar-SA'): '-'}</td>
                <td className="text-left"><button onClick={()=>del(l.id)} className="text-red-500">حذف</button></td>
              </tr>
            ))}
            {!leads.length && <tr><td className="p-3 text-slate-400" colSpan={6}>لا يوجد بيانات</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
