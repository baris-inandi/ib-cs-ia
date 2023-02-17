import { Button } from "@mantine/core";
import { useAtom } from "jotai";
import { ReactNode } from "react";
import libPomoState from "../../../../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoThemeAtom } from "../../../atoms/pomoTheme.atom";

interface PomoTimerControlsButtonProps {
  onClick: () => void;
  disabled: boolean;
  isPositive?: boolean;
  children?: ReactNode;
}

const PomoTimerControlsButton: React.FC<
  PomoTimerControlsButtonProps
> = (props) => {
  const [pomoTheme] = useAtom(pomoThemeAtom);

  return (
    <Button
      variant="outline"
      color={pomoTheme}
      radius={9999}
      onClick={props.onClick}
      fw={400}
      sx={{ fontSize: 20 }}
      disabled={props.disabled}
    >
      {props.children
        ? props.children
        : (props.isPositive ? "+" : "-") + libPomoState.INCREMENT_MINS}
    </Button>
  );
};

export default PomoTimerControlsButton;
