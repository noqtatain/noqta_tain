import dpowerFinancialUrl from './dpower-financial.html?url';

export default function DpowerFinancialProposal() {
  return (
    <iframe
      src={dpowerFinancialUrl}
      title="D Power Financial Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
