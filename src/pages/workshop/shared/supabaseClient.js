import { createClient } from '@supabase/supabase-js';

// The anon key is designed to be public/client-safe — it can only do what
// the table's Row Level Security policies allow. Never put a service-role
// key here; that key bypasses RLS entirely and must stay server-side only.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://fghzppthchwacjgndzpg.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnaHpwcHRoY2h3YWNqZ25kenBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MTcwMjIsImV4cCI6MjA4MzE5MzAyMn0.PCc3Jd07-3ZCDd8wfzc88w2sI8n5tiTCbe8uLJU8KhY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
