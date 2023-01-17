import { Group, Paper, RingProgress, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Pomo = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("red");
	return (
		<Group position="apart">
			<Paper withBorder>
				<RingProgress
					size={400}
					thickness={24}
					roundCaps
					sections={[{ value: 40, color: "blue" }]}
					sx={{ margin: "10px" }}
					label={
						<Text color="blue" weight={500} align="center">
							<p className="text-6xl">25:00</p>
						</Text>
					}
				/>
			</Paper>
		</Group>
	);
};

export default Pomo;
