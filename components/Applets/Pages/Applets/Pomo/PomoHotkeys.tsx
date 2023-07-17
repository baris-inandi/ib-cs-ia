import { useAtom } from "jotai";
import Hotkeys from "../../../../global/Hotkeys";
import { pomoStateAtom } from "./atoms/pomoState.atom";

interface PomoHotkeysProps {}

const PomoHotkeys: React.FC<PomoHotkeysProps> = () => {
    const [pomoState, setPomoState] = useAtom(pomoStateAtom);

    return (
        <Hotkeys
            appletTitle="Pomodoro Hotkeys"
            hotkeys={[
                {
                    help: "Start/stop timer",
                    hotkey: "Space",
                    callback: () => {
                        pomoState.pauseplay();
                    },
                },
                {
                    help: "Reset timer",
                    hotkey: "alt+R",
                    callback: () => {
                        pomoState.reset();
                    },
                },
                {
                    help: "Increment timer",
                    hotkey: "arrowUp",
                    hotkeyDisplay: "↑",
                    callback: () => {
                        pomoState.increment();
                    },
                },
                {
                    help: "Decrement timer",
                    hotkey: "arrowDown",
                    hotkeyDisplay: "↓",
                    callback: () => {
                        pomoState.decrement();
                    },
                },
                {
                    help: "Skip to next stage",
                    hotkey: "Mod+Enter",
                    callback: () => {
                        pomoState.nextStage();
                    },
                },
            ]}
        />
    );
};

export default PomoHotkeys;

