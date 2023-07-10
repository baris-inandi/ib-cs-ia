import { Accordion, Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useTasks } from "../../../../../../hooks/applets/tasks/useTasks/useTasks";
import TaskWizardLite from "../TaskWizard/TaskWizardLite/TaskWizardLite";
import { tasksFilterAtom } from "../tasks.atom";
import TaskItem from "./TaskItem/TaskItem";

const TaskList: React.FC = () => {
    const tasks = useTasks();
    const [filter] = useAtom(tasksFilterAtom);
    const accordions = tasks.filters[filter]();

    return (
        <Accordion
            radius="md"
            styles={(theme) => {
                return {
                    content: {
                        padding: 0,
                    },
                    control: {
                        height: 48,
                        paddingLeft: theme.spacing.md,
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[7]
                                : theme.colors.gray[0],
                        borderTop: `1px solid ${
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[5]
                                : theme.colors.gray[3]
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
            defaultValue={accordions.map((accordion) => {
                return accordion.accordionTitle;
            })}
        >
            {accordions.map((accordion, i) => {
                return (
                    <Accordion.Item
                        key={accordion.accordionTitle}
                        value={accordion.accordionTitle}
                    >
                        <Accordion.Control>
                            <Flex align="center" gap={12}>
                                <Text className="font-medium">
                                    {accordion.accordionTitle}
                                </Text>
                                <Text size="sm">
                                    {filter === "priority"
                                        ? "!".repeat(
                                              accordion
                                                  .unsafeArbitraryParams
                                                  ?.priority,
                                          )
                                        : ""}
                                </Text>
                            </Flex>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <TaskWizardLite />
                            {accordion.tasks.map((task) => {
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

export default TaskList;

