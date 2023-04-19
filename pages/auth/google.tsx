import { useEffect } from "react";
import { supabase } from "../../lib/supabase";
interface AuthGoogleProps {}

const AuthGoogle: React.FC<AuthGoogleProps> = () => {
    useEffect(() => {
        supabase.auth.signInWithOAuth({
            provider: "google",
        });
    }, []);

    return <div>wassup nibba</div>;
};

export default AuthGoogle;

