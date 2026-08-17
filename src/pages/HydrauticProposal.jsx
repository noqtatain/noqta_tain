import hydrauticProposalUrl from './hydrautic.html?url';

export default function HydrauticProposal() {
  return (
    <iframe
      src={hydrauticProposalUrl}
      title="Hydrautic Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
