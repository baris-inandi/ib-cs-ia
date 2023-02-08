import { Flex } from "@mantine/core";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import PomoTimerClock from "./PomoTimerClock/PomoTimerClock";
import PomoTimerIncrementDecrementButton from "./PomoTimerIncrementDecrementButton";
interface PomoTimerInnerProps {
	updatePomoState: (pomoState: IPomoState) => void;
	pomoState: IPomoState;
}

const PomoTimerInner: React.FC<PomoTimerInnerProps> = (props) => {
	return (
		<Flex justify="center" align="center" gap={24}>
			<PomoTimerIncrementDecrementButton
				onClick={() => {
					props.updatePomoState(
						libPomoState.decrement(props.pomoState),
					);
				}}
				disabled={libPomoState.ui.decrementDisabled(props.pomoState)}
				isPositive={false}
			/>
			<PomoTimerClock pomoState={props.pomoState} />
			<PomoTimerIncrementDecrementButton
				onClick={() => {
					props.updatePomoState(
						libPomoState.increment(props.pomoState),
					);
				}}
				disabled={libPomoState.ui.incrementDisabled(props.pomoState)}
				isPositive={true}
			/>
		</Flex>
	);
};

export default PomoTimerInner;
