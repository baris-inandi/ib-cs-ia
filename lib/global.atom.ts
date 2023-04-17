import { atomWithStorage } from "jotai/utils";
import applets, { Applet } from "./applets/global/applets";

export const activeAppletAtom = atomWithStorage<Applet>(
    "jotaiActiveAppletAtom",
    applets.entries().next().value,
);
