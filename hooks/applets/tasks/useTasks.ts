import { useAtom } from "jotai";
import { tasksAtom } from "../../../components/Applets/Pages/Tasks/tasks.atom";
import ITask from "../../../lib/applets/tasks/ITask";

export const useTasks = () => {
    const [data, setData] = useAtom(tasksAtom);

    const handlers = {
        getAll() {
            return data;
        },
        setter() {
            return setData;
        },
        filters: {
            byPriority() {
                let p0 = new Array<ITask>();
                let p1 = new Array<ITask>();
                let p2 = new Array<ITask>();
                let p3 = new Array<ITask>();
                data.forEach((task) => {
                    if (task.priority === 1) {
                        p1.push(task);
                    } else if (task.priority === 2) {
                        p2.push(task);
                    } else if (task.priority === 3) {
                        p3.push(task);
                    } else {
                        p0.push(task);
                    }
                });
                return [p3, p2, p1, p0].map((arr) => {
                    return arr.sort((a, b) => {
                        return b.due.unix() - a.due.unix();
                    });
                });
            },
        },
    };

    return handlers;
};

