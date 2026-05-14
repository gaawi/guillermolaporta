-- Polen schema. Run this once in Supabase SQL editor.
-- Single-row JSONB table mirrors the original grants-data.json file.

create table if not exists public.grants_blob (
  id smallint primary key default 1,
  data jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  constraint grants_blob_single_row check (id = 1)
);

insert into public.grants_blob (id, data) values (1, '[]'::jsonb)
  on conflict (id) do nothing;

alter table public.grants_blob enable row level security;

drop policy if exists "authenticated read" on public.grants_blob;
create policy "authenticated read" on public.grants_blob
  for select to authenticated using (true);

drop policy if exists "authenticated update" on public.grants_blob;
create policy "authenticated update" on public.grants_blob
  for update to authenticated using (true) with check (true);
