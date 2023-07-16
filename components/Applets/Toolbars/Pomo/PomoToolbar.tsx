import { Flex } from "@mantine/core";
import {
    IconPlayerPause,
    IconPlayerPlay,
    IconPlayerSkipForward,
} from "@tabler/icons";
import { useAtom } from "jotai";
import React from "react";
import ToolbarButton from "../../../global/toolbar/ToolbarButton/ToolbarButton";
import { pomoStateAtom } from "../../Pages/Applets/Pomo/atoms/pomoState.atom";

interface PomoToolbarProps {}

const PomoToolbar: React.FC<PomoToolbarProps> = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    return (
        <Flex h="100%" justify="center" align="center" gap={10}>
            <ToolbarButton label="-5" /> {/* - 5 */}
            <ToolbarButton label="+5" /> {/* + 5 */}
            <ToolbarButton label="Reset" />
            <ToolbarButton
                label={pomoState.pausedMillis ? "Play" : "Pause"}
                icon={
                    pomoState.pausedMillis
                        ? IconPlayerPlay
                        : IconPlayerPause
                }
            />
            <ToolbarButton label="Skip" icon={IconPlayerSkipForward} />
        </Flex>
    );
};

export default PomoToolbar;

