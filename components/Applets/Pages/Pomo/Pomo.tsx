import { Box } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import libPomoState from "../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoStateAtom } from "./atoms/pomoState.atom";
import PomoTimer from "./PomoTimer/PomoTimer";

const Pomo = () => {
  const [pomoState, setPomoState] = useAtom(pomoStateAtom);

  useEffect(() => {
    if (libPomoState.checkForAutoNextStage(pomoState)) {
      setPomoState(libPomoState.skipToNextStage(pomoState));
    }
  }, [pomoState, setPomoState]);

  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const doEverySecond = () => {
      if (libPomoState.checkForAutoNextStage(pomoState)) {
        setPomoState(libPomoState.skipToNextStage(pomoState));
      }
      setPomoState({ ...pomoState, $: !pomoState.$ });
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
      <PomoTimer />
    </Box>
  );
};

export default Pomo;
