import { createClient } from "@supabase/supabase-js";

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const API_TOKEN = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(API_URL, API_TOKEN);

export default supabase;