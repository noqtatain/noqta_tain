import whyUsPageUrl from './why-us.html?url';
import { useLanguage } from '@/lib/i18n';

export default function WhyUs() {
  const { lang, t } = useLanguage();
  const src = lang === 'en' ? `${whyUsPageUrl}?lang=en` : whyUsPageUrl;

  return (
    <iframe
      key={lang}
      src={src}
      title={t('nav.whyUs')}
      className="w-full border-0"
      style={{ minHeight: '100vh' }}
    />
  );
}
