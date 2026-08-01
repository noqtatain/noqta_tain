export const WHATSAPP_NUMBER = '966543569492';

export const BITRIX_WEBHOOK_URL =
  'https://dpower.bitrix24.com/rest/40777/zi0yq8dplp7xtoew/crm.lead.add.json';

export const WORKSHOP_TITLE = 'الأدوات التقنية للتاجر في المبيعات وخدمة العملاء';
export const WORKSHOP_DATE_LABEL = 'السبت ١ أغسطس ٢٠٢٦';

// Soft client-side gate only — this ships inside the JS bundle, so it keeps
// attendees/casual visitors out but is not a real secret. Override via
// VITE_WORKSHOP_PASSPHRASE if you want to change it without editing code.
export const ADMIN_PASSPHRASE = import.meta.env.VITE_WORKSHOP_PASSPHRASE || 'noqta2dots';

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

export const ROUTES = {
  hub: '/agenda',
  slides: '/slides',
  diagnostic: '/activities/diagnostic',
  scenario: '/activities/scenario',
  gapMap: '/activities/gap-map',
  book: '/book',
  feedback: '/feedback',
  register: '/workshop',
};
