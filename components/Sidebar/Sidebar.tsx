import {
	ActionIcon,
	Badge,
	Group,
	Kbd,
	Navbar,
	Text,
	TextInput,
	Tooltip,
	UnstyledButton,
} from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconPlus, IconSearch } from "@tabler/icons";
import Link from "next/link";
import topLevelSections from "../../lib/utils/topLevelSections";
import useStyles from "./sidebarStyles";
import { UserButton } from "./UserButton";

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
	const { classes } = useStyles();
	const spotlight = useSpotlight();

	const mainLinks = topLevelSections.map((link) => (
		<div key={link.id}>
			<Link href={link.route} passHref>
				<UnstyledButton className={classes.mainLink}>
					<div className={classes.mainLinkInner}>
						<link.icon
							size={20}
							className={classes.mainLinkIcon}
							stroke={1.5}
						/>
						<span>{link.title}</span>
					</div>
					{link.notifications && (
						<Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
							{link.notifications}
						</Badge>
					)}
				</UnstyledButton>
			</Link>
		</div>
	));

	const collectionLinks = collections.map((collection) => (
		<Link
			href="/"
			onClick={(event) => event.preventDefault()}
			key={collection.label}
			className={classes.collectionLink}>
			<span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span>{" "}
			{collection.label}
		</Link>
	));

	return (
		<Navbar
			height="100vh"
			width={{ sm: 300 }}
			p="md"
			className={classes.navbar}>
			<Navbar.Section className={classes.section}>
				<UserButton
					image="https://i.imgur.com/fGxgcDF.png"
					name="Bob Rulebreaker"
					email="Product owner"
				/>
			</Navbar.Section>

			<UnstyledButton
				onClick={() => {
					spotlight.openSpotlight();
				}}>
				<TextInput
					sx={{ pointerEvents: "none" }}
					placeholder="Search"
					size="sm"
					icon={<IconSearch size={14} stroke={1.5} />}
					rightSectionWidth={32}
					rightSection={
						<>
							<Kbd>/</Kbd>
						</>
					}
					styles={{ rightSection: { pointerEvents: "none" } }}
					mb="sm"
				/>
			</UnstyledButton>

			<Navbar.Section className={classes.section}>
				<div className={classes.mainLinks}>{mainLinks}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.section}>
				<Group className={classes.collectionsHeader} position="apart">
					<Text size="xs" weight={500} color="dimmed">
						Courses
					</Text>
					<Tooltip label="New Course" withArrow position="top">
						<ActionIcon variant="default" size={24}>
							<IconPlus size={12} stroke={1.8} />
						</ActionIcon>
					</Tooltip>
				</Group>
				<div className={classes.collections}>{collectionLinks}</div>
			</Navbar.Section>
		</Navbar>
	);
};

export default Sidebar;
