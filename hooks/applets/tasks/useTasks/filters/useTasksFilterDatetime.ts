import ITask, {
    TaskAccordions,
} from "../../../../../lib/applets/tasks/ITask";

export const useTasksFilterDatetime = (data: Array<ITask>) => {
    let out: TaskAccordions = [
        {
            accordionTitle: "No Due Date",
            tasks: [],
        },
    ];
    let datesorted = data.sort((a, b) => {
        return b.due.unix() - a.due.unix();
    });
    out.push({ accordionTitle: "Tasks", tasks: datesorted });
    /* for (let i = 0; i < datesorted.length; i++) {
        let next = i + 1;
        if (
            datesorted[next].due.startOf("day").unix() !==
            datesorted[i].due.startOf("day").unix()
        ) {
            out.push({
                accordionTitle: datesorted[next].due.format(
                    "dddd, MMMM Do YYYY",
                ),
                tasks: [],
            });
        }
        out[out.length - 1].tasks.push(datesorted[i]);
    } */
    return out;
};
