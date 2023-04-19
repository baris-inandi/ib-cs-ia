import { Button, Flex, Popover, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconEye, IconEyeOff, IconPlus } from "@tabler/icons";
import { useState } from "react";

interface TasksToolbarProps {}

const TasksToolbar: React.FC<TasksToolbarProps> = () => {
    const [showCompleted, setShowCompleted] = useState(false);
    return (
        <Flex h="100%" align="center" gap={10}>
            <Button
                onClick={() => {
                    setShowCompleted(!showCompleted);
                }}
                h="100%"
                color="accent"
                variant={showCompleted ? "outline" : "filled"}
                size="xs"
            >
                {showCompleted ? (
                    <IconEyeOff size={20} />
                ) : (
                    <IconEye size={20} />
                )}
                <Text pl={8}>
                    {showCompleted
                        ? "Hide completed"
                        : "Show completed"}
                </Text>
            </Button>
            <div className="w-4"></div>
            <Popover
                transition="scale"
                position="bottom"
                withArrow
                shadow="md"
            >
                <Popover.Target>
                    <Button
                        h="100%"
                        color="accent"
                        variant="outline"
                        size="xs"
                    >
                        Jump to...
                    </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Calendar
                        onChange={(x) => {
                            console.log(x);
                        }}
                    />
                </Popover.Dropdown>
            </Popover>
            <Button h="100%" color="accent" size="xs">
                <IconPlus size={20} />
            </Button>
        </Flex>
    );
};

export default TasksToolbar;

