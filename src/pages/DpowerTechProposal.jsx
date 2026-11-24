import dpowerTechUrl from './dpower-tech.html?url';

export default function DpowerTechProposal() {
  return (
    <iframe
      src={dpowerTechUrl}
      title="D Power Technical Services Proposal"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
