import { Button, Flex } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from "@tabler/icons";

interface CalendarToolbarProps {}

const CalendarToolbar: React.FC<CalendarToolbarProps> = () => {
  return (
    <Flex
      h="100%"
      align="center"
      gap={10}
    >
      <Button
        variant="outline"
        color="indigo"
        size="xs"
      >
        <IconChevronLeft />
      </Button>
      <Button
        variant="outline"
        color="indigo"
        size="xs"
      >
        Today
      </Button>
      <Button
        variant="outline"
        color="indigo"
        size="xs"
      >
        <IconChevronRight />
      </Button>
      <div className="w-4"></div>
      <Button
        color="indigo"
        size="xs"
      >
        Jump to...
      </Button>
      <Button
        color="indigo"
        size="xs"
      >
        <IconPlus size={20} />
      </Button>
    </Flex>
  );
};

export default CalendarToolbar;
