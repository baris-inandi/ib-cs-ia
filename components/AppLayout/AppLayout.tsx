import { Box, Flex, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { usePomoThemeIfInPomoApplet } from "../../hooks/applets/pomo/usePomoThemeIfInPomoApplet";
import { usePomoSidebarHueRotate } from "../../hooks/ui/usePomoSidebarHueRotate";
import { activeAppletAtom } from "../../lib/global.atom";
import Sidebar from "./Sidebar/Sidebar";

export default function AppLayout(props: {
    children: React.ReactNode;
}) {
    const [activeApplet] = useAtom(activeAppletAtom);
    const [documentHue] = usePomoSidebarHueRotate();
    const pomoThemeIfInPomoApplet = usePomoThemeIfInPomoApplet();

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
                            theme.colorScheme === "dark"
                                ? theme.white
                                : theme.black,
                        border: `1px solid ${
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
                                : theme.white,
                    })}
                    h="100%"
                    w="100%"
                    direction="column"
                    maw={1440}
                >
                    <Flex
                        pl={20}
                        pr={9}
                        align="center"
                        h={46}
                        mih={46}
                        sx={(theme) => {
                            return {
                                filter: `hue-rotate(${documentHue}deg)`,
                                backgroundColor: pomoThemeIfInPomoApplet
                                    ? theme.colorScheme === "dark"
                                        ? theme.colors["dark"][7]
                                        : theme.colors["gray"][1]
                                    : "unset",
                                boxShadow: `0 0 16px -9px ${theme.fn.rgba(
                                    theme.black,
                                    0.25,
                                )}`,
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
                            {activeApplet.isCourse
                                ? activeApplet.courseId
                                : activeApplet.toolbarTitleOverride ??
                                  activeApplet.title}
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
                                <Box py={6}>
                                    {activeApplet.toolbar ? (
                                        <activeApplet.toolbar />
                                    ) : null}
                                </Box>
                            </div>
                        </Box>
                    </Flex>
                    {props.children}
                </Flex>
            </Flex>
        </div>
    );
}

