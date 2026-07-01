import alsaifLawProposalUrl from './alsaif-law-proposal.html?url';

export default function AlsaifLawProposal() {
  return (
    <iframe
      src={alsaifLawProposalUrl}
      title="Alsaif Law Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
