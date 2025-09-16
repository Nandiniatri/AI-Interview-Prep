// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://rcoxcxrdamivrewlpybx.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjb3hjeHJkYW1pdnJld2xweWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1OTUzNzcsImV4cCI6MjA3MTE3MTM3N30.nCb3IMC74777MxFqPdtu2Bk_dg_uMR5ij6BUT2lcgvY";

// export const supabase = createClient(supabaseUrl, supabaseKey);


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

