import { Progress } from "@mantine/core";
import { useAtom } from "jotai";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";
import { pomoThemeAtom } from "../../atoms/pomoTheme.atom";

interface PomoProgressProps {
  pomoState: IPomoState;
  height: number;
}

const PomoProgress: React.FC<PomoProgressProps> = (props) => {
  const [pomoTheme] = useAtom(pomoThemeAtom);
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
                ? theme.fn.rgba(theme.colors[pomoTheme][5], 0.25)
                : theme.colors[pomoTheme][2],
            borderRadius: theme.radius.md - 1,
          };
        }}
        value={
          (props.pomoState.totalSecs / props.pomoState.remainingSecs) *
            100 -
          60
        }
      ></Progress>
    </div>
  );
};

export default PomoProgress;
