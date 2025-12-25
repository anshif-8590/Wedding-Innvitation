import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env variables missing",
    console.log(supabaseUrl, supabaseAnonKey , "all key ") ,
    console.log("URL:", process.env.REACT_APP_SUPABASE_URL),
  console.log("KEY:", process.env.REACT_APP_SUPABASE_ANON_KEY), {
    supabaseUrl,
    supabaseAnonKey,
  });
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
