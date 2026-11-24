import React from 'react';
import { useLanguage } from '@/lib/i18n';

const CONTENT = {
  ar: {
    title: 'شروط الاستخدام',
    intro: 'يرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام موقع نقطتين أو أي من خدماتنا.',
    sections: [
      { heading: 'قبول الشروط', text: 'باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.' },
      {
        heading: 'استخدام الموقع',
        list: [
          'يجب استخدام الموقع لأغراض قانونية فقط.',
          'يُمنع إساءة استخدام أي جزء من الموقع أو محاولة الوصول غير المصرح به إلى أي نظام أو بيانات.',
        ],
      },
      { heading: 'حقوق الملكية الفكرية', text: 'جميع المحتويات والمواد على هذا الموقع مملوكة لنقطتين أو للجهات المرخصة لها ولا يجوز نسخها أو إعادة استخدامها دون إذن كتابي.' },
      { heading: 'حدود المسؤولية', text: 'نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن استخدامك للموقع أو الاعتماد على أي من محتوياته.' },
      { heading: 'التعديلات على الشروط', text: 'يحق لنا تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات على هذه الصفحة ويعتبر استمرارك في استخدام الموقع موافقة على الشروط المعدلة.' },
      { heading: 'القانون المعمول به', text: 'تخضع هذه الشروط وتفسر وفقًا للقوانين المعمول بها في المملكة العربية السعودية.' },
    ],
  },
  en: {
    title: 'Terms of Use',
    intro: 'Please read these terms of use carefully before using the Noqtatain website or any of our services.',
    sections: [
      { heading: 'Acceptance of terms', text: 'By using this website, you agree to be bound by these terms and conditions.' },
      {
        heading: 'Use of the website',
        list: [
          'The website must be used for lawful purposes only.',
          'Misusing any part of the website or attempting unauthorized access to any system or data is prohibited.',
        ],
      },
      { heading: 'Intellectual property', text: 'All content and materials on this website are owned by Noqtatain or its licensors and may not be copied or reused without written permission.' },
      { heading: 'Limitation of liability', text: 'We are not liable for any direct or indirect damages that may result from your use of the website or reliance on any of its content.' },
      { heading: 'Changes to the terms', text: 'We may modify these terms at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the modified terms.' },
      { heading: 'Governing law', text: 'These terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.' },
    ],
  },
};

export default function TermsOfService() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.ar;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-slate-900 dark:text-slate-100">
      <h1 className="text-3xl font-bold mb-6">{c.title}</h1>
      <p className="mb-4">{c.intro}</p>
      {c.sections.map((section) => (
        <React.Fragment key={section.heading}>
          <h2 className="text-xl font-semibold mt-8 mb-2">{section.heading}</h2>
          {section.list ? (
            <ul className="list-disc ps-6 mb-4">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">{section.text}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
