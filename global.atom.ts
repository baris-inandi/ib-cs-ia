import { atom } from "jotai";
import applets from "./lib/applets/global/applets";

export const activeAppletAtom = atom(applets.entries().next().value);
