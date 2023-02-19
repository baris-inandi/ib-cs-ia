import { Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import { pomoThemeAtom } from "../../atoms/pomoTheme.atom";
import PomoTimerClock from "./PomoTimerClock/PomoTimerClock";
interface PomoTimerInnerProps {
  updatePomoState: (pomoState: IPomoState) => void;
  pomoState: IPomoState;
  toggleTimer: () => void;
  skip: () => void;
}

const PomoTimerInner: React.FC<PomoTimerInnerProps> = (props) => {
  const [pomoTheme] = useAtom(pomoThemeAtom);

  return (
    <Flex
      direction="column"
      align="center"
      sx={(theme) => {
        return {
          color:
            theme.colors[pomoTheme][
              theme.colorScheme === "dark" ? 1 : 9
            ],
        };
      }}
      gap={20}
    >
      <Text size={18}>
        Pomodoro #{props.pomoState.currentPomodoroNumber} •{" "}
        {props.pomoState.currentPomodoroType}
      </Text>
      <PomoTimerClock pomoState={props.pomoState} />
    </Flex>
  );
};

export default PomoTimerInner;
