import { Flex, Paper } from "@mantine/core";
import { useEffect, useReducer, useRef } from "react";
import DEFAULT_POMOSTATE from "../../../../../lib/applets/pomo/libPomoState/defaultPomoState";
import pomoTimerReducer from "../../../../../lib/applets/pomo/libPomoState/pomoTimerReducer/pomoTimerReducer";
import { NodeInterval } from "../../../../../lib/utils/types";
import PomoProgress from "./PomoProgress/PomoProgress";
import PomoTimerInner from "./PomoTimerInner/PomoTimerInner";

export default function PomoTimer() {
  const [pomoState, updatePomoState] = useReducer(
    pomoTimerReducer,
    DEFAULT_POMOSTATE,
  );

  let interval = useRef<NodeInterval | null>(null);
  const toggleTimer = () => {
    const startTimer = () => {
      console.log("start timer");
      interval.current = setInterval(() => {
        updatePomoState({
          ...pomoState,
          remainingSecs: pomoState.remainingSecs - 1,
        });
      }, 1000);
    };

    const stopTimer = () => {
      console.log("stop timer");
      clearInterval(interval.current!);
      interval.current = null;
    };

    let out = { ...pomoState, paused: !pomoState.paused };
    out.paused ? stopTimer() : startTimer();
    updatePomoState(out);
  };

  useEffect(() => {
    clearInterval(interval.current!);
  }, [pomoState]);

  const skip = () => {};

  const progressHeight = 12;

  return (
    <>
      <Paper
        h={300}
        pt={progressHeight}
        w="100%"
        sx={(theme) => {
          return {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.white,
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[3]
            }`,
          };
        }}
      >
        <Flex
          direction="column"
          w="100%"
          h="100%"
          justify="space-between"
          align="center"
        >
          <Flex align="center" h="100%">
            <PomoTimerInner
              toggleTimer={toggleTimer}
              skip={skip}
              pomoState={pomoState}
              updatePomoState={updatePomoState}
            />
          </Flex>
          <PomoProgress height={progressHeight} pomoState={pomoState} />
        </Flex>
      </Paper>
    </>
  );
}
