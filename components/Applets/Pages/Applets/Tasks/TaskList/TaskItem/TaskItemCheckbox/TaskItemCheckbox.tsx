import { Checkbox } from "@mantine/core";
import ITask from "../../../../../../../../lib/applets/tasks/ITask";
import { resolveTaskAccentFromPriority } from "../../../../../../../../lib/applets/tasks/resolveTaskAccentFromPriority";

interface TaskItemCheckboxProps {
    task: ITask;
}

const TaskItemCheckbox: React.FC<TaskItemCheckboxProps> = (props) => {
    return (
        <Checkbox
            size="sm"
            color={resolveTaskAccentFromPriority(props.task.priority)}
            styles={(theme) => {
                let priorityAccent = resolveTaskAccentFromPriority(
                    props.task.priority,
                );
                return {
                    root: {
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                    },
                    input: {
                        transition: "backgroun 0.1s ease-out",
                        cursor: "pointer",
                        background: theme.fn.rgba(
                            theme.colors[priorityAccent][5],
                            0.02,
                        ),
                        borderColor: theme.fn.rgba(
                            theme.colors[priorityAccent][7],
                            theme.colorScheme === "dark" ? 0.4 : 0.6,
                        ),
                    },
                };
            }}
            radius={999}
        ></Checkbox>
    );
};

export default TaskItemCheckbox;
