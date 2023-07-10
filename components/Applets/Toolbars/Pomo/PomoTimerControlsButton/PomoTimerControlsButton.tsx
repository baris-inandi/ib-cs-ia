import { Button, ButtonVariant } from "@mantine/core";
import { useAtom } from "jotai";
import { ReactNode } from "react";
import { pomoStateAtom } from "../../../Pages/Applets/Pomo/atoms/pomoState.atom";
import { pomoThemeAtom } from "../../../Pages/Applets/Pomo/atoms/pomoTheme.atom";

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
    const [pomoState] = useAtom(pomoStateAtom);

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
                : (props.isPositiveIfForIncreaseDecreaseTime
                      ? "+"
                      : "-") + 31}
        </Button>
    );
};

export default PomoTimerControlsButton;

