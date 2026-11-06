-- ==============================================================================
-- Supabase Schema & Row-Level Security (RLS) for Mehdi's Portfolio
-- ==============================================================================
-- This script prepares the database tables, constraints, indexes, and security
-- policies for managing portfolio content and visitor contact inquiries.
--
-- How to apply:
-- 1. Open your Supabase Dashboard: https://supabase.com/dashboard
-- 2. Navigate to SQL Editor -> New Query.
-- 3. Paste this entire file and click Run.
-- ==============================================================================

-- 1. PROFILE TABLE
create table if not exists public.profile (
  id text primary key default 'mehdi-usthb',
  full_name text not null,
  headline text not null,
  bio text not null,
  university text not null,
  faculty text not null,
  academic_year text not null,
  bac_year integer not null default 2025,
  location text not null,
  status text not null,
  email text not null,
  github_url text not null,
  linkedin_url text not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 2. EDUCATION TABLE
create table if not exists public.education (
  id bigint generated always as identity primary key,
  period text not null,
  qualification text not null,
  institution text not null,
  location text not null,
  description text not null,
  coursework text[] not null default '{}',
  sort_order integer not null default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 3. SKILLS TABLE
create table if not exists public.skills (
  id bigint generated always as identity primary key,
  category text not null,
  items jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. PROJECTS TABLE
-- Matches the exact structure of app/data/projects.js
create table if not exists public.projects (
  id bigint primary key,
  title text not null,
  slug text unique not null,
  description text not null,
  category text not null,
  image text not null,
  tags text[] not null default '{}',
  github_url text not null default '#',
  demo_url text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 5. CONTACT MESSAGES TABLE
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) >= 2 and char_length(name) <= 100),
  email text not null check (char_length(email) >= 5 and char_length(email) <= 120),
  message text not null check (char_length(message) >= 5 and char_length(message) <= 3000),
  status text not null default 'unread' check (status in ('unread', 'read', 'archived')),
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- ==============================================================================
-- INDEXES
-- ==============================================================================
create index if not exists idx_projects_sort_order on public.projects(sort_order);
create index if not exists idx_education_sort_order on public.education(sort_order);
create index if not exists idx_skills_sort_order on public.skills(sort_order);
create index if not exists idx_contact_messages_created_at on public.contact_messages(created_at desc);
create index if not exists idx_contact_messages_status on public.contact_messages(status);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
alter table public.profile enable row level security;
alter table public.education enable row level security;
alter table public.skills enable row level security;
alter table public.projects enable row level security;
alter table public.contact_messages enable row level security;

-- Public read policies for portfolio content (anon & authenticated visitors)
create policy "Allow public read access to profile"
  on public.profile for select
  using (true);

create policy "Allow public read access to education"
  on public.education for select
  using (true);

create policy "Allow public read access to skills"
  on public.skills for select
  using (true);

create policy "Allow public read access to projects"
  on public.projects for select
  using (true);

-- Restrict administrative write access on content tables to authenticated owners only
create policy "Allow admin write to profile"
  on public.profile for all
  to authenticated
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Allow admin write to education"
  on public.education for all
  to authenticated
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Allow admin write to skills"
  on public.skills for all
  to authenticated
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Allow admin write to projects"
  on public.projects for all
  to authenticated
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Contact Messages Security:
-- 1. Anyone (public anon) can insert with validation
create policy "Allow anonymous message submission"
  on public.contact_messages for insert
  to anon, authenticated
  with check (
    char_length(name) >= 2 and char_length(name) <= 100 and
    char_length(email) >= 5 and char_length(email) <= 120 and
    char_length(message) >= 5 and char_length(message) <= 3000
  );

-- 2. ONLY authenticated admin can view contact messages (prevents public inspection of private user messages)
create policy "Allow authenticated admin to read contact messages"
  on public.contact_messages for select
  to authenticated
  using (auth.role() = 'authenticated');

-- 3. ONLY authenticated admin can update or delete messages
create policy "Allow authenticated admin to manage contact messages"
  on public.contact_messages for update
  to authenticated
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated admin to delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (auth.role() = 'authenticated');

-- ==============================================================================
-- OPTIONAL INITIAL SEED DATA
-- Preserves the exact 4 projects and verified academic timeline (Bac 2025, USTHB L2)
-- ==============================================================================

insert into public.profile (id, full_name, headline, bio, university, faculty, academic_year, bac_year, location, status, email, github_url, linkedin_url)
values (
  'mehdi-usthb',
  'Mehdi',
  'Data Science student studying analytical pipelines and statistical modelling.',
  'I am a second-year undergraduate in the Data Science program at USTHB. My work focuses on working through the messy realities of real data — exploratory analysis, data cleaning in Python, SQL querying, and evaluating machine learning algorithms with proper validation discipline.',
  'USTHB — Université des Sciences et de la Technologie Houari Boumediene',
  'Faculty of Mathematics & Computer Science',
  'Licence Data Science (L2)',
  2025,
  'Algiers, Algeria',
  'Seeking summer student internships',
  'mehdi.datasci@outlook.com',
  'https://github.com/',
  'https://www.linkedin.com/'
) on conflict (id) do nothing;

insert into public.education (period, qualification, institution, location, description, coursework, sort_order)
values
  (
    '2025 — Present',
    'Licence in Data Science (Year 2)',
    'USTHB — Université des Sciences et de la Technologie Houari Boumediene',
    'Bab Ezzouar, Algiers',
    'Undergraduate curriculum covering foundational probability theory, mathematical statistics, linear algebra, algorithms, data structures, relational database systems (SQL), and introductory machine learning.',
    array['Probability & Statistics', 'Linear Algebra', 'SQL & Databases', 'Data Structures', 'Python & Scikit-learn'],
    1
  ),
  (
    '2025',
    'Baccalauréat',
    'Secondary Education',
    'Algiers, Algeria',
    'Completed secondary education and obtained the Baccalauréat diploma, providing core preparation in mathematics and physical sciences for undergraduate studies in Data Science.',
    array['Mathematics', 'Physical Sciences'],
    2
  ),
  (
    'Ongoing',
    'Independent Study & Practical Projects',
    'Self-Directed Learning',
    'Algiers, Algeria',
    'Practicing foundational data manipulation, exploratory data analysis, and introductory modeling through documented Python notebooks and open datasets.',
    array['Data Cleaning', 'Exploratory Pipelines', 'Jupyter Notebooks'],
    3
  )
on conflict do nothing;

-- Exact 4 projects preserved as in app/data/projects.js
insert into public.projects (id, title, slug, description, category, image, tags, github_url, demo_url, featured, sort_order)
values
  (
    1,
    'Customer Churn Prediction',
    'customer-churn-prediction',
    'A machine learning project exploring customer churn patterns and the factors associated with customer retention.',
    'Machine Learning',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    array['Python', 'Pandas', 'Scikit-learn'],
    '#',
    null,
    true,
    1
  ),
  (
    2,
    'Algiers Real Estate Analysis',
    'algiers-real-estate-analysis',
    'An exploratory analysis of property listings to investigate pricing distributions, location patterns, and market trends.',
    'Data Analysis',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
    array['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    '#',
    null,
    true,
    2
  ),
  (
    3,
    'Arabic Sentiment Analysis',
    'arabic-sentiment-analysis',
    'An NLP exploration of Arabic text classification, preprocessing, and sentiment analysis.',
    'Natural Language Processing',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85',
    array['Python', 'NLP', 'Scikit-learn'],
    '#',
    null,
    true,
    3
  ),
  (
    4,
    'E-commerce Sales Analysis',
    'ecommerce-sales-analysis',
    'An analytics project exploring sales trends, product performance, and customer purchasing patterns.',
    'Data Analytics',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    array['Python', 'SQL', 'Pandas', 'Seaborn'],
    '#',
    null,
    false,
    4
  )
on conflict (id) do nothing;
