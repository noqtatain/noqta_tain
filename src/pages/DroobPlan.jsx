import droobPlanPageUrl from './droob_plan.html?url';

export default function DroobPlan() {
  return (
    <iframe
      src={droobPlanPageUrl}
      title="Droob Plan"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
