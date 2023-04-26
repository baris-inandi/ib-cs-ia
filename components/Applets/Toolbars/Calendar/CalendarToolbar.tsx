import { Button, Flex, Popover } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import {
    IconChevronLeft,
    IconChevronRight,
    IconPlus,
} from "@tabler/icons";
import DimmedButton from "../../../global/DimmedButton";

interface CalendarToolbarProps {}

const CalendarToolbar: React.FC<CalendarToolbarProps> = () => {
    return (
        <Flex h="100%" align="center" gap={10}>
            <Button h="100%" variant="outline" color="accent" size="xs">
                <IconChevronLeft />
            </Button>
            <Button h="100%" variant="outline" color="accent" size="xs">
                Today
            </Button>
            <Button h="100%" variant="outline" color="accent" size="xs">
                <IconChevronRight />
            </Button>
            <div className="w-3"></div>
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
            <DimmedButton h="100%" color="accent" size="xs">
                <IconPlus size={20} />
            </DimmedButton>
        </Flex>
    );
};

export default CalendarToolbar;

