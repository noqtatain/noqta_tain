import safetysideProposalUrl from './safetyside.html?url';

export default function SafetysideProposal() {
  return (
    <iframe
      src={safetysideProposalUrl}
      title="Safetyside Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
