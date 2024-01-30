import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ncyonwglthoybbbbdygc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jeW9ud2dsdGhveWJiYmJkeWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NzU2OTcsImV4cCI6MjAyMjE1MTY5N30.eBYpozlc-pD81dSvxc9Md6hMh8uAea-M_rkd--KBNgc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
