import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, ArrowLeft } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'التسويق الرقمي',
    description: 'من دراسة السوق إلى بناء الهوية وإدارة الحضور الرقمي بشكل متكامل',
    features: ['تحليل السوق والمنافسين', 'الخطة التسويقية', 'الهوية البصرية', 'إدارة السوشال ميديا'],
    color: 'violet'
  },
  {
    icon: Zap,
    title: 'أتمتة المبيعات',
    description: 'تحويل العمليات اليدوية إلى أنظمة ذكية تعمل على مدار الساعة',
    features: ['أتمتة التواصل', 'رحلة العميل', 'تكامل الأنظمة', 'تقارير الأداء'],
    color: 'indigo'
  }
];

export default function ServicesPreview() {
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
            خدماتنا
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            حلول متكاملة لنموك الرقمي
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            نقدم خدمات تسويق رقمي وأتمتة مبيعات مصممة لتحقيق نتائج ملموسة
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-${service.color}-100 flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 text-${service.color}-600`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={createPageUrl('Services')}
                className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:text-violet-600 transition-colors"
              >
                اكتشف المزيد
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}