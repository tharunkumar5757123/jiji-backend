-- Profiles table
create table profiles (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  email text not null,
  created_at timestamp with time zone default now()
);

-- Queries table
create table queries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  query text not null,
  created_at timestamp with time zone default now()
);

-- Resources table
create table resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null,
  url text not null,
  created_at timestamp with time zone default now()
);

-- RLS policy
create policy "Public read resources"
on resources
for select
using (true);
