import { Box } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import libPomoState from "../../../../lib/applets/pomo/libPomoState/libPomoState";
import PomoHotkeys from "./PomoHotkeys";
import PomoTimer from "./PomoTimer/PomoTimer";
import { pomoStateAtom } from "./atoms/pomoState.atom";

const Pomo = () => {
  const [pomoState, setPomoState] = useAtom(pomoStateAtom);

  useEffect(() => {
    if (libPomoState.isReadyForAutoNextStage(pomoState)) {
      libPomoState.nextStage(pomoState, setPomoState);
    }
  }, [pomoState, setPomoState]);

  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const doEverySecond = () => {
      if (libPomoState.isReadyForAutoNextStage(pomoState)) {
        libPomoState.nextStage(pomoState, setPomoState);
      }
      setPomoState({
        ...pomoState,
        secondsPassed:
          pomoState.secondsPassed + (pomoState.pause.is ? 0 : 1),
        $: !pomoState.$,
      });
    };
    const interval = setInterval(() => {
      setTime(Date.now());
      doEverySecond();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [pomoState, setPomoState, time]);

  return (
    <Box w="100%">
      <PomoHotkeys />
      <PomoTimer />
    </Box>
  );
};

export default Pomo;
