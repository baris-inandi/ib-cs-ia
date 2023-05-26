import Hotkeys from "../../../global/Hotkeys";

interface TasksHotkeysProps {}

const TasksHotkeys: React.FC<TasksHotkeysProps> = () => {
    return (
        <Hotkeys
            appletTitle="Tasks Hotkeys"
            hotkeys={[
                {
                    help: "Jump to date",
                    hotkey: "J",
                    callback: () => {
                        console.log("tasks: jump to");
                    },
                },
            ]}
        />
    );
};

export default TasksHotkeys;
