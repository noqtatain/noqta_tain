import bilqalamProposalUrl from './bilqalam.html?url';

export default function BilqalamProposal() {
  return (
    <iframe
      src={bilqalamProposalUrl}
      title="Bilqalam Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
