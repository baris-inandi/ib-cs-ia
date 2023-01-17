import { ActionIcon, Group, Navbar, Text, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useAtom } from "jotai";
import Link from "next/link";
import { accentColorAtom } from "../../atoms/theme.atom";
import useStyles from "./sidebar.styles";
import SidebarUpper from "./SidebarUpper/SidebarUpper";

const collections = [
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
	const [accent] = useAtom(accentColorAtom);
	const { classes } = useStyles(accent)();

	const collectionLinks = collections.map((collection) => (
		<Link
			href="/"
			onClick={(event) => event.preventDefault()}
			key={collection.label}
			className={classes.collectionLink}>
			<span style={{ marginRight: 10, fontSize: 18 }}>{collection.emoji}</span>{" "}
			<span style={{ fontSize: 16 }}>{collection.label}</span>
		</Link>
	));

	return (
		<Navbar
			sx={{
				paddingTop: "0 !important",
				overflowY: "scroll",
			}}
			height="100vh"
			width={{ sm: 400 }}
			p="md"
			className={classes.navbar}>
			<SidebarUpper section={Navbar.Section} classes={classes} />
			<Navbar.Section className={classes.section}>
				<Group className={classes.collectionsHeader} position="apart">
					<Text size="md" weight={500} color="dimmed">
						Courses
					</Text>
					<Tooltip label="New Course" withArrow position="top">
						<ActionIcon variant="default" size={32}>
							<IconPlus size={22} stroke={1.5} />
						</ActionIcon>
					</Tooltip>
				</Group>
				<div className={classes.collections}>{collectionLinks}</div>
			</Navbar.Section>
		</Navbar>
	);
};

export default Sidebar;
