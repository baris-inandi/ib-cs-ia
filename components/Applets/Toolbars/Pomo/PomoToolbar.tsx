import { Flex } from "@mantine/core";
import {
    IconPlayerPause,
    IconPlayerPlay,
    IconPlayerSkipForward,
    IconRefresh,
} from "@tabler/icons";
import { useAtom } from "jotai";
import React from "react";
import ToolbarButton from "../../../global/toolbar/ToolbarButton/ToolbarButton";
import { pomoStateAtom } from "../../Pages/Applets/Pomo/atoms/pomoState.atom";

interface PomoToolbarProps {}

const PomoToolbar: React.FC<PomoToolbarProps> = () => {
    const [pomoState] = useAtom(pomoStateAtom);

    return (
        <Flex h="100%" justify="center" align="center" gap={10}>
            <ToolbarButton
                label="-5"
                onClick={() => pomoState.decrement()}
            />
            <ToolbarButton
                label="+5"
                onClick={() => pomoState.increment()}
            />
            <ToolbarButton
                icon={IconRefresh}
                label="Reset"
                onClick={() => pomoState.reset()}
            />
            <ToolbarButton
                label={pomoState.pausedMillis ? "Continue" : "Pause"}
                icon={
                    pomoState.isPaused()
                        ? IconPlayerPlay
                        : IconPlayerPause
                }
                onClick={() => pomoState.pauseplay()}
            />
            <ToolbarButton
                label="Skip"
                icon={IconPlayerSkipForward}
                onClick={() => {
                    pomoState.nextStage();
                }}
            />
        </Flex>
    );
};

export default PomoToolbar;
