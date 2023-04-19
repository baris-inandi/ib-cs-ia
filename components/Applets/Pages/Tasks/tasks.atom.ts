import { atomWithStorage } from "jotai/utils";
import ITask from "../../../../lib/applets/tasks/ITask";

export const tasksAtom = atomWithStorage<Array<ITask>>(
    "jotaiTasksAtom",
    [
        {
            id: "1",
            title: "Task 1",
            description: "This is a task (1)",
            priority: 2,
            classId: "SOC",
            complete: true,
        },
        {
            id: "2",
            title: "Task 2",
            description: "This is a task (2)",
            priority: 1,
            classId: "MATH",
            complete: false,
        },
        {
            id: "3",
            title: "Task 3",
            description: "This is a task (3)",
            priority: 0,
            classId: "MATH",
            complete: true,
        },
        {
            id: "4",
            title: "Task 4",
            description: "This is a task (4)",
            priority: 2,
            classId: "CPSC",
            complete: false,
        },
        {
            id: "5",
            title: "Task 5",
            description: "This is a task (5)",
            priority: 3,
            classId: "PHIL",
            complete: true,
        },
    ],
);

