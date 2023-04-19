import { createClient } from "@supabase/supabase-js";

const options = {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
};

export const supabase = createClient(
    "xxxx",
    "xxxx",
    options,
);

