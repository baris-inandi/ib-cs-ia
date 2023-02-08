import { Flex, Text } from "@mantine/core";
import {
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipForward,
} from "@tabler/icons";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import PomoTimerClock from "./PomoTimerClock/PomoTimerClock";
import PomoTimerControlsButton from "./PomoTimerControlsButton/PomoTimerControlsButton";
interface PomoTimerInnerProps {
	updatePomoState: (pomoState: IPomoState) => void;
	pomoState: IPomoState;
	toggleTimer: () => void;
	skip: () => void;
}

const PomoTimerInner: React.FC<PomoTimerInnerProps> = (props) => {
	return (
		<Flex direction="column" align="center" c="white" gap={20}>
			<Text size={18}>Pomodoro #1 - focus</Text>
			<PomoTimerClock pomoState={props.pomoState} />
			<Flex justify="center" align="center" gap={20}>
				<PomoTimerControlsButton
					onClick={() => {
						props.updatePomoState(
							libPomoState.decrement(props.pomoState),
						);
					}}
					disabled={libPomoState.ui.decrementDisabled(
						props.pomoState,
					)}
					isPositive={false}
				/>
				<PomoTimerControlsButton
					disabled={false}
					onClick={props.toggleTimer}>
					{props.pomoState.paused ? (
						<IconPlayerPlay />
					) : (
						<IconPlayerPause />
					)}
				</PomoTimerControlsButton>
				<PomoTimerControlsButton disabled={false} onClick={props.skip}>
					<IconPlayerSkipForward />
				</PomoTimerControlsButton>
				<PomoTimerControlsButton
					onClick={() => {
						props.updatePomoState(
							libPomoState.increment(props.pomoState),
						);
					}}
					disabled={libPomoState.ui.incrementDisabled(
						props.pomoState,
					)}
					isPositive={true}
				/>
			</Flex>
		</Flex>
	);
};

export default PomoTimerInner;
