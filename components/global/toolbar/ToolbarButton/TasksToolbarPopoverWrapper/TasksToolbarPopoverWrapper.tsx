import { Popover } from "@mantine/core";

interface TasksToolbarPopoverWrapperProps {
    dropdown: React.ReactNode;
    toolbarButton: React.ReactNode;
}

const TasksToolbarPopoverWrapper: React.FC<
    TasksToolbarPopoverWrapperProps
> = (props) => {
    return (
        <Popover
            transitionProps={{ transition: "scale" }}
            position="bottom"
            withArrow
            shadow="md"
        >
            <Popover.Target>{props.toolbarButton}</Popover.Target>
            <Popover.Dropdown>{props.dropdown}</Popover.Dropdown>
        </Popover>
    );
};

export default TasksToolbarPopoverWrapper;

