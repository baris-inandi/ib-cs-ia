import { Box, Button, Flex, Paper, Progress, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { PomoTime } from "../../../../../lib/applets/pomo/PomoTime";
import { DEFAULT_MINS, DEFAULT_SECS, pomoTimeAtom } from "../atoms/time.atom";
import TimerClockInput from "./TimerClockInput";

export default function PomoTimer() {
	let [ptimeAtom, setPtimeAtom] = useAtom(pomoTimeAtom);
	let [secs, setSecs] = useState<number>(DEFAULT_SECS);
	let [mins, setMins] = useState<number>(DEFAULT_MINS);

	const resetTimer = () => {
		setPtimeAtom(new PomoTime(Number(mins), Number(secs)));
	};

	return (
		<Paper withBorder h={200} w="100%">
			{ptimeAtom.value()}
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
						color="gray"
						value={
							(ptimeAtom.totalSecs / ptimeAtom.secs) * 100
						}></Progress>
				</Box>
				<Flex align="center" h="100%">
					<Text color="black" size={64} fw={500}>
						<Flex justify="center" align="center">
							<Button
								variant="outline"
								radius={9999}
								sx={{ fontSize: 20 }}>
								-5
							</Button>
							<Flex justify="center" align="center" px={32}>
								<TimerClockInput
									value={mins}
									align="right"></TimerClockInput>
								<span>:</span>
								<TimerClockInput
									value={secs}
									align="left"></TimerClockInput>
							</Flex>
							<Button
								variant="outline"
								radius={9999}
								sx={{ fontSize: 20 }}>
								+5
							</Button>
						</Flex>
					</Text>
				</Flex>
			</Flex>
		</Paper>
	);
}
