import {
    Box,
    Text,
    Tooltip,
    UnstyledButton,
    useMantineTheme,
} from "@mantine/core";
import { TablerIcon, TablerIconProps } from "@tabler/icons";
import TasksToolbarPopoverWrapper from "./TasksToolbarPopoverWrapper/TasksToolbarPopoverWrapper";

interface ToolbarButtonProps {
    icon?: TablerIcon;
    iconProps?: TablerIconProps;
    label: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = (props) => {
    const theme = useMantineTheme();
    const inner = (
        <Text
            sx={{
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[1]
                        : theme.colors.gray[7],
            }}
            size="lg"
            className="font-semibold"
        >
            {props.icon ? (
                <props.icon size={24} stroke={1.5} {...props.iconProps} />
            ) : (
                props.label
            )}
        </Text>
    );
    const nodes = (
        <UnstyledButton onClick={props.onClick} className="block px-2">
            <Box
                className="cursor-pointer"
                h={props.icon ? 22 : "auto"}
                px={3}
            >
                {props.icon ? (
                    <Tooltip label={props.label}>{inner}</Tooltip>
                ) : (
                    inner
                )}
            </Box>
        </UnstyledButton>
    );
    return props.children ? (
        <TasksToolbarPopoverWrapper
            toolbarButton={nodes}
            dropdown={props.children}
        />
    ) : (
        nodes
    );
};

export default ToolbarButton;

