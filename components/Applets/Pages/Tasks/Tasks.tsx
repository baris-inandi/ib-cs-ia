import dayjs from "dayjs";
import DragList from "./DragList/DragList";
import TasksHotkeys from "./TasksHotkeys";

const Tasks = () => {
    return (
        <div>
            <TasksHotkeys />
            <DragList day={dayjs("2022-1-1")} />
            <DragList day={dayjs("2022-3-29")} />
            <DragList day={dayjs()} />
            <DragList day={dayjs("2023-6-5")} />
        </div>
    );
};

export default Tasks;

