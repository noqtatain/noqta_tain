import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CONTENT = {
  ar: {
    dir: 'rtl',
    toggleLabel: 'English',
    title: 'سياسة الخصوصية',
    intro:
      'نحن في نقطتين نولي أهمية كبيرة لخصوصيتك. تهدف سياسة الخصوصية هذه إلى شرح كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا وخدماتنا.',
    sections: [
      {
        heading: 'المعلومات التي نجمعها',
        list: [
          'معلومات الاتصال مثل الاسم والبريد الإلكتروني ورقم الهاتف.',
          'معلومات الاستخدام مثل الصفحات التي تزورها والإجراءات التي تقوم بها على الموقع.',
        ],
      },
      {
        heading: 'كيفية استخدام المعلومات',
        list: [
          'تقديم وتحسين خدماتنا.',
          'التواصل معك بشأن الاستفسارات أو الطلبات.',
          'تحليل استخدام الموقع لتحسين تجربة المستخدم.',
        ],
      },
      {
        heading: 'حماية المعلومات',
        text: 'نلتزم بحماية معلوماتك الشخصية من الوصول أو الاستخدام غير المصرح به من خلال إجراءات أمنية مناسبة.',
      },
      {
        heading: 'مشاركة المعلومات',
        text: 'لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التي يتطلبها القانون أو لتحسين خدماتنا بعد موافقتك.',
      },
      {
        heading: 'حقوقك',
        text: 'يحق لك الوصول إلى معلوماتك الشخصية أو تعديلها أو حذفها في أي وقت من خلال التواصل معنا.',
      },
      {
        heading: 'التغييرات على سياسة الخصوصية',
        text: 'قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.',
      },
    ],
    contact: {
      heading: 'التواصل معنا',
      before: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر',
    },
  },
  en: {
    dir: 'ltr',
    toggleLabel: 'العربية',
    title: 'Privacy Policy',
    intro:
      'At Noqtatain, we place great importance on your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.',
    sections: [
      {
        heading: 'Information We Collect',
        list: [
          'Contact information such as your name, email address, and phone number.',
          'Usage information such as the pages you visit and the actions you take on the website.',
        ],
      },
      {
        heading: 'How We Use Information',
        list: [
          'Providing and improving our services.',
          'Communicating with you regarding inquiries or requests.',
          'Analyzing website usage to improve the user experience.',
        ],
      },
      {
        heading: 'Protecting Your Information',
        text: 'We are committed to protecting your personal information from unauthorized access or use through appropriate security measures.',
      },
      {
        heading: 'Sharing Information',
        text: 'We do not share your personal information with third parties except where required by law or to improve our services after obtaining your consent.',
      },
      {
        heading: 'Your Rights',
        text: 'You have the right to access, modify, or delete your personal information at any time by contacting us.',
      },
      {
        heading: 'Changes to This Privacy Policy',
        text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page.',
      },
    ],
    contact: {
      heading: 'Contact Us',
      before: 'If you have any questions about this Privacy Policy, please contact us at',
    },
  },
};

export default function PrivacyPolicy({ initialLang = 'ar' }) {
  const [lang, setLang] = useState(initialLang);
  const navigate = useNavigate();
  const t = CONTENT[lang];
  const listPadding = t.dir === 'rtl' ? 'pr-6' : 'pl-6';

  const handleToggle = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    navigate(nextLang === 'en' ? '/privacy-policy/en' : '/privacy-policy');
    setLang(nextLang);
  };

  return (
    <div dir={t.dir} lang={lang} className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={handleToggle}
          className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-violet-600"
        >
          {t.toggleLabel}
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <p className="mb-4">{t.intro}</p>
      {t.sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-xl font-semibold mt-8 mb-2">{section.heading}</h2>
          {section.list ? (
            <ul className={`list-disc mb-4 ${listPadding}`}>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">{section.text}</p>
          )}
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t.contact.heading}</h2>
      <p>
        {t.contact.before}{' '}
        <a href="mailto:info@noqtatain.com" className="text-violet-600 hover:underline">
          info@noqtatain.com
        </a>
        .
      </p>
    </div>
  );
}
