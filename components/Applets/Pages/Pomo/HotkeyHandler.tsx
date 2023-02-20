import { useHotkeys } from "@mantine/hooks";
import { useAtom } from "jotai";
import toggleTimer from "../../../../lib/applets/pomo/toolbar/toggleTimer";
import { pomoStateAtom } from "./atoms/pomoState.atom";

interface HotkeyHandlerProps {}

const HotkeyHandler: React.FC<HotkeyHandlerProps> = () => {
  const [pomoState, setPomoState] = useAtom(pomoStateAtom);

  useHotkeys([
    [
      "space",
      () => {
        toggleTimer(pomoState, setPomoState);
      },
    ],
    ["ctrl+K", () => console.log("Trigger search")],
    ["alt+mod+shift+X", () => console.log("Rick roll")],
  ]);
  return <div />;
};

export default HotkeyHandler;
