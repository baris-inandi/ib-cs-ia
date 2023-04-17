import { atomWithStorage } from "jotai/utils";
import applets from "./applets/global/applets";

export const activeAppletAtom = atomWithStorage(
  "jotaiActiveAppletAtom",
  applets.entries().next().value,
);
