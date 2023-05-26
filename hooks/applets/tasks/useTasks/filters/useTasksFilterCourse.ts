import ITask, {
    TaskAccordions,
} from "../../../../../lib/applets/tasks/ITask";

export const useTasksFilterCourse = (data: Array<ITask>) => {
    let out: TaskAccordions = [
        {
            accordionTitle: "Priority 0",
            tasks: [],
            unsafeArbitraryParams: { priority: 0 },
        },
        {
            accordionTitle: "Priority 1",
            tasks: [],
            unsafeArbitraryParams: { priority: 1 },
        },
        {
            accordionTitle: "Priority 2",
            tasks: [],
            unsafeArbitraryParams: { priority: 2 },
        },
        {
            accordionTitle: "Priority 3",
            tasks: [],
            unsafeArbitraryParams: { priority: 3 },
        },
    ];
    data.forEach((task) => {
        if (task.priority === 1) {
            out[1].tasks.push(task);
        } else if (task.priority === 2) {
            out[2].tasks.push(task);
        } else if (task.priority === 3) {
            out[3].tasks.push(task);
        } else {
            out[0].tasks.push(task);
        }
    });
    return out.map((accordion) => {
        accordion.tasks = accordion.tasks.sort((a, b) => {
            return b.due.unix() - a.due.unix();
        });
        return accordion;
    });
};
