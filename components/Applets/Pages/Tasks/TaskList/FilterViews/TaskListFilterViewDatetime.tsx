import ITask from "../../../../../../lib/applets/tasks/ITask";

interface DragListProps {}

// This is only for the date/time draglist
// TODO: sometimes render occurs before the "dnd" provider inits. WAIT FOR THE RENDER!

type TaskListAccordions = Map<number, Array<ITask>>;

const TaskListFilterViewDatetime: React.FC<DragListProps> = () => {
    /*  const tasks = useTasks();
    const [accordions, setAccordions] = useState<TaskListAccordions>(
        new Map(),
    );

    useEffect(() => {
        let x: TaskListAccordions = new Map();
        tasks.getAll().forEach((task) => {
            const date = task.due.startOf("day");
            const tasks = x.get(date.unix());
            if (tasks) {
                tasks.push(task);
            } else {
                x.set(date.unix(), [task]);
            }
        });
        setAccordions(x);
    }, [tasks]);

    return data.sort((a, b) => {
        return b.due.unix() - a.due.unix();
    }); */

    return <div>{}</div>;
};

export default TaskListFilterViewDatetime;

