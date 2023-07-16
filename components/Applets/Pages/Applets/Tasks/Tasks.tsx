import TaskList from "./TaskList/TaskList";
import TasksHeader from "./TasksHeader/TasksHeader";
import TasksHotkeys from "./TasksHotkeys";

const Tasks = () => {
    return (
        <>
            <TasksHotkeys />
            <TasksHeader />
            <TaskList />
        </>
    );
};

export default Tasks;
