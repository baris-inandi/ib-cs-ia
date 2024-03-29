import { Dayjs } from "dayjs";

export default interface ITask {
    id: string;
    title: string;
    description: string;
    complete: boolean;
    priority: 0 | 1 | 2 | 3;
    classId: string;
    due: Dayjs;
    explicitlyDueTime: boolean;
}

export type TaskViewFilter = "datetime" | "priority" | "course";

export type TaskAccordions = Array<ITaskAccordion>;

interface ITaskAccordion {
    accordionTitle: string;
    tasks: Array<ITask>;
    unsafeArbitraryParams?: Record<string, any>;
}
