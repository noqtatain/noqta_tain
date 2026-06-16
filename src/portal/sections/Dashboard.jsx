import React from 'react';
import { Users, ClipboardList, Inbox, MessageSquare } from 'lucide-react';
import { getAll } from '@/portal/storage';

export default function Dashboard(){
  const leads = getAll('leads');
  const requests = getAll('requests');
  const tickets = getAll('tickets');
  const tasks = getAll('tasks');
  const events = getAll('events');

  const cards = [
    { label:'إجمالي العملاء', value: leads.length, icon: Users, color:'bg-orange-100 text-orange-700' },
    { label:'طلبات العملاء', value: requests.length, icon: Inbox, color:'bg-violet-100 text-violet-700' },
    { label:'تذاكر الدعم', value: tickets.length, icon: MessageSquare, color:'bg-blue-100 text-blue-700' },
    { label:'المهام النشطة', value: tasks.filter(t=>t.status!=='done').length, icon: ClipboardList, color:'bg-amber-100 text-amber-700' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">لوحة التحكم</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((c,idx)=>{
          const Icon = c.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.color}`}><Icon className="w-5 h-5"/></div>
                <div>
                  <div className="text-sm text-slate-500">{c.label}</div>
                  <div className="text-xl font-bold">{c.value}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-3">آخر المهام</div>
          <ul className="space-y-2">
            {tasks.slice(0,5).map(t=> (
              <li key={t.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">{t.title}</span>
                <span className="text-slate-400">{t.status==='done'?'منجزة':'قيد التنفيذ'}</span>
              </li>
            ))}
            {!tasks.length && <div className="text-slate-400 text-sm">لا توجد مهام</div>}
          </ul>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-3">أحداث التقويم القادمة</div>
          <ul className="space-y-2">
            {events.slice(0,5).map(e=> (
              <li key={e.id} className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">{e.title}</span>
                <span className="text-slate-400">{new Date(e.date).toLocaleDateString('ar-SA')}</span>
              </li>
            ))}
            {!events.length && <div className="text-slate-400 text-sm">لا توجد أحداث</div>}
          </ul>
        </div>
      </div>
    </div>
  );
}
