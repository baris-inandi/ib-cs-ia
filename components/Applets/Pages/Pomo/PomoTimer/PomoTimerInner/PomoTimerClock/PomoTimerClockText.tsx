import { Text } from "@mantine/core";
import { toValidTimeString } from "../../../../../../../lib/applets/pomo/pomoTimeValidation";

export default function TimerClockText(props: {
	value: number;
	align: "left" | "center" | "right";
}) {
	return (
		<Text size={96} w={"fit-content"} lh={1} fw={300}>
			{toValidTimeString(props.value)}
		</Text>
	);
}
