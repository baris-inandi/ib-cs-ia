import { Box, Paper } from "@mantine/core";
import { useAtom } from "jotai";
import { useDoEvery } from "../../../../../hooks/useDoEvery";
import TaskList from "../Tasks/TaskList/TaskList";
import PomoHotkeys from "./PomoHotkeys";
import PomoTimer from "./PomoTimer/PomoTimer";
import { pomoStateAtom } from "./atoms/pomoState.atom";

const Pomo = () => {
    const [pomoState] = useAtom(pomoStateAtom);

    useDoEvery(500, () => pomoState.hook());

    return (
        <Box w="100%">
            <PomoHotkeys />
            <div className="flex h-full flex-col gap-4 p-4">
                <Paper
                    w="100%"
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
