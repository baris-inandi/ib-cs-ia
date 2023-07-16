import { AuthError, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

/*
IA:
- legacy hook for getting the supabase user
*/

/*
@deprecated
*/
export const useSupabaseUser = () => {
    /*
        IA:
        This is a React hook.
        "Hooks are functions that let you “hook into” React state
        and lifecycle features from function components." (React docs)
        The aim here is to get the Supabase user and update it when the
        authentication state changes. Doing this using a `useState` hook
        enables declerative reactive authenatication state in any component
        `useSupabaseUser` is called. We can re-render
    */
    const [user, setUser] = useState<User | null>(null);
    const [err, setErr] = useState<AuthError | null>(null);
    const [pending, setPending] = useState(true);

    supabase.auth.onAuthStateChange((_, session) => {
        setUser(session?.user ?? null);
        setPending(false);
    });

    useEffect(() => {
        (async () => {
            const x = await supabase.auth.getUser();
            setUser(x.data.user);
            setErr(x.error);
            setPending(false);
        })();
    }, []);

    return [
        // IA:
        user, // the supabase User object is returned
        pending, // ho
        err, // ho
    ];
};
