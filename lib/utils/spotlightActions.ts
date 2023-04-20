import { SpotlightAction } from "@mantine/spotlight";
import { atom } from "jotai";
import applets, { Applet } from "../applets/global/applets";

const spotlightActionsAtom = atom<Array<SpotlightAction | Applet>>(
    Array.from(applets.values()),
);

export default spotlightActionsAtom;

