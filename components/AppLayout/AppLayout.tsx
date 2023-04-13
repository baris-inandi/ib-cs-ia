import { Box, Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { activeAppletAtom } from "../../lib/global.atom";
import Sidebar from "./Sidebar/Sidebar";

export default function AppLayout(props: {
  children: React.ReactNode;
}) {
  const [activeApplet] = useAtom(activeAppletAtom);
  return (
    <div className="opacity-0 sm:opacity-100">
      <Flex
        sx={(theme) => {
          return {
            height: "100vh",
            width: "100%",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.white,
            color:
              theme.colorScheme === "dark" ? theme.white : theme.black,
            borderTop: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[4]
            }`,
          };
        }}
      >
        <Sidebar />
        <Flex
          sx={(theme) => ({
            overflowY: "scroll",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
          h="100%"
          w="100%"
          direction="column"
          maw={1440}
        >
          <Flex
            px={20}
            align="center"
            h={46}
            mih={46}
            sx={(theme) => {
              return {
                borderBottom: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[4]
                }`,
              };
            }}
          >
            <Text
              sx={(theme) => {
                return {
                  flexShrink: 0,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.white
                      : theme.colors.gray[8],
                  fontWeight: 600,
                  lineHeight: 1,
                  paddingRight: 20,
                };
              }}
            >
              {activeApplet.toolbarTitleOverride ?? activeApplet.title}
            </Text>
            <Box
              w="100%"
              h="100%"
              sx={(theme) => {
                return {
                  fontSize: theme.fontSizes.sm,
                };
              }}
            >
              <div className="flex h-full justify-end">
                <Box py={5}>
                  {activeApplet.toolbar ? (
                    <activeApplet.toolbar />
                  ) : null}
                </Box>
              </div>
            </Box>
          </Flex>
          <Box p={20}>{props.children}</Box>
        </Flex>
      </Flex>
    </div>
  );
}
