import { Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../atoms/pomoState.atom";
import PomoProgress from "./PomoProgress/PomoProgress";

export default function PomoTimer() {
    const [pomoState] = useAtom(pomoStateAtom);

    return (
        <>
            <Flex
                justify="center"
                align="center"
                w="100%"
                h={50}
                sx={(theme) => {
                    return {
                        color: theme.white,
                        textAlign: "center",
                        borderTopLeftRadius: theme.radius.md,
                        borderTopRightRadius: theme.radius.md,
                        /*  backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[4]
                                : theme.colors[pomoState.theme()][5], */
                        textTransform: "capitalize",
                    };
                }}
            >
                <Text
                    size={18}
                    fw={500}
                    sx={(theme) => {
                        return {
                            color:
                                theme.colorScheme === "dark"
                                    ? theme.colors[pomoState.theme()][2]
                                    : theme.colors[
                                          pomoState.theme()
                                      ][9],
                        };
                    }}
                >
                    Pomodoro {pomoState.currentPomodoroNumber} •{" "}
                    {pomoState.currentPomodoroStageAsLegacyPomoStage()}
                </Text>
            </Flex>
            <Flex
                direction="column"
                w="100%"
                h="100%"
                justify="center"
                align="center"
            >
                <PomoProgress />
            </Flex>
        </>
    );
}

