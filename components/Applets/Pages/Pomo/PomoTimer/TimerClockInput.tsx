import { Paper } from "@mantine/core";
import { toValidTimeString } from "../../../../../lib/applets/pomo/pomoTimeValidation";

export default function TimerClockInput(props: {
	value: number;
	align: "left" | "center" | "right";
}) {
	return (
		<Paper w={"fit-content"}>
			{toValidTimeString(props.value)}
		</Paper>
	);
}
