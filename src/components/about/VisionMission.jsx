import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';


export default function VisionMission() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-violet-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
            <p className="text-slate-300 leading-relaxed">
              {t('about.vision.text')}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-10 text-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
            <p className="text-violet-100 leading-relaxed">
              {t('about.mission.text')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}