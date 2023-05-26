import { Button } from "@mantine/core";
import { useSupabaseUser } from "../hooks/useSupabaseUser";
import { supabase } from "../lib/supabase";

const Index = () => {
    const [user] = useSupabaseUser();

    return (
        <div>
            {user ? user.email ?? "no email" : "logged out"}
            <br />
            <Button
                color="accent"
                onClick={() => {
                    supabase.auth.signInWithOAuth({
                        provider: "google",
                    });
                }}
            >
                Log in
            </Button>
            <br />
            <Button
                color="red"
                onClick={() => {
                    supabase.auth.signOut();
                }}
            >
                Log out
            </Button>
        </div>
    );
};

export default Index;
