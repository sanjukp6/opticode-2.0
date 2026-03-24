-- =============================================
-- Opticode 2.0 - Supabase Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- 1. Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  usn TEXT NOT NULL UNIQUE,
  semester INTEGER NOT NULL CHECK (semester BETWEEN 1 AND 8),
  section TEXT NOT NULL,
  hackerrank TEXT NOT NULL,
  registered_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- 3. Allow anyone to INSERT (public registration)
CREATE POLICY "Allow public registration inserts"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Only authenticated users (admins) can read registrations
CREATE POLICY "Allow authenticated reads"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- 5. Create an index on USN for fast duplicate checks
CREATE INDEX IF NOT EXISTS idx_registrations_usn ON registrations (usn);
