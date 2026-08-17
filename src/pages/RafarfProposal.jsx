import rafarfProposalUrl from './rafarf.html?url';

export default function RafarfProposal() {
  return (
    <iframe
      src={rafarfProposalUrl}
      title="Rafarf Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
