import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const supabase = createClient(url || 'https://ifoajgkmonaynmizmwlo.supabase.co', key || 'MISSING_PUBLISHABLE_KEY');
export const ADMIN_EMAIL = 'kiprobmanuh51@gmail.com';
