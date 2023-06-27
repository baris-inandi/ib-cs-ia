import { Dayjs } from "dayjs";
import ITask from "./ITask";

export default function displayShortTaskDueDate(
    task: ITask,
    now: Dayjs,
) {
    return (
        task.due.format("D MMM") +
        (now.format("YYYY") !== task.due.format("YYYY")
            ? task.due.format(" YYYY")
            : "") +
        (task.explicitlyDueTime ? task.due.format(" HH:mm") : "")
    );
}
