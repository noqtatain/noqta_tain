import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Sparkles, TrendingUp, Zap, ChevronLeft, ChevronRight, ChevronUp, Target, Users, BarChart3, Lightbulb, MessageCircle, ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 'hero',
    component: HeroSlide
  },
  {
    id: 'services',
    component: ServicesSlide
  },
  {
    id: 'why-us',
    component: WhyUsSlide
  },
  {
    id: 'cta',
    component: CTASlide
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0"
        >
          <div className="h-full overflow-y-auto pb-32 pt-6">
            <CurrentSlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-4">
        {currentSlide > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={prevSlide}
            className="p-2 bg-white/70 dark:bg-slate-800/70 rounded-full shadow-md hover:bg-white dark:hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous section"
          >
            <ChevronUp className="text-slate-900 dark:text-white" size={18} />
          </motion.button>
        )}

        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="relative group"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide ? (
              <motion.div
                layoutId="activeSlide"
                className="w-2 h-8 rounded-lg bg-violet-600 dark:bg-violet-400 ring-4 ring-violet-200 dark:ring-violet-900/50 shadow-lg"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : (
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 group-hover:w-2 group-hover:h-6 group-hover:rounded-lg transition-all" />
            )}
          </motion.button>
        ))}

        {currentSlide < slides.length - 1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={nextSlide}
            className="p-2 bg-white/70 dark:bg-slate-800/70 rounded-full shadow-md hover:bg-white dark:hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next section"
          >
            <ChevronDown className="text-slate-900 dark:text-white" size={18} />
          </motion.button>
        )}
      </div>

    </div>
  );
}

// Slide Components
function HeroSlide() {
  const steps = ['الفهم', 'التنظيم', 'التنفيذ', 'الأتمتة', 'النتائج'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-200/30 dark:bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/50 dark:border-slate-800/50 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>تسويق وأتمتة</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          نقطتين
          <span className="text-violet-500">..</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 mb-4 font-light"
        >
          نبدأ من الفهم... وننتهي بنتائج قابلة للقياس
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10"
        >
          نقدم خدمات التسويق الرقمي، إدارة المحتوى، والإعلانات المدفوعة مع أتمتة ذكية وتقارير أداء واضحة. نركز على زيادة المبيعات
          وبناء حضور قوي يميز علامتك عن المنافسين في السوق السعودي.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-slate-500 dark:text-slate-500 mb-8 max-w-2xl mx-auto"
        >
          شريكك في بناء حضور رقمي فعّال وتحويل جهودك التسويقية إلى نتائج حقيقية
        </motion.p>

        {/* Methodology Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-full border-2 border-violet-200 dark:border-violet-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{step}</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 dark:bg-violet-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {index + 1}
                </motion.div>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 1.15 + index * 0.1 }}
                >
                  <ArrowLeft size={20} className="text-violet-400 dark:text-violet-600" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl('Contact')}
            className="group bg-slate-900 dark:bg-violet-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 dark:hover:bg-violet-700 transition-all duration-300 hover:shadow-xl flex items-center gap-2"
          >
            احجز استشارة مجانية
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-12 text-sm text-slate-400 dark:text-slate-600"
        >
          استخدم الأسهم للتنقل
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSlide() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: TrendingUp,
      title: 'التسويق الرقمي',
      description: 'من دراسة السوق إلى بناء الهوية وإدارة الحضور الرقمي بشكل متكامل',
      color: 'violet',
      details: [
        'دراسة وتحليل السوق والمنافسين',
        'إعداد الخطة التسويقية المتكاملة',
        'تصميم الهوية البصرية',
        'تسويق وسائل التواصل الاجتماعي',
        'تصميم وتطوير المواقع الإلكترونية',
        'إنشاء صفحات الهبوط الفعّالة'
      ]
    },
    {
      icon: Zap,
      title: 'أتمتة المبيعات',
      description: 'تحويل العمليات اليدوية إلى أنظمة ذكية تعمل على مدار الساعة',
      color: 'indigo',
      details: [
        'أتمتة التواصل عبر جميع القنوات',
        'إدارة المجتمعات الرقمية',
        'تنظيم رحلة العميل كاملة',
        'تكامل التسويق مع المبيعات',
        'تقارير وتحليلات الأداء',
        'ربط الأنظمة والمنصات المختلفة'
      ]
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-4 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            حلول متكاملة لنموك الرقمي
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 md:w-8 md:h-8 text-${service.color}-600 dark:text-${service.color}-400`} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base mb-4">
                {service.description}
              </p>

              {/* Expand Button */}
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-medium text-sm hover:gap-3 transition-all"
              >
                <span>{expandedService === index ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}</span>
                <motion.div
                  animate={{ rotate: expandedService === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              {/* Expandable Details */}
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {service.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function WhyUsSlide() {
  const reasons = [
    { icon: Lightbulb, title: 'نبدأ بالفهم', description: 'لا نبيع خدمات عشوائية، بل نفهم أولاً' },
    { icon: Target, title: 'نركز على النتائج', description: 'كل شيء مرتبط بأهداف واضحة' },
    { icon: Users, title: 'شراكة حقيقية', description: 'نعمل معك كشريك نمو' },
    { icon: BarChart3, title: 'قرارات مبنية على البيانات', description: 'نعتمد على التحليل لا التخمين' }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-slate-900 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-medium mb-4 block">
            لماذا نقطتين؟
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ما يميزنا عن الآخرين
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-600/20 group-hover:border-violet-500/30 transition-all duration-300"
              >
                <reason.icon className="w-9 h-9 text-violet-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
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

function CTASlide() {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900 dark:bg-slate-800 rounded-3xl p-12 sm:p-16 text-center overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm mb-8"
            >
              <MessageCircle size={16} />
              <span>نبدأ بمحادثة</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              مستعد لبناء نمو رقمي حقيقي؟
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto"
            >
              احجز استشارة مجانية لنفهم احتياجاتك ونضع معًا خطة واضحة لتحقيق أهدافك
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-base font-medium hover:bg-violet-100 transition-all duration-300 hover:shadow-xl"
              >
                احجز استشارتك المجانية
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
