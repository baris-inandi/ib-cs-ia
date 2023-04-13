import { Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoStateAtom } from "../../atoms/pomoState.atom";
import TimerClockText from "./PomoTimerClockText";

interface PomoTimerClockProps {}

const PomoTimerClock: React.FC<PomoTimerClockProps> = (props) => {
  const [pomoState] = useAtom(pomoStateAtom);

  let [remaining, setRemaining] = useState({ mins: 25, secs: 0 });

  useEffect(() => {
    if (pomoState.pause.is) {
      setRemaining(pomoState.pause.clockState);
    } else {
      setRemaining(libPomoState.remainingFormatted(pomoState));
    }
  }, [pomoState]);

  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      justify="center"
      sx={(theme) => {
        return {
          color: theme.colorScheme === "dark" ? "white" : "black",
        };
      }}
      gap={20}
    >
      <Flex justify="center" align="center" px={12}>
        <TimerClockText
          width="1.5em"
          value={remaining.mins >= 0 ? remaining.mins : 0}
          align="right"
        ></TimerClockText>
        <Text size={64} lh={1} fw={300}>
          :
        </Text>
        <TimerClockText
          width="1.5em"
          value={remaining.secs >= 0 ? remaining.secs : 0}
          align="left"
        ></TimerClockText>
      </Flex>
    </Flex>
  );
};

export default PomoTimerClock;
