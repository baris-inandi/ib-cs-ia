import { Flex } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
} from "@tabler/icons";
import { useAtom } from "jotai";
import React from "react";
import libPomoState from "../../../../lib/applets/pomo/libPomoState/libPomoState";
import toggleTimer from "../../../../lib/applets/pomo/toolbar/toggleTimer";
import { pomoStateAtom } from "../../Pages/Pomo/atoms/pomoState.atom";
import PomoTimerControlsButton from "./PomoTimerControlsButton/PomoTimerControlsButton";

interface PomoToolbarProps {}

const PomoToolbar: React.FC<PomoToolbarProps> = () => {
  const [pomoState, setPomoState] = useAtom(pomoStateAtom);

  return (
    <Flex h="100%" justify="center" align="center" gap={10}>
      <PomoTimerControlsButton
        onClick={() => {
          setPomoState(libPomoState.decrement(pomoState));
        }}
        disabled={libPomoState.ui.decrementDisabled(pomoState)}
        isPositiveIfForIncreaseDecreaseTime={false}
        variant="outline"
      />
      <PomoTimerControlsButton
        onClick={() => {
          setPomoState(libPomoState.increment(pomoState));
        }}
        disabled={libPomoState.ui.incrementDisabled(pomoState)}
        isPositiveIfForIncreaseDecreaseTime={true}
        variant="outline"
      />
      <div className="w-3"></div>
      <PomoTimerControlsButton
        disabled={false}
        onClick={() => {
          setPomoState(libPomoState.generateDefaultPomoState());
        }}
      >
        Reset
      </PomoTimerControlsButton>
      <PomoTimerControlsButton
        disabled={false}
        onClick={() => {
          toggleTimer(pomoState, setPomoState);
        }}
      >
        {pomoState.pause.is ? (
          <IconPlayerPlay size={20} />
        ) : (
          <IconPlayerPause size={20} />
        )}
      </PomoTimerControlsButton>
      <PomoTimerControlsButton
        disabled={false}
        onClick={() => {
          libPomoState.nextStage(pomoState, setPomoState);
        }}
      >
        <IconPlayerSkipForward size={20} />
      </PomoTimerControlsButton>
    </Flex>
  );
};

export default PomoToolbar;
