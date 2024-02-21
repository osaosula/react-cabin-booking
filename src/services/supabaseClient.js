import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://znmhcjkrdunvdsxlvges.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpubWhjamtyZHVudmRzeGx2Z2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMTg2NzksImV4cCI6MjAxNjY5NDY3OX0.JNMMqOeXCjgBdJ1zeJLGSQRL20nsnId1LbEbzBM_MsU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
