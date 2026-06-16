import whyUsPageUrl from './why-us.html?url';

export default function WhyUs() {
  return (
    <iframe
      src={whyUsPageUrl}
      title="Why Us"
      className="w-full border-0"
      style={{ minHeight: '100vh' }}
    />
  );
}
