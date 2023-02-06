import { Box, Button, Flex, Paper } from "@mantine/core";
import PomoTimer from "./PomoTimer/PomoTimer";

const Pomo = () => {
	return (
		<Box w="100%" p={20}>
			<PomoTimer />
			<Paper withBorder mt={12} p={10} w="100%">
				<Flex w="100%" align="center" justify="center" gap={10}>
					<Button
						sx={{ fontSize: 16 }}
						w="100%"
						h={60}
						color="violet"
						variant="filled">
						Start
					</Button>
					<Button
						sx={{ fontSize: 16 }}
						w="100%"
						h={60}
						color="violet"
						variant="outline">
						Restart
					</Button>
					<Button
						sx={{ fontSize: 16 }}
						w="100%"
						h={60}
						color="violet"
						variant="outline">
						Skip to Break
					</Button>
				</Flex>
			</Paper>
		</Box>
	);
};

export default Pomo;
