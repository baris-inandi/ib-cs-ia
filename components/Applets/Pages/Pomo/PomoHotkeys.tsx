import { useAtom } from "jotai";
import Hotkeys from "../../../global/Hotkeys";
import { pomoStateAtom } from "./atoms/pomoState.atom";

interface PomoHotkeysProps {}

const PomoHotkeys: React.FC<PomoHotkeysProps> = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    return (
        <Hotkeys
            appletTitle="Pomodoro Hotkeys"
            hotkeys={
                [
                    /*  {
                    help: "Start/stop timer",
                    hotkey: "Space",
                    callback: () => {
                        toggleTimer(pomoState, setPomoState);
                    },
                },
                {
                    help: "Reset timer",
                    hotkey: "alt+R",
                    callback: () => {
                        setPomoState(
                            libPomoState.generateDefaultPomoState(),
                        );
                    },
                },
                {
                    help: "Increment timer",
                    hotkey: "arrowUp",
                    hotkeyDisplay: "↑",
                    callback: () => {
                        setPomoState(libPomoState.increment(pomoState));
                    },
                },
                {
                    help: "Decrement timer",
                    hotkey: "arrowDown",
                    hotkeyDisplay: "↓",
                    callback: () => {
                        setPomoState(libPomoState.decrement(pomoState));
                    },
                },
                {
                    help: "Skip to next stage",
                    hotkey: "Mod+Enter",
                    callback: () => {
                        libPomoState.nextStage(pomoState, setPomoState);
                    },
                }, */
                ]
            }
        />
    );
};

export default PomoHotkeys;
