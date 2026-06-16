import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'نبدأ بالفهم',
    description: 'لا نبيع خدمات عشوائية، بل نفهم أولاً طبيعة عملك وسوقك وجمهورك'
  },
  {
    icon: Target,
    title: 'نركز على النتائج',
    description: 'كل ما نقوم به مرتبط بأهداف واضحة وقابلة للقياس'
  },
  {
    icon: Users,
    title: 'شراكة حقيقية',
    description: 'نعمل معك كشريك نمو، لا كمزود خدمة'
  },
  {
    icon: BarChart3,
    title: 'قرارات مبنية على البيانات',
    description: 'نعتمد على التحليل والبيانات لا التخمين والتجربة العشوائية'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-400 text-sm font-medium mb-4 block"
          >
            لماذا نقطتين؟
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            ما يميزنا عن الآخرين
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            نؤمن بأن النجاح الرقمي يبدأ من الفهم العميق وينتهي بنتائج ملموسة
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-600/20 group-hover:border-violet-500/30 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}