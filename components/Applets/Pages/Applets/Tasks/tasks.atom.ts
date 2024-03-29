import dayjs from "dayjs";
import { atomWithStorage } from "jotai/utils";
import ITask, {
    TaskViewFilter,
} from "../../../../../lib/applets/tasks/ITask";

export const tasksShowCompleteAtom = atomWithStorage(
    "jotaiTasksShowCompleteAtom",
    true,
);

export const tasksFilterAtom = atomWithStorage<TaskViewFilter>(
    "jotaiTasksFilterAtom",
    "datetime",
);

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
            due: dayjs("2023-8-1"),
            explicitlyDueTime: false,
        },
        {
            id: "2",
            title: "Task 1",
            description: "This is a task (1)",
            priority: 2,
            classId: "SOC",
            complete: true,
            due: dayjs("2023-8-1"),
            explicitlyDueTime: false,
        },
        {
            id: "3",
            title: "Task 1",
            description: "This is a task (1)",
            priority: 2,
            classId: "SOC",
            complete: false,
            due: dayjs("2023-8-1"),
            explicitlyDueTime: false,
        },
        {
            id: "4",
            title: "Task 1",
            description: "This is a task (1)",
            priority: 2,
            classId: "SOC",
            complete: true,
            due: dayjs("2023-8-1"),
            explicitlyDueTime: false,
        },
        {
            id: "5",
            title: "Task 2",
            description: "This is a task (2)",
            priority: 1,
            classId: "MATH",
            complete: false,
            due: dayjs("2024-1-1"),
            explicitlyDueTime: false,
        },
        {
            id: "6",
            title: "Task 2.5",
            description: "This is a task (2.5)",
            priority: 1,
            classId: "DIGSOC",
            complete: true,
            due: dayjs("2024-1-1"),
            explicitlyDueTime: false,
        },
        {
            id: "7",
            title: "Task 3",
            description: "This is a task (3)",
            priority: 0,
            classId: "MATH",
            complete: true,
            due: dayjs("2023-1-1"),
            explicitlyDueTime: false,
        },
        {
            id: "8",
            title: "Task 3",
            description: "This is a task (3)",
            priority: 0,
            classId: "MATH",
            complete: false,
            due: dayjs("2023-1-1 23:59"),
            explicitlyDueTime: true,
        },
        {
            id: "9",
            title: "Task 3",
            description: "This is a task (3)",
            priority: 0,
            classId: "MATH",
            complete: true,
            due: dayjs("2023-1-1"),
            explicitlyDueTime: false,
        },
        {
            id: "10",
            title: "Task 4",
            description: "This is a task (4)",
            priority: 2,
            classId: "CPSC",
            complete: false,
            due: dayjs("2000-1-1"),
            explicitlyDueTime: false,
        },
        {
            id: "11",
            title: "Task 5",
            description: "This is a task (5)",
            priority: 3,
            classId: "PHIL",
            complete: true,
            due: dayjs("2024-1-1 18:30"),
            explicitlyDueTime: true,
        },
        {
            id: "12",
            title: "Task 6",
            description: "This is a task (6)",
            priority: 3,
            classId: "ELL",
            complete: false,
            due: dayjs("1998-1-1"),
            explicitlyDueTime: false,
        },
    ],
);
