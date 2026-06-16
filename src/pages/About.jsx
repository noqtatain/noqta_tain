import React from 'react';
import { motion } from 'framer-motion';
import VisionMission from '../components/about/VisionMission';
import Methodology from '../components/about/Methodology';
import WhatMakesUsDifferent from '../components/about/WhatMakesUsDifferent';
import CTASection from '../components/home/CTASection';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-4 block"
            >
              من نحن
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              شريكك في رحلة النمو الرقمي
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              نقطتين شركة متخصصة في التسويق الرقمي وأتمتة المبيعات. نؤمن بأن النجاح الرقمي 
              يبدأ من الفهم العميق للسوق والجمهور، ويُبنى على أسس متينة من التخطيط والتنفيذ المنظم.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                لا نبيع خدمات عشوائية، بل نعمل كشريك يساعد عملاءنا على فهم سوقهم وجمهورهم، 
                وبناء حضور رقمي فعّال، وتحويل جهودهم التسويقية إلى نتائج حقيقية وقابلة للقياس.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                نتبنى منهجية واضحة تبدأ بالفهم، مرورًا بالتنظيم والتنفيذ، وصولًا للأتمتة 
                والنتائج. هذه المنهجية تضمن أن كل خطوة نتخذها مبنية على أساس صلب ومدروس.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <VisionMission />
      <Methodology />
      <WhatMakesUsDifferent />
      <CTASection />
    </div>
  );
}