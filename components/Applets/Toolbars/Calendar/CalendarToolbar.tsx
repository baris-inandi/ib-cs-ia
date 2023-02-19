import { Button, Flex } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from "@tabler/icons";

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
      <Button h="100%" color="accent" size="xs">
        Jump to...
      </Button>
      <Button h="100%" color="accent" size="xs">
        <IconPlus size={20} />
      </Button>
    </Flex>
  );
};

export default CalendarToolbar;
