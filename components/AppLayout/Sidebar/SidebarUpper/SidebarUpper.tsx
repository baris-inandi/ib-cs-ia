import { Box, Flex, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import applets from "../../../../lib/applets/global/applets";
import { activeAppletAtom } from "../../../../lib/global.atom";
import { Style } from "../../../../lib/utils/types";
import SidebarApplet from "./SidebarApplet/SidebarApplet";
import SidebarUpperSearchbar from "./SidebarUpperSections/SidebarUpperSearchbar";
import SidebarUpperUpcoming from "./SidebarUpperSections/SidebarUpperUpcoming";
import SidebarUpperUserButton from "./SidebarUpperSections/SidebarUpperUserButton";

interface Props {
    section: any;
    classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
    const [activeApplet] = useAtom(activeAppletAtom);

    const appletSidebarItems = Array.from(applets.values()).map(
        (applet, i) => (
            <SidebarApplet
                kbdindex={i + 1}
                classes={props.classes}
                appletOrCourse={applet}
                key={applet.id}
                active={activeApplet.id === applet.id}
            />
        ),
    );

    return (
        <div className="select-none">
            <props.section className={props.classes.section}>
                <Flex gap={8} py={14} px={20} h={45} align="center">
                    {/* <IconBox size={22} /> */}
                    <Group align="baseline">
                        <Text size={16} fw={600}>
                            CSIA SchoolApp
                        </Text>
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
                    <Box>
                        <SidebarUpperUpcoming />
                    </Box>
                </div>
            </props.section>
        </div>
    );
};

export default SidebarUpper;

