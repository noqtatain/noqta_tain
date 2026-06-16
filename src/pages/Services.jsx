import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import ServiceDetails from '../components/services/ServiceDetails';
import CTASection from '../components/home/CTASection';

const mainServices = [
  {
    icon: TrendingUp,
    title: 'التسويق الرقمي',
    description: 'بناء حضور رقمي قوي يحقق نتائج',
    bgGradient: 'bg-gradient-to-br from-violet-600 to-violet-700',
    features: [
      'دراسة وتحليل السوق والمنافسين',
      'إعداد خطة تسويقية متكاملة',
      'تصميم الهوية البصرية',
      'إدارة وسائل التواصل الاجتماعي',
      'تصميم وتطوير المواقع الإلكترونية',
      'إنشاء صفحات الهبوط الفعّالة',
      'تهيئة نظام استقبال الطلبات'
    ]
  },
  {
    icon: Zap,
    title: 'أتمتة المبيعات',
    description: 'تحويل العمليات اليدوية إلى أنظمة ذكية',
    bgGradient: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
    features: [
      'أتمتة التواصل عبر جميع القنوات',
      'إدارة المجتمعات الرقمية',
      'تنظيم رحلة العميل كاملة',
      'تكامل التسويق مع المبيعات',
      'تقارير وتحليلات الأداء',
      'ربط الأنظمة والمنصات المختلفة',
      'إشعارات وتنبيهات ذكية'
    ]
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-violet-200/20 dark:bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-4 block"
            >
              خدماتنا
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              حلول متكاملة لنموك الرقمي
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              نقدم مجموعة شاملة من الخدمات المصممة لمساعدتك على بناء حضور رقمي قوي 
              وتحويل جهودك التسويقية إلى نتائج ملموسة
            </motion.p>
          </div>

          {/* Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <ServiceDetails />

      {/* CTA */}
      <CTASection />
    </div>
  );
}