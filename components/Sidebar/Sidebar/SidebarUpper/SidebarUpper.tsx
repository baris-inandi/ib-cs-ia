import { Box, Flex, Group, Text } from "@mantine/core";
import { IconBox } from "@tabler/icons";
import { useAtom } from "jotai";
import { activeAppletAtom } from "../../../../global.atom";
import applets from "../../../../lib/applets/global/applets";
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
    (applet) => (
      <SidebarApplet
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
        <Flex gap={8} py={14} px={20} h={50} align="center">
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
          image="https://i.imgur.com/fGxgcDF.png"
          name="Bob Rulebreaker"
          email="Product owner"
        />
      </props.section>
      <props.section className={props.classes.section}>
        <Box p={10}>
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
