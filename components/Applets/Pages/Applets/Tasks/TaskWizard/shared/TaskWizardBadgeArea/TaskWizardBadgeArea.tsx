import { Group } from "@mantine/core";
import TaskBadgeDue from "../../../TaskList/TaskItem/TaskBadges/TaskBadgeDue";
import TaskWizardBadge from "./TaskWizardBadge";

interface TaskWizardBadgeAreaProps {
    /*  priority: UseState<0 | 1 | 2 | 3>;
    datetime: UseState<Dayjs>; */
}

const TaskWizardBadgeArea: React.FC<TaskWizardBadgeAreaProps> = (
    props,
) => {
    return (
        <Group spacing="xs" className="pb-3">
            <TaskBadgeDue task={undefined} />
            <TaskWizardBadge color="" variant="outline">
                Priority 3
            </TaskWizardBadge>
            <TaskWizardBadge color="" variant="outline">
                No course assigned
            </TaskWizardBadge>
        </Group>
    );
};

export default TaskWizardBadgeArea;

