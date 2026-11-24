import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Palette, 
  Share2, 
  Globe, 
  FileCheck,
  Phone,
  MessageCircle,
  AtSign,
  Mail,
  Users,
  Smartphone,
  GitBranch,
  Link2,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';


const digitalMarketingIcons = [Search, FileText, Palette, Share2, Globe, FileCheck];

const salesAutomationIcons = [Phone, MessageCircle, AtSign, Mail, Users, Smartphone, GitBranch, Link2, BarChart3];

export default function ServiceDetails() {
  const { t } = useLanguage();
  const digitalMarketingServices = t('services.details.marketing').map((item, i) => ({ ...item, icon: digitalMarketingIcons[i] }));
  const salesAutomationServices = t('services.details.automation').map((item, i) => ({ ...item, icon: salesAutomationIcons[i] }));
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Marketing */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t('services.details.first')}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('services.details.marketingTitle')}</h2>
            <p className="text-slate-500 max-w-2xl">
              {t('services.details.marketingSubtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sales Automation */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t('services.details.second')}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('services.details.automationTitle')}</h2>
            <p className="text-slate-500 max-w-2xl">
              {t('services.details.automationSubtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesAutomationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}