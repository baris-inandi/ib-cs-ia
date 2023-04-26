import { Badge, BadgeProps, UnstyledButton } from "@mantine/core";

const TaskWizardBadge: React.FC<BadgeProps> = (props) => {
    return (
        <UnstyledButton>
            <Badge {...props}>{props.children}</Badge>
        </UnstyledButton>
    );
};

export default TaskWizardBadge;

