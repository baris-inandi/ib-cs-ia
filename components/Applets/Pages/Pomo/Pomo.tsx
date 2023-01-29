import { Button, Flex, Paper } from "@mantine/core";
import { useAtom } from "jotai";
import { accentColorAtom } from "../../../../globalAtoms";
import PomoTimer from "./PomoTimer/PomoTimer";

const Pomo = () => {
	let [accent] = useAtom(accentColorAtom);

	return (
		<div>
			<PomoTimer />
			<Paper withBorder mt={12} p={10} w="100%">
				<Flex w="100%" align="center" justify="center" gap={10}>
					<Button w="100%" h={48} color={accent} variant="filled">
						Start
					</Button>
					<Button w="100%" h={48} color={accent} variant="outline">
						Restart
					</Button>
					<Button w="100%" h={48} color={accent} variant="outline">
						Skip to Break
					</Button>
				</Flex>
			</Paper>
		</div>
	);
};

export default Pomo;
