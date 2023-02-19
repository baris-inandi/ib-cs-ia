import { Badge, Box, Flex, Group, Text } from "@mantine/core";

const SidebarUpperUpcoming = () => {
  return (
    <Box
      p="sm"
      sx={(theme) => {
        return {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          borderRadius: theme.radius.md,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[4]
          }`,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[8],
          fontSize: theme.fontSizes.sm,
        };
      }}
    >
      <Group px={4} pb={10} pt={4}>
        <Text size="md" weight={600}>
          Up Next
        </Text>
        <Badge variant="filled" color="accent">
          due Monday
        </Badge>
      </Group>
      <Flex
        px={16}
        py={10}
        direction="column"
        sx={(theme) => {
          return {
            color:
              theme.colorScheme === "dark" ? theme.white : theme.black,
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.white,
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[4]
            }`,
            borderRadius: theme.radius.md,
          };
        }}
      >
        <Text size="xs">view event on:</Text>
        <Text size="md">English Language and...</Text>
      </Flex>
    </Box>
  );
};

export default SidebarUpperUpcoming;
