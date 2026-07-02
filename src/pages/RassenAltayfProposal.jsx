import rassenAltayfProposalUrl from './rassen-altayf-proposal.html?url';

export default function RassenAltayfProposal() {
  return (
    <iframe
      src={rassenAltayfProposalUrl}
      title="Rassen Altayf Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
