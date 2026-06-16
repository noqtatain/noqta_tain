import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: 'info@noqtatain.com',
    link: 'mailto:info@noqtatain.com'
  },
  {
    icon: Phone,
    title: 'الهاتف',
    value: '+966 54 356 9492',
    link: 'tel:+966543569492'
  },
  {
    icon: MessageCircle,
    title: 'واتساب',
    value: '+966 54 356 9492',
    link: 'https://wa.me/966543569492'
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    value: 'الأحد - الخميس: 9 ص - 6 م',
    link: null
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          نبدأ بمحادثة
        </h2>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          نؤمن بأن الفهم يأتي أولًا. لذلك نبدأ دائمًا باستشارة مجانية لفهم احتياجاتك 
          وتقديم الحل الأنسب لك.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.link ? (
              <a
                href={item.link}
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-950 transition-all duration-300 border border-transparent hover:border-slate-100 dark:hover:border-slate-600"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.title}</p>
                  <p dir="ltr" className="font-medium text-slate-900 dark:text-white text-right">{item.value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.title}</p>
                  <p dir="ltr" className="font-medium text-slate-900 dark:text-white text-right">{item.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-6 text-white mt-8"
      >
        <h3 className="font-bold mb-2">استشارة مجانية</h3>
        <p className="text-violet-100 text-sm leading-relaxed">
          نقدم استشارة مجانية لفهم احتياجاتك ووضع خطة عمل مبدئية دون أي التزام.
        </p>
      </motion.div>
    </div>
  );
}