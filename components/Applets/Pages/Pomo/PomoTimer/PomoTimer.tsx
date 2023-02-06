import { Box, Button, Flex, Paper, Progress, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { PomoTime } from "../../../../../lib/applets/pomo/PomoTime";
import { DEFAULT_MINS, DEFAULT_SECS, pomoTimeAtom } from "../atoms/time.atom";
import TimerClockText from "./TimerClockText";

export default function PomoTimer() {
	let [ptimeAtom, setPtimeAtom] = useAtom(pomoTimeAtom);
	let [secs, setSecs] = useState<number>(DEFAULT_SECS);
	let [mins, setMins] = useState<number>(DEFAULT_MINS);

	const resetTimer = () => {
		setPtimeAtom(new PomoTime(Number(mins), Number(secs)));
	};

	return (
		<>
			<Box w="100%" pb={12}>
				<Progress
					h={26}
					radius="md"
					w="100%"
					color="violet"
					striped
					sx={(theme) => {
						return {
							backgroundColor: theme.colors.violet[3],
						};
					}}
					value={
						40
						/* (ptimeAtom.totalSecs / ptimeAtom.secs) * 100 */
					}></Progress>
			</Box>
			<Paper
				withBorder
				h={400}
				w="100%"
				sx={(theme) => {
					return {
						backgroundColor: theme.colors.violet[5],
					};
				}}>
				<Flex
					direction="column"
					w="100%"
					h="100%"
					justify="space-between"
					align="center">
					<Flex align="center" h="100%">
						<Text color="black" size={64} fw={500}>
							<Flex justify="center" align="center" gap={24}>
								<Button
									variant="light"
									color="violet"
									radius={9999}
									sx={{ fontSize: 20 }}>
									-5
								</Button>
								<Flex justify="center" align="center" px={32}>
									<TimerClockText
										value={mins}
										align="right"></TimerClockText>
									<Text c="white" size={96}>
										:
									</Text>
									<TimerClockText
										value={secs}
										align="left"></TimerClockText>
								</Flex>
								<Button
									variant="light"
									color="violet"
									radius={9999}
									sx={{ fontSize: 20 }}>
									+5
								</Button>
							</Flex>
						</Text>
					</Flex>
				</Flex>
			</Paper>
		</>
	);
}
