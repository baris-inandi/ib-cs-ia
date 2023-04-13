import { Box, Flex, Group, Text } from "@mantine/core";
import { IconBox } from "@tabler/icons";
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
    <>
      <props.section className={props.classes.section}>
        <Flex gap={8} py={14} px={20} h={45} align="center">
          <IconBox size={22} />
          <Group align="baseline">
            <Text size={16} fw={600}>
              SchoolApp
            </Text>
          </Group>
        </Flex>
      </props.section>

      <props.section className={props.classes.section}>
        <SidebarUpperUserButton
          image="https://api.dicebear.com/6.x/open-peeps/svg?seed=Ada%20Lovelace&backgroundColor=ffdfbf,ffd5dc,d1d4f9,c0aede,b6e3f4"
          name="Ada Lovelace"
          email="Product owner"
        />
        <Box p={10} pt={8}>
          <Box pb={15}>
            <SidebarUpperSearchbar />
          </Box>
          <div className={props.classes.mainLinks}>
            {appletSidebarItems}
          </div>
        </Box>
        <Box p={10}>
          <SidebarUpperUpcoming />
        </Box>
      </props.section>
    </>
  );
};

export default SidebarUpper;
