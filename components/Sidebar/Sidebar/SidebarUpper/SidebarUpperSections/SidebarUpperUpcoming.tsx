import { Box, Flex, Group, Text } from "@mantine/core";

const SidebarUpperUpcoming = () => {
  return (
    <Box
      p="sm"
      sx={(theme) => {
        return {
          backgroundColor: theme.colors.gray[0],
          borderRadius: theme.radius.md,
          border: `1px solid ${theme.colors.gray[4]}`,
          color: theme.colors.gray[9],
          fontSize: theme.fontSizes.sm,
        };
      }}
    >
      <Group
        position="apart"
        pb={10}
      >
        <Group
          pt={4}
          px={8}
          position="apart"
          w="100%"
          sx={(theme) => {
            return {
              color: theme.colors.gray[8],
            };
          }}
        >
          <Text
            size="md"
            weight={600}
          >
            Up Next
          </Text>
          <Text
            sx={(theme) => {
              return {
                color: theme.colors.gray[7],
              };
            }}
          >
            due Monday
          </Text>
        </Group>
      </Group>
      <Flex
        px={16}
        py={10}
        direction="column"
        sx={(theme) => {
          return {
            background: theme.white,
            border: `1px solid ${theme.colors.gray[4]}`,
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
