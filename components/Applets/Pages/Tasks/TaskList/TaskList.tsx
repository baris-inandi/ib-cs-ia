import TaskListFilterViewDatetime from "./FilterViews/TaskListFilterViewDatetime";

interface TaskListProps {
    filter: "datetime" | "priority" | "course";
}

const TaskList: React.FC<TaskListProps> = (props) => {
    if (props.filter === "datetime") {
        return <TaskListFilterViewDatetime />;
    }
    return <div></div>;
};

export default TaskList;

