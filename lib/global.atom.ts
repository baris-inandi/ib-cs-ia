import { atomWithStorage } from "jotai/utils";
import { Applet } from "./applets/global/applets";

export const activeAppletAtom = atomWithStorage<Applet>(
    "jotaiActiveAppletAtom",
    "default",
);
