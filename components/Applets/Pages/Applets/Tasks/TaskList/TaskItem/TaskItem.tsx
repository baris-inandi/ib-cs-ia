import {
    Avatar,
    Box,
    Group,
    Text,
    Tooltip,
    UnstyledButton,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import ITask from "../../../../../../../lib/applets/tasks/ITask";
import { nameInitials } from "../../../../../../../lib/utils/nameInitials";
import TaskBadgeDue from "./TaskBadges/TaskBadgeDue";
import TaskItemCheckbox from "./TaskItemCheckbox/TaskItemCheckbox";
import TaskItemDrawer from "./TaskItemDrawer/TaskItemDrawer";
import useStyles from "./taskitem.styles";

interface TaskItemProps {
    task: ITask;
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
    const [opened, openClose] = useToggle();
    const { classes, cx } = useStyles();

    return (
        <div>
            <TaskItemDrawer
                task={props.task}
                openClose={openClose}
                opened={opened}
            />
            <Box
                sx={(theme) => {
                    return {
                        background:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.white,
                        borderTop: `1px solid ${
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[5]
                                : theme.colors.gray[3]
                        }`,
                    };
                }}
                className={"select-none pl-11 " + cx(classes.item)}
            >
                <div className="pr-5">
                    <TaskItemCheckbox task={props.task} />
                </div>
                <Group noWrap position="apart" w="100%">
                    <Group noWrap align="stretch">
                        <UnstyledButton
                            className="w-60 cursor-pointer"
                            onClick={() => {
                                openClose();
                            }}
                        >
                            <Text
                                lh={"125%"}
                                className={
                                    props.task.complete
                                        ? "line-through"
                                        : ""
                                }
                                onClick={() => {
                                    console.log("click");
                                }}
                            >
                                {props.task.title}
                            </Text>
                            <Text color="dimmed" size="sm" lh={"125%"}>
                                {props.task.description}
                            </Text>
                        </UnstyledButton>

                        <TaskBadgeDue task={props.task} />
                    </Group>
                    <Group noWrap spacing="xl">
                        <Text color="dimmed" align="right" size="sm">
                            {props.task.classId}
                        </Text>
                        <Tooltip
                            label="assigned by Ada Lovelace"
                            position="top-end"
                            withArrow
                        >
                            <Avatar
                                size={28}
                                radius={999}
                                variant="filled"
                            >
                                {nameInitials("Ada Lovelace")}
                            </Avatar>
                        </Tooltip>
                    </Group>
                </Group>
            </Box>
        </div>
    );
};

export default TaskItem;
