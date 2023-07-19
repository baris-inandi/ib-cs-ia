import { Box } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useDoEvery } from "../../../../../hooks/useDoEvery";
import PomoHotkeys from "./PomoHotkeys";
import PomoProgress from "./PomoProgress/PomoProgress";
import { pomoStateAtom } from "./atoms/pomoState.atom";

const Pomo = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    useEffect(() => {
        pomoState.initSetter(setPomoState);
    }, [pomoState, setPomoState]);

    useDoEvery(200, () => pomoState.hook());

    return (
        <>
            <PomoHotkeys />
            <Box
                w="100%"
                h="100%"
                sx={(theme) => {
                    return {
                        background: theme.fn.rgba(
                            theme.colors[pomoState.theme()][5],
                            0.06,
                        ),
                    };
                }}
            >
                <PomoProgress />
            </Box>
        </>
    );
};

export default Pomo;

