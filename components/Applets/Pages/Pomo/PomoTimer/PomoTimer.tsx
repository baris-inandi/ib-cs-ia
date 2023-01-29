import { Box, Flex, Paper, Progress, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { accentColorAtom } from "../../../../../globalAtoms";
import { pomoTimeAtom } from "../atoms/time.atom";
import TimerClockInput from "./TimerClockInput";

export default function PomoTimer() {
	let [accent] = useAtom(accentColorAtom);
	let [secs, setSecs] = useAtom(pomoTimeAtom);
	let secsToMinsValidString = (secs: number) => {
		let s = Math.floor(secs & 60);
		return (s < 10 ? "0" + s : s).toString();
	};
	let secsToSecsValidString = (secs: number) => {
		let s = Math.floor(secs / 60);
		return (s < 10 ? "0" + s : s).toString();
	};

	return (
		<Paper withBorder h={200} w="100%">
			<Flex
				direction="column"
				w="100%"
				h="100%"
				justify="space-between"
				align="center">
				<Box w="100%" p={12} pb={0}>
					<Progress
						h={20}
						radius={3}
						w="100%"
						color={accent}
						value={(secs.totalSecs / secs.secs) * 100}></Progress>
				</Box>
				<Flex align="center" h="100%">
					<Text color="black" size={64} fw={500}>
						<Flex>
							<TimerClockInput
								onChange={(e) => {}}
								onBlur={(e) => {
									console.log(e.target.value);
									let s = parseInt(e.target.value) * 60 ?? 0;
									setSecs({ secs: s, totalSecs: s });
								}}
								align="right"
								value={secsToSecsValidString(secs.secs)}></TimerClockInput>
							<span>:</span>
							<TimerClockInput
								onChange={(e) => {}}
								onBlur={(e) => {
									console.log(e.target.value);
									let s = parseInt(e.target.value) ?? 0;
									setSecs({ secs: s, totalSecs: s });
								}}
								align="left"
								value={secsToMinsValidString(secs.secs)}></TimerClockInput>
						</Flex>
					</Text>
				</Flex>
			</Flex>
		</Paper>
	);
}
