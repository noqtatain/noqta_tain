import workshopPageUrl from './workshop-bitrix24-zid.html?url';

export default function WorkshopBitrix24Zid() {
  return (
    <iframe
      src={workshopPageUrl}
      title="ورشة الأدوات التقنية للتاجر في المبيعات وخدمة العملاء"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
