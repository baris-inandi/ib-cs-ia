import { Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../../atoms/pomoState.atom";
import TimerClockText from "./PomoTimerClockText";

interface PomoTimerClockProps {}

const PomoTimerClock: React.FC<PomoTimerClockProps> = (props) => {
    const [pomoState] = useAtom(pomoStateAtom);

    return (
        <Flex
            w="100%"
            direction="column"
            align="center"
            justify="center"
            sx={(theme) => {
                return {
                    color:
                        theme.colorScheme === "dark"
                            ? "white"
                            : "black",
                };
            }}
            gap={20}
        >
            <Flex justify="center" align="center" px={12}>
                <TimerClockText
                    width="1.5em"
                    value={pomoState.getClockState().mins}
                    align="right"
                ></TimerClockText>
                <Text size={64} lh={1} fw={300}>
                    :
                </Text>
                <TimerClockText
                    width="1.5em"
                    value={pomoState.getClockState().secs}
                    align="left"
                ></TimerClockText>
            </Flex>
        </Flex>
    );
};

export default PomoTimerClock;
