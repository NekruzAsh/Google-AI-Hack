import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rghvkjwhqpuihntomfui.supabase.co/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnaHZrandocXB1aWhudG9tZnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjg3MTIsImV4cCI6MjAyOTcwNDcxMn0.QFMYuYta4uaFUHJb7u_xc4c76hezON_Dx_hDxIkhnNw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
