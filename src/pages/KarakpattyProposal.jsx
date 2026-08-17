import karakpattyProposalUrl from './karakpatty.html?url';

export default function KarakpattyProposal() {
  return (
    <iframe
      src={karakpattyProposalUrl}
      title="Karak Patty Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
