import { Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import DEFAULT_POMOSTATE from "../../../../../../../lib/applets/pomo/libPomoState/defaultPomoState";
import IPomoState from "../../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import libPomoState from "../../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import TimerClockText from "./PomoTimerClockText";

interface PomoTimerClockProps {
	pomoState: IPomoState;
}

const PomoTimerClock: React.FC<PomoTimerClockProps> = (props) => {
	let [remaining, setRemaining] = useState(
		libPomoState.remainingFormatted(DEFAULT_POMOSTATE),
	);
	useEffect(() => {
		setRemaining(libPomoState.remainingFormatted(props.pomoState));
	}, [props.pomoState]);
	return (
		<Flex justify="center" align="center" px={12}>
			<TimerClockText
				value={remaining.mins}
				align="right"></TimerClockText>
			<Text c="white" size={96} lh={1}>
				:
			</Text>
			<TimerClockText
				value={remaining.secs}
				align="left"></TimerClockText>
		</Flex>
	);
};

export default PomoTimerClock;
