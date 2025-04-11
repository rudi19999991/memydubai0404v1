import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fskuckqbsbgkbuokjwbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3Vja3Fic2Jna2J1b2tqd2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMTczNTEsImV4cCI6MjA1OTg5MzM1MX0.JArjCYN9VV1esI_PKAhCaemfZeqhIDBoAkWZRjd_jXk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
