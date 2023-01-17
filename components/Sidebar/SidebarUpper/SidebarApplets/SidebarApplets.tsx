import { Badge, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { Applet } from "../../../../lib/utils/applets";
import { Style } from "../../../../lib/utils/style";

interface Props {
	applet: Applet;
	classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
	return (
		<div key={props.applet.id}>
			<Link className="no-underline" href={props.applet.route} passHref>
				<UnstyledButton className={props.classes.mainLink}>
					<div className={props.classes.mainLinkInner}>
						<props.applet.iconNoSize
							size={24}
							className={props.classes.mainLinkIcon}
							stroke={1.5}
						/>
						<span>{props.applet.title}</span>
					</div>
					{props.applet.notifications > 0 && (
						<Badge
							size="md"
							variant="filled"
							className={props.classes.mainLinkBadge}>
							{props.applet.notifications}
						</Badge>
					)}
				</UnstyledButton>
			</Link>
		</div>
	);
};

export default SidebarUpper;
