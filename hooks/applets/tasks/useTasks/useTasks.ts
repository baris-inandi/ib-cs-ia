import { useAtom } from "jotai";
import { tasksAtom } from "../../../../components/Applets/Pages/Tasks/tasks.atom";
import ITask, {
    TaskAccordions,
    TaskViewFilter,
} from "../../../../lib/applets/tasks/ITask";
import { useTasksFilterCourse } from "./filters/useTasksFilterCourse";
import { useTasksFilterDatetime } from "./filters/useTasksFilterDatetime";
import { useTasksFilterPriority } from "./filters/useTasksFilterPriority";

export type UseTasksFilterFunction = Record<
    TaskViewFilter,
    () => TaskAccordions
>;

export const useTasks = () => {
    const [data, setData] = useAtom(tasksAtom);

    const wrapTaskFilter = (
        fn: (data: Array<ITask>) => TaskAccordions,
    ) => {
        return () => fn(data);
    };

    const filterFunctions: UseTasksFilterFunction = {
        datetime: wrapTaskFilter(useTasksFilterDatetime),
        priority: wrapTaskFilter(useTasksFilterPriority),
        course: wrapTaskFilter(useTasksFilterCourse),
    };

    const handlers = {
        getAll() {
            return data;
        },
        set() {
            // TODO: implement a setter that adds the task to the database.
        },
        filters: filterFunctions,
    };

    return handlers;
};
