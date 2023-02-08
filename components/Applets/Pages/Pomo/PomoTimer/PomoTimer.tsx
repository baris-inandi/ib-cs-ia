import { Box, Flex, Paper, Progress } from "@mantine/core";
import { useEffect, useReducer, useRef } from "react";
import DEFAULT_POMOSTATE from "../../../../../lib/applets/pomo/libPomoState/defaultPomoState";
import pomoTimerReducer from "../../../../../lib/applets/pomo/libPomoState/pomoTimerReducer/pomoTimerReducer";
import { NodeInterval } from "../../../../../lib/utils/types";
import PomoControls from "./PomoControls/PomoControls";
import PomoTimerInner from "./PomoTimerInner/PomoTimerInner";

export default function PomoTimer() {
	const [pomoState, updatePomoState] = useReducer(
		pomoTimerReducer,
		DEFAULT_POMOSTATE,
	);

	let interval = useRef<NodeInterval | null>(null);
	const toggleTimer = () => {
		const startTimer = () => {
			console.log("start timer");
			interval.current = setInterval(() => {
				updatePomoState({
					...pomoState,
					remainingSecs: pomoState.remainingSecs - 1,
				});
			}, 1000);
		};

		const stopTimer = () => {
			console.log("stop timer");
			clearInterval(interval.current!);
			interval.current = null;
		};

		let out = { ...pomoState, paused: !pomoState.paused };
		out.paused ? stopTimer() : startTimer();
		updatePomoState(out);
	};

	useEffect(() => {
		clearInterval(interval.current!);
	}, [pomoState]);

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
						(pomoState.totalSecs / pomoState.remainingSecs) * 100
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
						<PomoTimerInner
							pomoState={pomoState}
							updatePomoState={updatePomoState}
						/>
					</Flex>
				</Flex>
				<PomoControls
					pomoState={pomoState}
					toggleTimer={toggleTimer}
					updatePomoState={updatePomoState}
				/>
			</Paper>
		</>
	);
}
