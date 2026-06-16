// Simple localStorage-based persistence for the internal portal

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const id = () => `${Date.now()}_${Math.random().toString(36).slice(2,8)}`;

export const collections = {
  contents: 'portal_contents',
  pages: 'portal_pages',
  blogPosts: 'portal_blog_posts',
  leads: 'portal_leads',
  requests: 'portal_requests',
  tickets: 'portal_tickets',
  tasks: 'portal_tasks',
  events: 'portal_events',
};

export const getAll = (col) => read(collections[col], []);
export const setAll = (col, items) => write(collections[col], items);
export const addItem = (col, item) => {
  const list = getAll(col);
  const withId = { id: id(), created_at: new Date().toISOString(), ...item };
  list.unshift(withId);
  setAll(col, list);
  return withId;
};
export const updateItem = (col, itemId, patch) => {
  const list = getAll(col);
  const idx = list.findIndex(i => i.id === itemId);
  if (idx !== -1) {
    list[idx] = { ...list[idx], ...patch, updated_at: new Date().toISOString() };
    setAll(col, list);
    return list[idx];
  }
  return null;
};
export const removeItem = (col, itemId) => {
  const list = getAll(col).filter(i => i.id !== itemId);
  setAll(col, list);
};

export const fetchPages = async () => {
  try {
    const res = await fetch('/api/portal/pages');
    if (!res.ok) {
      throw new Error('Failed to fetch pages');
    }
    const pages = await res.json();
    setAll('pages', pages);
    return pages;
  } catch {
    return getAll('pages');
  }
};

export const createPage = async (payload) => {
  try {
    const res = await fetch('/api/portal/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error('Failed to create page');
    }
    const created = await res.json();
    setAll('pages', [created, ...getAll('pages')]);
    return created;
  } catch {
    return addItem('pages', payload);
  }
};

export const updatePage = async (itemId, payload) => {
  try {
    const res = await fetch(`/api/portal/pages/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error('Failed to update page');
    }
    const updated = await res.json();
    const list = getAll('pages');
    const idx = list.findIndex((item) => item.id === itemId);
    if (idx !== -1) {
      list[idx] = updated;
      setAll('pages', list);
    }
    return updated;
  } catch {
    return updateItem('pages', itemId, payload);
  }
};

export const deletePage = async (itemId) => {
  try {
    const res = await fetch(`/api/portal/pages/${itemId}`, { method: 'DELETE' });
    if (!res.ok) {
      throw new Error('Failed to delete page');
    }
    removeItem('pages', itemId);
  } catch {
    removeItem('pages', itemId);
  }
};
