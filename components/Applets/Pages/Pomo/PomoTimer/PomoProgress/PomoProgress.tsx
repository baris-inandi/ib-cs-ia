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
            backgroundColor: theme.colors[pomoTheme][2],
            borderRadius: theme.radius.lg - 1,
            outline: `1px solid ${theme.colors[pomoTheme][3]}`,
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
