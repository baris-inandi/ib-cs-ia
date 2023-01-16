import { SpotlightAction } from "@mantine/spotlight";
import topLevelSections, {TLS} from "./topLevelSections";


const spotlightActions: Array<SpotlightAction | TLS> = [
	...topLevelSections
];

export default spotlightActions;
