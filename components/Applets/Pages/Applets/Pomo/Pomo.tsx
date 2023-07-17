import { Box, Paper } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useDoEvery } from "../../../../../hooks/useDoEvery";
import TaskList from "../Tasks/TaskList/TaskList";
import PomoHotkeys from "./PomoHotkeys";
import PomoTimer from "./PomoTimer/PomoTimer";
import { pomoStateAtom } from "./atoms/pomoState.atom";

const Pomo = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    useEffect(() => {
        pomoState.initSetter(setPomoState);
    }, [pomoState, setPomoState]);

    useDoEvery(200, () => pomoState.hook());

    /* TODO: MAKE A FULLSCREEN POMO UI */

    return (
        <Box w="100%">
            <PomoHotkeys />
            <div className="flex h-full flex-row gap-4 p-4">
                <Paper
                    w="100%"
                    h="100%"
                    withBorder
                    sx={(theme) => {
                        return {
                            background: theme.fn.rgba(
                                theme.colors[pomoState.theme()][5],
                                0.07,
                            ),
                        };
                    }}
                >
                    <PomoTimer />
                </Paper>
                <Paper
                    w="100%"
                    className="h-full grow"
                    withBorder
                    sx={(theme) => {
                        return {
                            background:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[6]
                                    : theme.colors.white,
                        };
                    }}
                >
                    <TaskList />
                </Paper>
            </div>
        </Box>
    );
};

export default Pomo;

