import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    traditional: 'بيع خدمات جاهزة',
    noqtatayn: 'شراكة مبنية على الفهم'
  },
  {
    traditional: 'وعود مبهمة',
    noqtatayn: 'نتائج قابلة للقياس'
  },
  {
    traditional: 'تجربة عشوائية',
    noqtatayn: 'قرارات مبنية على البيانات'
  },
  {
    traditional: 'تنفيذ فقط',
    noqtatayn: 'تخطيط وتنفيذ وأتمتة'
  },
  {
    traditional: 'علاقة مزود خدمة',
    noqtatayn: 'علاقة شريك نمو'
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 text-sm font-medium mb-4 block"
          >
            ما يميزنا
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            الفرق بيننا وبين الآخرين
          </motion.h2>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-100 rounded-2xl p-4 text-center">
              <span className="text-slate-500 font-medium">الطريقة التقليدية</span>
            </div>
            <div className="bg-violet-600 rounded-2xl p-4 text-center">
              <span className="text-white font-medium">نقطتين</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-slate-600 text-sm">{item.traditional}</span>
                </div>
                <div className="bg-violet-50 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-slate-900 text-sm font-medium">{item.noqtatayn}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}