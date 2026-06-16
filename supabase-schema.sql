create extension if not exists pgcrypto;
create table if not exists public.contents (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  keywords text,
  body text,
  slug text,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.contents enable row level security;
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  company text,
  service text,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.leads enable row level security;
create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(),
  title text,
  client text,
  status text,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.requests enable row level security;
create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  subject text,
  requester text,
  status text,
  priority text,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.tickets enable row level security;
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text,
  assignee text,
  status text,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.tasks enable row level security;
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text,
  date date,
  created_at timestamptz default now(),
  updated_at timestamptz
);
alter table public.events enable row level security;
-- Drop existing policies if present, then recreate
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='contents' AND policyname='contents_read') THEN
    EXECUTE 'DROP POLICY contents_read ON public.contents';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='contents' AND policyname='contents_write') THEN
    EXECUTE 'DROP POLICY contents_write ON public.contents';
  END IF;
END$$;
create policy contents_read on public.contents for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy contents_write on public.contents for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='leads' AND policyname='leads_read') THEN
    EXECUTE 'DROP POLICY leads_read ON public.leads';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='leads' AND policyname='leads_write') THEN
    EXECUTE 'DROP POLICY leads_write ON public.leads';
  END IF;
END$$;
create policy leads_read on public.leads for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy leads_write on public.leads for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='requests' AND policyname='requests_read') THEN
    EXECUTE 'DROP POLICY requests_read ON public.requests';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='requests' AND policyname='requests_write') THEN
    EXECUTE 'DROP POLICY requests_write ON public.requests';
  END IF;
END$$;
create policy requests_read on public.requests for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy requests_write on public.requests for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='tickets' AND policyname='tickets_read') THEN
    EXECUTE 'DROP POLICY tickets_read ON public.tickets';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='tickets' AND policyname='tickets_write') THEN
    EXECUTE 'DROP POLICY tickets_write ON public.tickets';
  END IF;
END$$;
create policy tickets_read on public.tickets for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy tickets_write on public.tickets for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='tasks' AND policyname='tasks_read') THEN
    EXECUTE 'DROP POLICY tasks_read ON public.tasks';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='tasks' AND policyname='tasks_write') THEN
    EXECUTE 'DROP POLICY tasks_write ON public.tasks';
  END IF;
END$$;
create policy tasks_read on public.tasks for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy tasks_write on public.tasks for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='events' AND policyname='events_read') THEN
    EXECUTE 'DROP POLICY events_read ON public.events';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='events' AND policyname='events_write') THEN
    EXECUTE 'DROP POLICY events_write ON public.events';
  END IF;
END$$;
create policy events_read on public.events for select using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
create policy events_write on public.events for all using ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com') with check ((auth.jwt()->>'email') = 'emadradman.dev@gmail.com');
