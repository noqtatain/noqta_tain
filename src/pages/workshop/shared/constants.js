export const WHATSAPP_NUMBER = '966543569492';

export const BITRIX_REST_BASE = 'https://dpower.bitrix24.com/rest/40777/zi0yq8dplp7xtoew/';

export const BITRIX_WEBHOOK_URL = `${BITRIX_REST_BASE}crm.lead.add.json`;

// Bitrix24 user ID behind the webhook above — used as the default appointment
// owner when a deal/lead has no assigned responsible person.
export const BITRIX_DEFAULT_RESPONSIBLE_ID = 40777;

// The "نقطتين.." sales pipeline (crm.dealcategory) — /15min only matches an
// existing contact's deal inside this specific pipeline, not any pipeline.
export const BITRIX_DEAL_CATEGORY_ID = 37;

// "15MIN INVITE" stage inside that pipeline (crm.dealcategory.stage.list),
// already set up in Bitrix24 — matched submissions move the deal here.
export const BITRIX_15MIN_STAGE_ID = 'C37:UC_3M69HS';

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
  consultation: '/15min',
};
