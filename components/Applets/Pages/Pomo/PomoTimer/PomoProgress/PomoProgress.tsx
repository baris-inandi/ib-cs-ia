import { Progress } from "@mantine/core";
import { useAtom } from "jotai";
import libPomoState from "../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoStateAtom } from "../../atoms/pomoState.atom";
import { pomoThemeAtom } from "../../atoms/pomoTheme.atom";

interface PomoProgressProps {
  height: number;
}

const PomoProgress: React.FC<PomoProgressProps> = (props) => {
  const [pomoTheme] = useAtom(pomoThemeAtom);
  const [pomoState] = useAtom(pomoStateAtom);

  return (
    <div className="w-full p-4">
      <Progress
        h={props.height}
        w="100%"
        color={pomoTheme}
        striped
        radius={0}
        sx={(theme) => {
          return {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors[pomoTheme][5], 0.2)
                : theme.colors[pomoTheme][2],
            borderRadius: theme.radius.md - 1,
          };
        }}
        value={
          (libPomoState.remaningSecs(pomoState) / pomoState.totalSecs) *
          100
        }
      ></Progress>
    </div>
  );
};

export default PomoProgress;
