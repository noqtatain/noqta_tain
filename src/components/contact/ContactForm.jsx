import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle } from 'lucide-react';

const serviceOptions = [
  { value: 'digital_marketing', label: 'التسويق الرقمي' },
  { value: 'sales_automation', label: 'أتمتة المبيعات' },
  { value: 'both', label: 'كلاهما' },
  { value: 'consultation', label: 'استشارة فقط' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const selectedServiceLabel = serviceOptions.find(
      (option) => option.value === formData.service_interest
    )?.label;

    // Local persistence to emulate request logging
    const persistLocally = (async () => {
      try {
        const key = 'contact_requests';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ ...formData, created_at: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (error) {
        console.error('Local persistence failed:', error);
      }
    })();

    const syncPortal = fetch('https://portal.noqtatain.com/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_interest: formData.service_interest,
        message: formData.message,
        source: 'website'
      })
    }).catch((error) => {
      console.error('Portal lead sync failed:', error);
    });

    const sendToBitrix = async () => {
      const bitrixPayload = new URLSearchParams();
      bitrixPayload.append('fields[TITLE]', `نقطتين - ${selectedServiceLabel || 'طلب تواصل'}`);
      bitrixPayload.append('fields[NAME]', formData.name);
      bitrixPayload.append(
        'fields[COMMENTS]',
        `${formData.message || 'بدون رسالة'}\nالشركة: ${formData.company || 'غير محددة'}\nالخدمة: ${selectedServiceLabel || 'غير محددة'}`
      );
      bitrixPayload.append('fields[SOURCE_ID]', 'WEB');
      bitrixPayload.append('fields[SOURCE_DESCRIPTION]', 'website');

      if (formData.company) {
        bitrixPayload.append('fields[COMPANY_TITLE]', formData.company);
      }

      if (formData.phone) {
        bitrixPayload.append('fields[PHONE][0][VALUE]', formData.phone);
        bitrixPayload.append('fields[PHONE][0][VALUE_TYPE]', 'WORK');
      }

      if (formData.email) {
        bitrixPayload.append('fields[EMAIL][0][VALUE]', formData.email);
        bitrixPayload.append('fields[EMAIL][0][VALUE_TYPE]', 'WORK');
      }

      bitrixPayload.append('params[REGISTER_SONET_EVENT]', 'Y');

      const bitrixResponse = await fetch('https://dpower.bitrix24.com/rest/40777/b6wx9u0nn939mnw0/crm.lead.add.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bitrixPayload
      });

      const bitrixResult = await bitrixResponse.json();
      if (!bitrixResponse.ok || bitrixResult.error) {
        throw new Error(bitrixResult.error_description || 'Bitrix24 lead creation failed');
      }
    };

    try {
      await Promise.allSettled([persistLocally, syncPortal]);
      await sendToBitrix();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('تعذر إرسال الطلب إلى نظام المتابعة. حاول مرة أخرى أو تواصل معنا مباشرة.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          شكرًا لتواصلك معنا!
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          تم استلام طلبك بنجاح. سنتواصل معك في أقرب وقت ممكن.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError(null);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service_interest: '',
              message: ''
            });
          }}
          variant="outline"
        >
          إرسال طلب جديد
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">الاسم الكامل *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:border-violet-500 focus:ring-violet-500"
              placeholder="محمد أحمد"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">البريد الإلكتروني *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:border-violet-500 focus:ring-violet-500"
              placeholder="example@company.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">رقم الهاتف *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:border-violet-500 focus:ring-violet-500"
              placeholder="05XXXXXXXX"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-slate-700 dark:text-slate-300">اسم الشركة</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="h-12 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:border-violet-500 focus:ring-violet-500"
              placeholder="اسم شركتك"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-slate-700 dark:text-slate-300">الخدمة المطلوبة *</Label>
          <Select value={formData.service_interest} onValueChange={(val) => setFormData(prev => ({ ...prev, service_interest: val }))}>
            <SelectTrigger className="h-12 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              <SelectValue placeholder="اختر الخدمة" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">رسالتك</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white min-h-[120px] focus:border-violet-500 focus:ring-violet-500"
            placeholder="اخبرنا باحتياجاتك"
          />
        </div>

        {submitError && (
          <p className="text-red-500 text-sm">{submitError}</p>
        )}

        <Button type="submit" className="w-full h-12 rounded-xl" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري الإرسال...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              إرسال الطلب
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
