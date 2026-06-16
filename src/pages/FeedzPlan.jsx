import feedzPlanPageUrl from './feedz_marketing_plan.html?url';

export default function FeedzPlan() {
  return (
    <iframe
      src={feedzPlanPageUrl}
      title="Feedz Marketing Plan"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
