import sisterCompaniesUrl from './sister-companies-marketing.html?url';

export default function SisterCompaniesMarketing() {
  return (
    <iframe
      src={sisterCompaniesUrl}
      title="Sister Companies Marketing"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
