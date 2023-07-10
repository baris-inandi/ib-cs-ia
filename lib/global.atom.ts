import { atomWithStorage } from "jotai/utils";
import applets, { Applet } from "./applets/global/applets";
import { Course } from "./applets/global/course";

export const activeAppletAtom = atomWithStorage<Applet | Course>(
    "jotaiActiveAppletAtom",
    applets.entries().next().value[0],
);

