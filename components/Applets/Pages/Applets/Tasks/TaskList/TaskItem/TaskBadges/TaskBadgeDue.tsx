import { Badge, Group, Popover, UnstyledButton } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import ITask from "../../../../../../../../lib/applets/tasks/ITask";
import displayShortTaskDueDate from "../../../../../../../../lib/applets/tasks/displayShortTaskDueDate";

interface TaskBadgeDueProps {
    task: ITask | undefined;
}

const TaskBadgeDue: React.FC<TaskBadgeDueProps> = (props) => {
    const timeAtComponentMounted = dayjs();
    const pastDue = props.task
        ? timeAtComponentMounted.isAfter(props.task.due)
        : false;

    return (
        <Popover
            transitionProps={{ transition: "scale" }}
            position="bottom"
            withArrow
            shadow="md"
        >
            <Popover.Dropdown>
                <Calendar />
            </Popover.Dropdown>
            <Popover.Target>
                <UnstyledButton>
                    <Group
                        noWrap
                        spacing="xs"
                        sx={(theme) => {
                            return {
                                color: pastDue
                                    ? theme.colors.red[
                                          theme.colorScheme === "dark"
                                              ? 4
                                              : 7
                                      ]
                                    : theme.colorScheme === "dark"
                                    ? theme.colors.gray[5]
                                    : theme.colors.gray[8],
                            };
                        }}
                    >
                        <Badge
                            variant="light"
                            color={pastDue ? "red" : "gray"}
                            size="md"
                        >
                            {props.task
                                ? (pastDue ? "was " : "") +
                                  "due " +
                                  displayShortTaskDueDate(
                                      props.task,
                                      timeAtComponentMounted,
                                  )
                                : "Select due date"}
                        </Badge>
                    </Group>
                </UnstyledButton>
            </Popover.Target>
        </Popover>
    );
};

export default TaskBadgeDue;

