import { Badge, Button, Flex, Text } from "@mantine/core";
import dayjs from "dayjs";
import ITask from "../../../../../../../lib/applets/tasks/ITask";
import displayShortTaskDueDate from "../../../../../../../lib/applets/tasks/displayShortTaskDueDate";
import { resolveTaskAccentFromPriority } from "../../../../../../../lib/applets/tasks/resolveTaskAccentFromPriority";
import TaskItemTextEditor from "./TaskItemTextEditor/TaskItemTextEditor";

interface TaskItemDrawerProps {
    task: ITask;
}

const TaskItemDrawer: React.FC<TaskItemDrawerProps> = (props) => {
    const timeAtComponentMounted = dayjs();
    const isLate = timeAtComponentMounted.isAfter(props.task.due);

    return (
        <div className="flex h-full flex-col gap-2 px-4">
            <Text className="text-2xl font-bold">
                {props.task.title}
            </Text>
            <Flex gap={10} wrap="wrap" className="pt-3">
                <Badge
                    color={resolveTaskAccentFromPriority(
                        props.task.priority,
                    )}
                >
                    Priority Level {props.task.priority}
                </Badge>
                <Badge color={isLate ? "red" : "green"}>
                    {(isLate ? "was " : "") +
                        "due " +
                        displayShortTaskDueDate(
                            props.task,
                            timeAtComponentMounted,
                        )}
                </Badge>
                <Badge color="indigo">{props.task.classId}</Badge>
            </Flex>
            <div className="pt-7">
                <Button>Mark as complete</Button>
            </div>
        </div>
    );
};

export default TaskItemDrawer;
