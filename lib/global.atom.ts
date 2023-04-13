import { atom } from "jotai";
import applets from "./applets/global/applets";

export const activeAppletAtom = atom(applets.entries().next().value);
