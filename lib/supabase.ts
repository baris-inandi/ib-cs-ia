import { createClient } from "@supabase/supabase-js";

const options = {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
};

const url = process.env.NEXT_SUPABASE_URL ?? "";
const key = process.env.NEXT_SUPABASE_KEY ?? "";

export const supabase = createClient(url, key, options);

