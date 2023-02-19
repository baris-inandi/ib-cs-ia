import { Button, ButtonVariant } from "@mantine/core";
import { useAtom } from "jotai";
import { ReactNode } from "react";
import libPomoState from "../../../../../lib/applets/pomo/libPomoState/libPomoState";
import { pomoThemeAtom } from "../../../Pages/Pomo/atoms/pomoTheme.atom";

interface PomoTimerControlsButtonProps {
  onClick: () => void;
  disabled: boolean;
  isPositiveIfForIncreaseDecreaseTime?: boolean;
  children?: ReactNode;
  variant?: ButtonVariant;
}

const PomoTimerControlsButton: React.FC<
  PomoTimerControlsButtonProps
> = (props) => {
  const [pomoTheme] = useAtom(pomoThemeAtom);

  return (
    <Button
      size="sm"
      variant={props.variant ? props.variant : "filled"}
      color={pomoTheme}
      onClick={props.onClick}
      disabled={props.disabled}
      px={18}
      h="100%"
    >
      {props.children
        ? props.children
        : (props.isPositiveIfForIncreaseDecreaseTime ? "+" : "-") +
          libPomoState.INCREMENT_MINS}
    </Button>
  );
};

export default PomoTimerControlsButton;
