import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://crrbuyvbqabiejgqoehn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNycmJ1eXZicWFiaWVqZ3FvZWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4OTk4NjMsImV4cCI6MjA3MjQ3NTg2M30.ITrgWQSj9aM1dSAj0lqT6hPQL-QITlejCW1FoN-rwZ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
