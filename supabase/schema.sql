-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (Auth & Roles)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('superadmin', 'admin', 'ustadz')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Students Table (Tahfidz Progress)
CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  no INT NOT NULL,
  name TEXT NOT NULL,
  nisn TEXT UNIQUE NOT NULL,
  class TEXT NOT NULL,
  juz TEXT NOT NULL,
  status TEXT NOT NULL,
  status_type TEXT NOT NULL CHECK (status_type IN ('success', 'warning', 'info')),
  last_update TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. News Articles Table
CREATE TABLE IF NOT EXISTS public.news_articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Kegiatan', 'Akademik', 'Pengumuman')),
  author TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT[] NOT NULL,
  image_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  published_at TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PPDB Batches Table
CREATE TABLE IF NOT EXISTS public.ppdb_batches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  observation_date TEXT NOT NULL,
  announcement_date TEXT NOT NULL,
  remaining_quota INT NOT NULL DEFAULT 0,
  total_quota INT NOT NULL DEFAULT 30,
  reg_fee TEXT NOT NULL DEFAULT 'Rp 350.000',
  dev_fee TEXT NOT NULL DEFAULT 'Rp 8.500.000',
  spp_fee TEXT NOT NULL DEFAULT 'Rp 750.000',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PPDB Applicants Table
CREATE TABLE IF NOT EXISTS public.ppdb_applicants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  class_grade TEXT NOT NULL DEFAULT 'Kelas 1',
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Lulus Observasi', 'Diterima', 'Ditolak')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Organization Staff Table
CREATE TABLE IF NOT EXISTS public.organization_staff (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female')),
  display_order INT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ppdb_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ppdb_applicants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_staff ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Allow public read on students" ON public.students FOR SELECT USING (true);
CREATE POLICY "Allow public read on published news" ON public.news_articles FOR SELECT USING (true);
CREATE POLICY "Allow public read on ppdb_batches" ON public.ppdb_batches FOR SELECT USING (true);
CREATE POLICY "Allow public read on organization_staff" ON public.organization_staff FOR SELECT USING (true);

-- Authenticated full access policies
CREATE POLICY "Allow authenticated manage on students" ON public.students FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage on news" ON public.news_articles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage on ppdb_batches" ON public.ppdb_batches FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage on ppdb_applicants" ON public.ppdb_applicants FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage on organization_staff" ON public.organization_staff FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated read manage on profiles" ON public.profiles FOR ALL USING (auth.role() = 'authenticated');
