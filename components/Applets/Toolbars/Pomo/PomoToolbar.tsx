import { Flex } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
} from "@tabler/icons";
import React from "react";
import PomoTimerControlsButton from "./PomoTimerControlsButton/PomoTimerControlsButton";

interface PomoToolbarProps {}

const PomoToolbar: React.FC<PomoToolbarProps> = () => {
  return (
    <Flex h="100%" justify="center" align="center" gap={10}>
      <PomoTimerControlsButton
        onClick={() => {
          /* props.updatePomoState(
              libPomoState.decrement(props.pomoState),
            ); */
        }}
        disabled={
          /* libPomoState.ui.decrementDisabled(props.pomoState) */ false
        }
        isPositiveIfForIncreaseDecreaseTime={false}
        variant="outline"
      />
      <PomoTimerControlsButton
        onClick={() => {
          /*  props.updatePomoState(
            libPomoState.increment(props.pomoState),
          ); */
        }}
        disabled={
          /* libPomoState.ui.incrementDisabled(props.pomoState) */ false
        }
        isPositiveIfForIncreaseDecreaseTime={true}
        variant="outline"
      />
      <div className="w-3"></div>
      <PomoTimerControlsButton
        disabled={false}
        onClick={/* props.toggleTimer */ () => {}}
      >
        {
          /* props.pomoState.paused */ false ? (
            <IconPlayerPlay size={18} />
          ) : (
            <IconPlayerPause size={18} />
          )
        }
      </PomoTimerControlsButton>
      <PomoTimerControlsButton
        disabled={false}
        onClick={/* props.skip */ () => {}}
      >
        <IconPlayerSkipForward size={18} />
      </PomoTimerControlsButton>
    </Flex>
  );
};

export default PomoToolbar;
