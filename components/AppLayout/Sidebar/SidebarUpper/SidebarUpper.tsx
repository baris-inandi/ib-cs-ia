import { Box, Flex, Group, Text } from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import applets from "../../../../lib/applets/global/applets";
import { Style } from "../../../../lib/utils/types";
import SidebarItem from "../SidebarItem/SidebarItem";
import SidebarLabel from "../SidebarLabel/SidebarLabel";
import SidebarUpperSearchbar from "./SidebarUpperSections/SidebarUpperSearchbar";
import SidebarUpperUserButton from "./SidebarUpperSections/SidebarUpperUserButton";

interface Props {
    section: any;
    classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
    const router = useRouter();

    const appletSidebarItems = Array.from(applets.values()).map(
        (applet, i) => {
            if (applet.hiddenInSidebar) return <></>;
            return (
                <SidebarItem
                    kbdindex={i + 1}
                    classes={props.classes}
                    appletOrCourse={applet}
                    key={applet.id}
                    active={router.asPath === applet.route}
                />
            );
        },
    );

    return (
        <div className="select-none">
            <props.section className={props.classes.section}>
                <Flex gap={8} py={14} px={15} h={45} align="center">
                    <Group position="apart" w="100%">
                        <Link
                            href="/app/dashboard"
                            passHref
                            style={{
                                textDecoration: "unset",
                            }}
                        >
                            <Text
                                pt={2}
                                pl={2}
                                size={16}
                                fw={600}
                                sx={(theme) => {
                                    return {
                                        color:
                                            theme.colorScheme === "dark"
                                                ? theme.white
                                                : theme.black,
                                    };
                                }}
                            >
                                CSIA SchoolApp
                            </Text>
                        </Link>
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
                <div className="p-5">
                    <SidebarUpperUserButton />
                    <Box pt={12}>
                        <Box pb={15}>
                            <SidebarUpperSearchbar />
                        </Box>
                        <SidebarLabel text="Applets" />
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

