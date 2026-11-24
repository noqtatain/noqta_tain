import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';


export default function CTASection() {
  const { t, isRTL } = useLanguage();
  const ForwardArrow = isRTL ? ArrowLeft : ArrowRight;
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm mb-8">
              <MessageCircle size={16} />
              <span>{t('cta.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              {t('cta.text')}
            </p>

            <Link
              to={createPageUrl('Contact')}
              className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-base font-medium hover:bg-violet-100 transition-all duration-300 hover:shadow-xl"
            >
              {t('cta.button')}
              <ForwardArrow size={18} className="rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}