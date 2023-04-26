import { Text } from "@mantine/core";
import ITask from "../../../../../../../lib/applets/tasks/ITask";

interface TaskItemDrawerProps {
    task: ITask;
}

const TaskItemDrawer: React.FC<TaskItemDrawerProps> = (props) => {
    return (
        <div className="px-4">
            <Text className="text-2xl font-bold">
                {props.task.title}
            </Text>
        </div>
    );
};

export default TaskItemDrawer;

