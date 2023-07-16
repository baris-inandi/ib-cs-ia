import { Flex } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import {
    IconCalendarTime,
    IconEye,
    IconEyeOff,
    IconPlus,
} from "@tabler/icons";
import { useAtom } from "jotai";
import ToolbarButton from "../../../global/toolbar/ToolbarButton/ToolbarButton";
import { tasksShowCompleteAtom } from "../../Pages/Applets/Tasks/tasks.atom";

interface TasksToolbarProps {}

const TasksToolbar: React.FC<TasksToolbarProps> = () => {
    const [showCompleted, setShowCompleted] = useAtom(
        tasksShowCompleteAtom,
    );

    return (
        <Flex h="100%" align="center" gap={10}>
            <ToolbarButton
                onClick={() => {
                    setShowCompleted(!showCompleted);
                }}
                icon={showCompleted ? IconEyeOff : IconEye}
                label={
                    showCompleted ? "Hide completed" : "Show completed"
                }
            />

            <ToolbarButton icon={IconCalendarTime} label="Jump to">
                <Calendar />
            </ToolbarButton>
            <ToolbarButton icon={IconPlus} label="New Task" />
        </Flex>
    );
};

export default TasksToolbar;

