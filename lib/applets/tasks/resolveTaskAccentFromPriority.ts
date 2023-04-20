import { MantineColor } from "@mantine/core";

const colors: Array<MantineColor> = ["gray", "accent", "orange", "red"];

export const resolveTaskAccentFromPriority = (
    priority: 0 | 1 | 2 | 3,
) => {
    return colors[priority];
};

