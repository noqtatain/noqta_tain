import React from 'react';
import { motion } from 'framer-motion';
import { Search, FolderKanban, PlayCircle, Cpu, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';


const stepMeta = [
  { icon: Search, number: '01' },
  { icon: FolderKanban, number: '02' },
  { icon: PlayCircle, number: '03' },
  { icon: Cpu, number: '04' },
  { icon: TrendingUp, number: '05' },
];

export default function Methodology() {
  const { t } = useLanguage();
  const steps = t('about.methodology.steps').map((step, i) => ({ ...step, ...stepMeta[i] }));
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 text-sm font-medium mb-4 block"
          >
            {t('about.methodology.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            {t('about.methodology.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            {t('about.methodology.subtitle')}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto shadow-sm group-hover:shadow-lg transition-shadow">
                    <step.icon className="w-8 h-8 text-violet-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}