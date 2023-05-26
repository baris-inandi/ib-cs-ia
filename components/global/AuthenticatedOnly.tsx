import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSupabaseUser } from "../../hooks/useSupabaseUser";

interface AuthenticatedOnlyProps {
    children: React.ReactElement;
}

const AuthenticatedOnly: React.FC<AuthenticatedOnlyProps> = (props) => {
    const [user, pending] = useSupabaseUser();
    const router = useRouter();

    useEffect(() => {
        if (!pending && !user) {
            router.replace("/auth/google");
        }
    }, [user, pending, router]);

    return <>{!pending && user ? props.children : ""}</>;
};

export default AuthenticatedOnly;
