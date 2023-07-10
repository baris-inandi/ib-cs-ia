import { Badge, Drawer, Flex, Text } from "@mantine/core";
import dayjs from "dayjs";
import ITask from "../../../../../../../../lib/applets/tasks/ITask";
import { resolveTaskAccentFromPriority } from "../../../../../../../../lib/applets/tasks/resolveTaskAccentFromPriority";
import TaskBadgeDue from "../TaskBadges/TaskBadgeDue";
import TaskItemCheckbox from "../TaskItemCheckbox/TaskItemCheckbox";
import TaskItemTextEditor from "./TaskItemTextEditor/TaskItemTextEditor";

interface TaskItemDrawerProps {
    task: ITask;
    opened: boolean;
    openClose: () => void;
}

const TaskItemDrawer: React.FC<TaskItemDrawerProps> = (props) => {
    const timeAtComponentMounted = dayjs();
    const isLate = timeAtComponentMounted.isAfter(props.task.due);

    return (
        <Drawer
            opened={props.opened}
            onClose={props.openClose}
            position="right"
            size="xl"
            styles={{ content: { overflow: "scroll" } }}
        >
            <div className="pb-10">
                <div className="flex h-full flex-col gap-2 px-4">
                    <div className="flex flex-row items-center gap-3">
                        <TaskItemCheckbox task={props.task} />
                        <Text className="text-2xl font-bold">
                            {props.task.title}
                        </Text>
                    </div>
                    <Flex gap={10} wrap="wrap" className="pb-3 pt-5">
                        <Badge
                            variant="light"
                            color={resolveTaskAccentFromPriority(
                                props.task.priority,
                            )}
                        >
                            Priority Level {props.task.priority}
                        </Badge>
                        <TaskBadgeDue task={props.task} />
                        <Badge variant="light" color="indigo">
                            {props.task.classId}
                        </Badge>
                    </Flex>
                    <TaskItemTextEditor task={props.task} />
                </div>
            </div>
        </Drawer>
    );
};

export default TaskItemDrawer;

