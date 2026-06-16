import profilePageUrl from './profile.html?url';

export default function Profile() {
  return (
    <iframe
      src={profilePageUrl}
      title="Company Profile"
      className="block w-full border-0"
      style={{ minHeight: '100dvh' }}
    />
  );
}
