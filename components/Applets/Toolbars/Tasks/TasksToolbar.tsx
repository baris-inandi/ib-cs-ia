import { Button, Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

interface TasksToolbarProps {}

const TasksToolbar: React.FC<TasksToolbarProps> = () => {
    return (
        <Flex h="100%" align="center" gap={10}>
            <Button h="100%" color="accent" size="xs">
                Jump to...
            </Button>
            <Button h="100%" color="accent" size="xs">
                <IconPlus size={20} />
            </Button>
        </Flex>
    );
};

export default TasksToolbar;
