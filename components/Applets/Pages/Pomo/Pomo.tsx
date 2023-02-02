import { Button, Flex, Paper } from "@mantine/core";
import PomoTimer from "./PomoTimer/PomoTimer";

const Pomo = () => {
	return (
		<div>
			<PomoTimer />
			<Paper withBorder mt={12} p={10} w="100%">
				<Flex w="100%" align="center" justify="center" gap={10}>
					<Button w="100%" h={48} color="gray" variant="filled">
						Start
					</Button>
					<Button w="100%" h={48} color="gray" variant="outline">
						Restart
					</Button>
					<Button w="100%" h={48} color="gray" variant="outline">
						Skip to Break
					</Button>
				</Flex>
			</Paper>
		</div>
	);
};

export default Pomo;
