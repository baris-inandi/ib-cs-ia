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
        if (typeof activeApplet === "string") {
            let applet = activeApplet;
            if (applet != "default") {
                router.replace(`/app/${applet}`);
            }
        } else if (appletExists(activeApplet.id ?? "")) {
            let applet = activeApplet.id;
            if (applet != "default") {
                router.replace(`/app/${applet}`);
            }
        } else {
            router.replace("/app/dashboard");
        }
    }, [activeApplet, router]);

    return <></>;
};

export default AppletRestoreHandler;

