# Ainamoi Football Arenah

React + Vite frontend connected to Supabase.

## Run locally
1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env`.
3. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Run `npm install`, then `npm run dev`.

## Deploy on Vercel
Import this GitHub repository, add the two environment variables above in Vercel Project Settings → Environment Variables, then deploy. Build command: `npm run build`; output directory: `dist`.

## Security
The publishable/anon key is designed for browser use. Never put a Supabase `service_role` or secret key in this project. Enable RLS and verify the admin policies before using real registrations. Admin sign-in uses Supabase Auth; allowlisted email: `kiprobmanuh51@gmail.com`.

## Database
The app expects the existing `football_events`, `football_players`, `football_teams`, and `football_registrations` tables, with the snake_case columns described in the migration notes. The registration table must not have a public SELECT policy.
