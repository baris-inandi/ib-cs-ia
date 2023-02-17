import { Box, Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { activeAppletAtom } from "../../global.atom";
import Sidebar from "./Sidebar/Sidebar";

export default function AppLayout(props: {
  children: React.ReactNode;
}) {
  const [activeApplet] = useAtom(activeAppletAtom);
  return (
    <Flex
      sx={(theme) => {
        return {
          height: "100vh",
          width: "100%",
          backgroundColor: theme.white,
          borderTop: `1px solid ${theme.colors.gray[4]}`,
        };
      }}
    >
      <Sidebar />
      <Flex
        sx={{
          overflowY: "scroll",
        }}
        h="100%"
        w="100%"
        direction="column"
        maw={1440}
      >
        <Flex
          px={20}
          align="center"
          h={50}
          mih={50}
          sx={(theme) => {
            return {
              borderBottom: `1px solid ${theme.colors.gray[4]}`,
            };
          }}
        >
          <Text
            sx={(theme) => {
              return {
                flexShrink: 0,
                color: theme.colors.gray[8],
                fontWeight: 600,
                lineHeight: 1,
                paddingRight: 24,
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
              {activeApplet.toolbar ? <activeApplet.toolbar /> : null}
            </div>
          </Box>
        </Flex>
        <Box p={20}>{props.children}</Box>
      </Flex>
    </Flex>
  );
}
