import dpowerProposalUrl from './dpower.html?url';

export default function DpowerProposal() {
  return (
    <iframe
      src={dpowerProposalUrl}
      title="D Power Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
