import { Button } from "@mantine/core";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";

interface PomoTimerIncrementDecrementButtonProps {
	onClick: () => void;
	disabled: boolean;
	isPositive: boolean;
}

const PomoTimerIncrementDecrementButton: React.FC<
	PomoTimerIncrementDecrementButtonProps
> = (props) => {
	return (
		<Button
			variant="light"
			color="violet"
			radius={9999}
			onClick={props.onClick}
			sx={{ fontSize: 20 }}
			disabled={props.disabled}>
			{props.isPositive ? "+" : "-"}
			{libPomoState.INCREMENT_MINS}
		</Button>
	);
};

export default PomoTimerIncrementDecrementButton;
