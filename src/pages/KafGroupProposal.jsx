import kafGroupProposalUrl from './kaf-group-proposal.html?url';

export default function KafGroupProposal() {
  return (
    <iframe
      src={kafGroupProposalUrl}
      title="Kaf Group Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
