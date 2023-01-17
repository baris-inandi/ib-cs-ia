import { Badge, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import applets from "../../../lib/utils/applets";
import { Style } from "../../../lib/utils/style";
import SidebarUpperSearch from "./SidebarUpperSearch";
import SidebarUpperUpcoming from "./SidebarUpperUpcoming";
import SidebarUpperUserButton from "./SidebarUpperUserButton";

interface Props {
	section: any;
	classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
	const mainLinks = applets.map((link) => (
		<div key={link.id}>
			<Link className="no-underline" href={link.route} passHref>
				<UnstyledButton className={props.classes.mainLink}>
					<div className={props.classes.mainLinkInner}>
						<link.iconNoSize
							size={24}
							className={props.classes.mainLinkIcon}
							stroke={1.5}
						/>
						<span>{link.title}</span>
					</div>
					{link.notifications > 0 && (
						<Badge
							size="md"
							variant="filled"
							className={props.classes.mainLinkBadge}>
							{link.notifications}
						</Badge>
					)}
				</UnstyledButton>
			</Link>
		</div>
	));

	return (
		<>
			<props.section className={props.classes.section}>
				<SidebarUpperUserButton
					image="https://i.imgur.com/fGxgcDF.png"
					name="Bob Rulebreaker"
					email="Product owner"
				/>
			</props.section>

			<SidebarUpperSearch />

			<props.section className={props.classes.section}>
				<div className={props.classes.mainLinks}>{mainLinks}</div>
				<SidebarUpperUpcoming />
			</props.section>
		</>
	);
};

export default SidebarUpper;
