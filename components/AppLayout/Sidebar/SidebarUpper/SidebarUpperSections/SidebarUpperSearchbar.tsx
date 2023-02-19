import { Box, Flex, Group, Text, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react";
import getOS from "../../../../../lib/utils/getOS";

export default function TopbarSearch() {
  const spotlight = useSpotlight();
  const [mod, setMod] = useState("Mod");

  useEffect(() => {
    setMod(getOS() == "macos" ? "⌘" : "Ctrl");
  }, []);

  return (
    <UnstyledButton w="100%">
      <Box
        onClick={() => {
          spotlight.openSpotlight();
        }}
        w="100%"
        p={5}
        sx={(theme) => {
          return {
            "borderRadius": theme.radius.md,
            "backgroundColor":
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            "color": "black",
            "textAlign": "left",
            "border": `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[4]
            }`,
            "transition": "box-shadow 0.2s ease",
            "&:hover": {
              boxShadow: theme.shadows.sm,
            },
          };
        }}
      >
        <Group w="100%" position="apart">
          <Flex
            gap={6}
            align="center"
            pl={6}
            sx={(theme) => {
              return {
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[2]
                    : theme.colors.gray[7],
              };
            }}
          >
            <IconSearch size={16} />
            <Text size={14}>Search</Text>
          </Flex>
          <Text
            px={10}
            py={2}
            sx={(theme) => {
              return {
                fontSize: 13,
                borderRadius: theme.radius.sm,
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.white,
                border: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[4]
                }`,
                color: theme.colors.gray[6],
              };
            }}
          >
            {mod}+K
          </Text>
        </Group>
      </Box>
    </UnstyledButton>
  );
}
