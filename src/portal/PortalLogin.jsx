import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';

const VALID_EMAIL = 'emadradman.dev@gmail.com';
const VALID_PASSWORD = '12312312';

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setError(null);
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem('portal_user', JSON.stringify({ email }));
      window.location.reload();
    } else {
      setError('بيانات الدخول غير صحيحة');
    }
  }

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">الدخول إلى البوابة الداخلية</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">للاستخدام الداخلي فقط</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <Mail className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="البريد الإلكتروني" className="w-full pr-9 px-3 py-2 h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" />
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="كلمة المرور" className="w-full pr-9 px-3 py-2 h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <motion.button whileTap={{scale:0.98}} className="w-full h-11 rounded-lg bg-slate-900 dark:bg-violet-600 text-white font-medium">دخول</motion.button>
        </form>
      </div>
    </div>
  );
}
