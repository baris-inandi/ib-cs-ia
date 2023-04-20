import { Accordion, Flex, Text } from "@mantine/core";
import { useTasks } from "../../../../../../hooks/applets/tasks/useTasks";
import { resolveTaskAccentFromPriority } from "../../../../../../lib/applets/tasks/resolveTaskAccentFromPriority";
import TaskItem from "./TaskItem/TaskItem";

const TaskListFilterViewPriority: React.FC<{}> = () => {
    const tasks = useTasks();

    return (
        <Accordion
            radius="md"
            styles={(theme) => {
                return {
                    content: {
                        padding: 0,
                    },
                    control: {
                        height: 56,
                        paddingLeft: theme.spacing.md,
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[7]
                                : theme.colors.gray[0],
                        borderTop: `1px solid ${
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[4]
                                : theme.colors.gray[4]
                        }`,
                    },
                    item: {
                        border: "none",
                    },
                };
            }}
            sx={(theme) => {
                return {
                    borderBottom: `1px solid ${
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[5]
                            : theme.colors.gray[3]
                    }`,
                };
            }}
            chevronPosition="left"
            multiple
            defaultValue={["3", "2", "1", "0"]}
        >
            {tasks.filters.byPriority().map((tasks, i) => {
                let priority = (3 - i) as 0 | 1 | 2 | 3;
                return (
                    <Accordion.Item
                        key={priority}
                        value={priority.toString()}
                    >
                        <Accordion.Control>
                            <Flex align="center" gap={12}>
                                <Text>Priority {priority}</Text>
                                <Text
                                    size="sm"
                                    sx={(theme) => {
                                        return {
                                            color: theme.colors[
                                                resolveTaskAccentFromPriority(
                                                    priority,
                                                )
                                            ][4],
                                        };
                                    }}
                                >
                                    {"!".repeat(priority)}
                                </Text>
                            </Flex>
                        </Accordion.Control>
                        <Accordion.Panel>
                            {tasks.map((task) => {
                                return (
                                    <TaskItem
                                        key={task.id}
                                        task={task}
                                    />
                                );
                            })}
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export default TaskListFilterViewPriority;

