import { Box, Flex, Group, Text } from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import applets from "../../../../lib/applets/global/applets";
import { activeAppletAtom } from "../../../../lib/global.atom";
import { Style } from "../../../../lib/utils/types";
import SidebarApplet from "./SidebarApplet/SidebarApplet";
import SidebarUpperSearchbar from "./SidebarUpperSections/SidebarUpperSearchbar";
import SidebarUpperUserButton from "./SidebarUpperSections/SidebarUpperUserButton";

interface Props {
    section: any;
    classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
    const [activeApplet] = useAtom(activeAppletAtom);
    const router = useRouter();

    const appletSidebarItems = Array.from(applets.values()).map(
        (applet, i) => {
            if (applet.hiddenInSidebar) return <></>;
            return (
                <SidebarApplet
                    kbdindex={i + 1}
                    classes={props.classes}
                    appletOrCourse={applet}
                    key={applet.id}
                    active={activeApplet.id === applet.id}
                />
            );
        },
    );

    return (
        <div className="select-none">
            <props.section className={props.classes.section}>
                <Flex gap={8} py={14} px={15} h={45} align="center">
                    {/* <IconBox size={22} /> */}
                    <Group position="apart" w="100%">
                        <Text pt={2} pl={2} size={16} fw={600}>
                            CSIA SchoolApp
                            {/* TODO: make this a link that goes to the dashboard */}
                        </Text>
                        <Group
                            sx={(theme) => {
                                return {
                                    color:
                                        theme.colorScheme === "dark"
                                            ? theme.colors.dark[2]
                                            : theme.colors.gray[7],
                                };
                            }}
                        >
                            <IconSettings
                                onClick={() => {
                                    router.push("/app/settings");
                                }}
                                className="cursor-pointer"
                                size={18}
                            />
                        </Group>
                    </Group>
                </Flex>
            </props.section>

            <props.section className={props.classes.section}>
                <div className="p-4">
                    <SidebarUpperUserButton />
                    <Box pt={12}>
                        <Box pb={15}>
                            <SidebarUpperSearchbar />
                        </Box>
                        <div className={props.classes.mainLinks}>
                            {appletSidebarItems}
                        </div>
                    </Box>
                </div>
            </props.section>
        </div>
    );
};

export default SidebarUpper;
