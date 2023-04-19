export default interface ITask {
    id: string;
    title: string;
    description: string;
    complete: boolean;
    priority: 0 | 1 | 2 | 3;
    classId: string;
}

