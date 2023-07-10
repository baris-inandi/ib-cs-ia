import { Flex } from "@mantine/core";
import {
    IconPlayerPause,
    IconPlayerPlay,
    IconPlayerSkipForward,
} from "@tabler/icons";
import { useAtom } from "jotai";
import React from "react";
import { pomoStateAtom } from "../../Pages/Applets/Pomo/atoms/pomoState.atom";
import PomoTimerControlsButton from "./PomoTimerControlsButton/PomoTimerControlsButton";

interface PomoToolbarProps {}

const PomoToolbar: React.FC<PomoToolbarProps> = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    return (
        <Flex h="100%" justify="center" align="center" gap={10}>
            <PomoTimerControlsButton
                onClick={() => {}}
                disabled={false}
                isPositiveIfForIncreaseDecreaseTime={false}
                variant="outline"
            />
            <PomoTimerControlsButton
                onClick={() => {}}
                disabled={false}
                isPositiveIfForIncreaseDecreaseTime={true}
                variant="outline"
            />
            <div className="w-3"></div>
            <PomoTimerControlsButton
                disabled={false}
                onClick={() => {}}
            >
                Reset
            </PomoTimerControlsButton>
            <PomoTimerControlsButton
                disabled={false}
                onClick={() => {}}
            >
                {pomoState.pause.is ? (
                    <IconPlayerPlay size={20} />
                ) : (
                    <IconPlayerPause size={20} />
                )}
            </PomoTimerControlsButton>
            <PomoTimerControlsButton
                disabled={false}
                onClick={() => {}}
            >
                <IconPlayerSkipForward size={20} />
            </PomoTimerControlsButton>
        </Flex>
    );
};

export default PomoToolbar;

