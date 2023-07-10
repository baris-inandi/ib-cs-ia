import { Box } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import PomoHotkeys from "./PomoHotkeys";
import PomoTimer from "./PomoTimer/PomoTimer";
import { pomoStateAtom } from "./atoms/pomoState.atom";

const Pomo = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);
    const [time, setTime] = useState(Date.now());
    useEffect(() => {
        const everySecond = setInterval(() => {
            setTime(Date.now());
            pomoState.hook();
        }, 100);
        return () => {
            clearInterval(everySecond);
        };
    }, [pomoState, setPomoState, time]);

    return (
        <Box w="100%">
            <PomoHotkeys />
            <div className="p-4">
                <PomoTimer />
            </div>
        </Box>
    );
};

export default Pomo;
