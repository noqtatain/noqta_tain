import React, { useMemo } from 'react';
import PortalLogin from '@/portal/PortalLogin';
import PortalLayout from '@/portal/PortalLayout';

export default function Portal() {
  const authed = useMemo(() => {
    try {
      const user = JSON.parse(localStorage.getItem('portal_user') || 'null');
      return !!(user && user.email);
    } catch {
      return false;
    }
  }, []);

  if (!authed) {
    return <PortalLogin />;
  }

  return <PortalLayout />;
}
