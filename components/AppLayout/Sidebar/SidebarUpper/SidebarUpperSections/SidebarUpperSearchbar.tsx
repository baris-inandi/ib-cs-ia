import {
    Box,
    Flex,
    Group,
    Text,
    Tooltip,
    UnstyledButton,
} from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react";
import getOS from "../../../../../lib/utils/getOS";
import AppKbd from "../../../../global/AppKbd";

export default function TopbarSearch() {
    const spotlight = useSpotlight();
    const [mod, setMod] = useState("Mod");

    useEffect(() => {
        setMod(getOS() == "macos" ? "⌘" : "Ctrl");
    }, []);

    return (
        <div className="flex items-center justify-center gap-[9px]">
            <UnstyledButton w="100%">
                <Box
                    onClick={() => {
                        spotlight.openSpotlight();
                    }}
                    w="100%"
                    h={36}
                    p={4}
                    className="flex items-center justify-center"
                    sx={(theme) => {
                        return {
                            "borderRadius": theme.radius.md,
                            "backgroundColor":
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[6]
                                    : theme.white,
                            "color": "black",
                            "textAlign": "left",
                            "border": `1px solid ${
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[4]
                                    : theme.colors.gray[3]
                            }`,
                            "transition": "box-shadow 0.2s ease",
                            "&:hover": {
                                boxShadow: theme.shadows.md,
                            },
                        };
                    }}
                >
                    <Group w="100%" h="100%" position="apart">
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
                        <AppKbd
                            fullHeight
                            content={mod + "+K"}
                        ></AppKbd>
                    </Group>
                </Box>
            </UnstyledButton>
            <Tooltip label="Press H for hotkeys help">
                <Box h={36} className="aspect-square">
                    <AppKbd sidebarStyles hundredPercent>
                        ?
                    </AppKbd>
                </Box>
            </Tooltip>
        </div>
    );
}
