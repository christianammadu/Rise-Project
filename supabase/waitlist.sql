-- Riseup.com Waitlist Table
-- Run this SQL in your Supabase SQL Editor (https://supabase.com/dashboard)

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'landing_page',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public waitlist form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read
CREATE POLICY "Only admins can read" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for fast lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);
