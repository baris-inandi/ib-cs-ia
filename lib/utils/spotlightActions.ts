import { SpotlightAction } from "@mantine/spotlight";
import applets, { Applet } from "./applets";

const spotlightActions: Array<SpotlightAction | Applet> = [
	...Array.from(applets.values()),
];

export default spotlightActions;
