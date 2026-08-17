import finooksaProposalUrl from './finooksa.html?url';

export default function FinooksaProposal() {
  return (
    <iframe
      src={finooksaProposalUrl}
      title="Finooksa Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
