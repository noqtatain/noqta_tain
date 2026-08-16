import hikalarabaProposalUrl from './hikalaraba.html?url';

export default function HikalarabaProposal() {
  return (
    <iframe
      src={hikalarabaProposalUrl}
      title="Hikalaraba Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
