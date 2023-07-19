import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { activeAppletAtom } from "../../../lib/global.atom";

export const useIsInApplet = () => {
    const router = useRouter();
    const [activeApplet] = useAtom(activeAppletAtom);
    return router.asPath === activeApplet.route;
};

