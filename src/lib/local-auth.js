// Simple local auth helper for development without external SDK/backend
export const localAuth = {
  me: async () => ({ id: 'dev_user', role: 'admin', name: 'Dev User' }),
  logout: () => {},
  redirectToLogin: () => {},
};
