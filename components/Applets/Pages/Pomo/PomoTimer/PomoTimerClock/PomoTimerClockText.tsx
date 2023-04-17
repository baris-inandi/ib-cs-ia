import { Text } from "@mantine/core";
import { toValidTimeString } from "../../../../../../lib/applets/pomo/pomoTimeValidation";

export default function TimerClockText(props: {
    value: number;
    align: "left" | "center" | "right";
    width?: string;
}) {
    return (
        <Text
            align={props.align}
            size={64}
            w={props.width ?? "fit-content"}
            lh={1}
            fw={300}
        >
            {toValidTimeString(props.value)}
        </Text>
    );
}
