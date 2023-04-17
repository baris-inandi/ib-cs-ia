import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { appletExists } from "../../lib/applets/global/appletExists";
import { activeAppletAtom } from "../../lib/global.atom";

interface AppletRestoreHandlerProps {}

const AppletRestoreHandler: React.FC<
    AppletRestoreHandlerProps
> = () => {
    const [activeApplet] = useAtom(activeAppletAtom);
    const router = useRouter();

    useEffect(() => {
        console.log(activeApplet);

        if (typeof activeApplet === "string") {
            router.replace(`/app/${activeApplet}`);
        } else if (appletExists(activeApplet.id ?? "")) {
            router.replace(`/app/${activeApplet.id}`);
        } else {
            router.replace("/app/dashboard");
        }
    }, [activeApplet, router]);

    return <></>;
};

export default AppletRestoreHandler;
