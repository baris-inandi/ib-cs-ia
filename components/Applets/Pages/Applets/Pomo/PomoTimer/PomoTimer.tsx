import { Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../atoms/pomoState.atom";
import { pomoThemeAtom } from "../atoms/pomoTheme.atom";
import PomoProgress from "./PomoProgress/PomoProgress";

export default function PomoTimer() {
    const [pomoState] = useAtom(pomoStateAtom);
    const [pomoTheme] = useAtom(pomoThemeAtom);

    return (
        <>
            <Flex
                justify="center"
                align="center"
                w="100%"
                h={40}
                sx={(theme) => {
                    return {
                        color: theme.white,
                        textAlign: "center",
                        borderTopLeftRadius: theme.radius.md,
                        borderTopRightRadius: theme.radius.md,
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[4]
                                : theme.colors[pomoTheme][5],
                        textTransform: "capitalize",
                    };
                }}
            >
                <Text size={18}>
                    Pomodoro {pomoState.currentPomodoroNumber} •{" "}
                    {pomoState.currentPomodoroStage}
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
