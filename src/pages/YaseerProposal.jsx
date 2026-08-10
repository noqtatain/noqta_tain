import yaseerProposalUrl from './yaseer.html?url';

export default function YaseerProposal() {
  return (
    <iframe
      src={yaseerProposalUrl}
      title="Yaseer Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
