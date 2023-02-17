import { Flex, Text } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
} from "@tabler/icons";
import { useAtom } from "jotai";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoThemeAtom } from "../../atoms/pomoTheme.atom";
import PomoTimerClock from "./PomoTimerClock/PomoTimerClock";
import PomoTimerControlsButton from "./PomoTimerControlsButton/PomoTimerControlsButton";
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
          color: theme.colors[pomoTheme][9],
        };
      }}
      gap={20}
    >
      <Text size={18}>
        Pomodoro #{props.pomoState.currentPomodoroNumber} •{" "}
        {props.pomoState.currentPomodoroType}
      </Text>
      <PomoTimerClock pomoState={props.pomoState} />
      <Flex
        justify="center"
        align="center"
        gap={18}
      >
        <PomoTimerControlsButton
          onClick={() => {
            props.updatePomoState(
              libPomoState.decrement(props.pomoState),
            );
          }}
          disabled={libPomoState.ui.decrementDisabled(props.pomoState)}
          isPositive={false}
        />
        <PomoTimerControlsButton
          disabled={false}
          onClick={props.toggleTimer}
        >
          {props.pomoState.paused ? (
            <IconPlayerPlay size={20} />
          ) : (
            <IconPlayerPause size={20} />
          )}
        </PomoTimerControlsButton>
        <PomoTimerControlsButton
          disabled={false}
          onClick={props.skip}
        >
          <IconPlayerSkipForward size={20} />
        </PomoTimerControlsButton>
        <PomoTimerControlsButton
          onClick={() => {
            props.updatePomoState(
              libPomoState.increment(props.pomoState),
            );
          }}
          disabled={libPomoState.ui.incrementDisabled(props.pomoState)}
          isPositive={true}
        />
      </Flex>
    </Flex>
  );
};

export default PomoTimerInner;
