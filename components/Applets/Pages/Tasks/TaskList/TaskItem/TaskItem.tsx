import {
    Avatar,
    Box,
    Checkbox,
    Drawer,
    Group,
    Popover,
    Text,
    Tooltip,
    UnstyledButton,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { useToggle } from "@mantine/hooks";
import { IconCalendarDue } from "@tabler/icons";
import dayjs from "dayjs";
import ITask from "../../../../../../lib/applets/tasks/ITask";
import displayShortTaskDueDate from "../../../../../../lib/applets/tasks/displayShortTaskDueDate";
import { resolveTaskAccentFromPriority } from "../../../../../../lib/applets/tasks/resolveTaskAccentFromPriority";
import { nameInitials } from "../../../../../../lib/utils/nameInitials";
import TaskItemDrawer from "./TaskItemDrawer/TaskItemDrawer";
import useStyles from "./taskitem.styles";

interface TaskItemProps {
    task: ITask;
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
    const [opened, openClose] = useToggle();
    const { classes, cx } = useStyles();
    const timeAtComponentMounted = dayjs();
    console.log(timeAtComponentMounted.isAfter(props.task.due));

    return (
        <div>
            <Drawer
                opened={opened}
                onClose={openClose}
                position="right"
                size="lg"
                styles={{ content: { overflow: "scroll" } }}
            >
                <div className="pb-10">
                    <TaskItemDrawer task={props.task} />
                </div>
            </Drawer>

            <Box
                sx={(theme) => {
                    return {
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
                    <Checkbox
                        size="sm"
                        color={resolveTaskAccentFromPriority(
                            props.task.priority,
                        )}
                        styles={(theme) => {
                            let priorityAccent =
                                resolveTaskAccentFromPriority(
                                    props.task.priority,
                                );
                            return {
                                root: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "flex",
                                },
                                input: {
                                    "transition":
                                        "background 0.1s ease-out",
                                    "cursor": "pointer",
                                    "background": theme.fn.rgba(
                                        theme.colors[priorityAccent][5],
                                        0.1,
                                    ),
                                    "&:hover": {
                                        background: theme.fn.rgba(
                                            theme.colors[
                                                priorityAccent
                                            ][5],
                                            0.3,
                                        ),
                                    },
                                    "borderColor": theme.fn.rgba(
                                        theme.colors[priorityAccent][7],
                                        theme.colorScheme === "dark"
                                            ? 0.4
                                            : 0.6,
                                    ),
                                },
                            };
                        }}
                        radius={999}
                    ></Checkbox>
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
                        <Popover
                            position="bottom"
                            withArrow
                            shadow="md"
                        >
                            <Popover.Target>
                                <UnstyledButton>
                                    <Group
                                        noWrap
                                        spacing="xs"
                                        sx={(theme) => {
                                            return {
                                                color: timeAtComponentMounted.isAfter(
                                                    props.task.due,
                                                )
                                                    ? theme.colors.red[
                                                          theme.colorScheme ===
                                                          "dark"
                                                              ? 4
                                                              : 7
                                                      ]
                                                    : theme.colorScheme ===
                                                      "dark"
                                                    ? theme.colors
                                                          .gray[5]
                                                    : theme.colors
                                                          .gray[8],
                                            };
                                        }}
                                    >
                                        <IconCalendarDue
                                            size={16}
                                            stroke={1.5}
                                        />
                                        <Text size="sm">
                                            {displayShortTaskDueDate(
                                                props.task,
                                                timeAtComponentMounted,
                                            )}
                                        </Text>
                                    </Group>
                                </UnstyledButton>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Calendar />
                            </Popover.Dropdown>
                        </Popover>
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
