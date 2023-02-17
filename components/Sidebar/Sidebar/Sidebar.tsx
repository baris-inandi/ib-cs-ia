import { Navbar } from "@mantine/core";
import useStyles from "./sidebar.styles";
import SidebarApplet from "./SidebarUpper/SidebarApplet/SidebarApplet";
import SidebarUpper from "./SidebarUpper/SidebarUpper";

const courses = [
  { emoji: "👍", label: "Sales" },
  { emoji: "🚚", label: "Deliveries" },
  { emoji: "💸", label: "Discounts" },
  { emoji: "💰", label: "Profits" },
  { emoji: "✨", label: "Reports" },
  { emoji: "🛒", label: "Orders" },
  { emoji: "📅", label: "Events" },
  { emoji: "🙈", label: "Debts" },
  { emoji: "💁‍♀️", label: "Customers" },
];

const Sidebar = () => {
  const { classes } = useStyles();

  const coursesLinks = courses.map((course) => (
    <SidebarApplet
      classes={classes}
      appletOrCourse={course}
      key={course.label}
      active={false} /* TODO: fix */
    />
  ));

  return (
    <Navbar
      id="sidebar"
      sx={(theme) => ({
        borderRight: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[4]
        }`,
        overflowY: "scroll",
      })}
      height="100%"
      width={{ sm: 280, md: 300, lg: 320, xl: 400 }}
      pb="lg"
      className={classes.navbar + " noscrollbar"}
    >
      <SidebarUpper section={Navbar.Section} classes={classes} />
      {/* <Navbar.Section className={classes.section}>
				<Group position="apart" px={20}>
				<Text size="md" weight={500} color="dimmed">
				Courses
				</Text>
				<Tooltip label="New Course" withArrow position="top">
				<ActionIcon radius="md" variant="default" size={24}>
				<IconPlus size={16} stroke={1.5} />
				</ActionIcon>
				</Tooltip>
				</Group>
			</Navbar.Section> */}
    </Navbar>
  );
};

export default Sidebar;
