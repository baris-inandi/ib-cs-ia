import { Text } from "@mantine/core";
import { toValidTimeString } from "../../../../../lib/applets/pomo/pomoTimeValidation";

export default function TimerClockText(props: {
	value: number;
	align: "left" | "center" | "right";
}) {
	return (
		<Text size={96} c="white" w={"fit-content"}>
			{toValidTimeString(props.value)}
		</Text>
	);
}
