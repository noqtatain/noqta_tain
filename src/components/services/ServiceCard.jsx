import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
    >
      {/* Header */}
      <div className={`p-8 ${service.bgGradient}`}>
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/80">{service.description}</p>
      </div>

      {/* Content */}
      <div className="p-8">
        <ul className="space-y-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Check className="w-3 h-3 text-violet-600" />
              </div>
              <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}