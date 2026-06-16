import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, CheckSquare, FileText, Home, Inbox, LogOut, MessageSquare, Moon, ScrollText, Sun, Users, Newspaper } from 'lucide-react';
import Dashboard from '@/portal/sections/Dashboard';
import ContentManager from '@/portal/sections/ContentManager';
import Leads from '@/portal/sections/Leads';
import ClientRequests from '@/portal/sections/ClientRequests';
import SupportTickets from '@/portal/sections/SupportTickets';
import Tasks from '@/portal/sections/Tasks';
import Calendar from '@/portal/sections/Calendar';
import StrategicPlan from '@/portal/sections/StrategicPlan';
import BlogManager from '@/portal/sections/BlogManager';

const sections = [
  { key: 'dashboard', label: 'لوحة التحكم', icon: Home },
  { key: 'strategic-plan', label: 'الخطة الاستراتيجية', icon: ScrollText },
  { key: 'content', label: 'إدارة المحتوى', icon: FileText },
  { key: 'blog', label: 'المدونة', icon: Newspaper },
  { key: 'leads', label: 'العملاء المحتملين', icon: Users },
  { key: 'requests', label: 'طلبات العملاء', icon: Inbox },
  { key: 'tickets', label: 'تذاكر الدعم', icon: MessageSquare },
  { key: 'tasks', label: 'مهام الموظفين', icon: CheckSquare },
  { key: 'calendar', label: 'التقويم', icon: CalendarDays },
];

export default function PortalLayout(){
  const [current, setCurrent] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const user = useMemo(()=>{
    try {return JSON.parse(localStorage.getItem('portal_user')||'{}')} catch{return {}};
  },[]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const logout = ()=>{
    localStorage.removeItem('portal_user');
    window.location.reload();
  };

  const render = () => {
    switch(current){
      case 'content': return <ContentManager/>;
      case 'leads': return <Leads/>;
      case 'requests': return <ClientRequests/>;
      case 'tickets': return <SupportTickets/>;
      case 'tasks': return <Tasks/>;
      case 'calendar': return <Calendar/>;
      case 'strategic-plan': return <StrategicPlan/>;
      case 'blog': return <BlogManager/>;
      default: return <Dashboard/>;
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 hidden md:flex flex-col h-screen sticky top-0 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4 gap-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">نقطتين</span>
              <span className="text-violet-500 text-3xl font-bold">..</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="تبديل الوضع"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          {sections.map(s=>{
            const Icon = s.icon; const active = current===s.key;
            return (
              <button key={s.key} onClick={()=>setCurrent(s.key)} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${active? 'bg-violet-600 text-white':'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <Icon className="w-4 h-4"/>
                <span>{s.label}</span>
              </button>
            );
          })}
          <div className="mt-auto">
            <div className="text-xs text-slate-500 mb-2">{user.email}</div>
            <button onClick={logout} className="w-full flex items-center justify-center gap-2 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
              <LogOut className="w-4 h-4"/> خروج
            </button>
          </div>
        </aside>
        {/* Main */}
        <main className="flex-1 p-4 md:p-8">
          {render()}
        </main>
      </div>
    </div>
  );
}
