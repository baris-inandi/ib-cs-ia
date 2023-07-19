import { MantineColor } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../../../components/Applets/Pages/Applets/Pomo/atoms/pomoState.atom";
import { activeAppletAtom } from "../../../lib/global.atom";
import { useIsInApplet } from "../global/useIsInApplet";

export const usePomoThemeIfInPomoApplet = ():
    | MantineColor
    | undefined => {
    const [pomoState] = useAtom(pomoStateAtom);
    const [activeApplet] = useAtom(activeAppletAtom);
    const isInApplet = useIsInApplet();
    const isInPomoApplet = isInApplet && activeApplet.id === "pomodoro";

    return isInPomoApplet ? pomoState.theme() : undefined;
};

