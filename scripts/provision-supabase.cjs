#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
(async () => {
  const token = process.env.SUPABASE_ACCESS_TOKEN;
  const projectRef = process.env.SUPABASE_PROJECT_ID;
  if (!token || !projectRef) {
    console.error('[provision] Missing SUPABASE_ACCESS_TOKEN or SUPABASE_PROJECT_ID');
    process.exit(1);
  }
  const sqlFile = path.resolve(__dirname, '..', 'supabase-schema.sql');
  if (!fs.existsSync(sqlFile)) {
    console.error('[provision] supabase-schema.sql not found');
    process.exit(1);
  }
  const sql = fs.readFileSync(sqlFile, 'utf8');
  const url = `https://api.supabase.com/v1/projects/${projectRef}/db/query`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: sql, connection: 'default', project_ref: projectRef })
    });
    if (!res.ok) {
      const text = await res.text();
      console.error('[provision] Failed:', res.status, text);
      process.exit(1);
    }
    const data = await res.json();
    console.log('[provision] Done:', data?.message || 'Schema applied');
  } catch (err) {
    console.error('[provision] Error:', err.message);
    process.exit(1);
  }
})();
