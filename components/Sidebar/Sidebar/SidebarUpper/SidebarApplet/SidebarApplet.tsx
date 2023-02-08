import { UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { Applet } from "../../../../../lib/applets/global/applets";
import { Style } from "../../../../../lib/utils/types";

interface SidebarAppletProps {
	applet: Applet;
	classes: Style;
	active?: boolean;
}

const SidebarApplet: React.FC<SidebarAppletProps> = (props) => {
	const router = useRouter();

	return (
		<UnstyledButton
			onClick={() => {
				router.push(props.applet.route);
			}}
			sx={(theme) => {
				return props.active
					? {
							background: theme.colors.gray[0],
							border: `1px solid ${theme.colors.gray[4]}`,
					  }
					: {};
			}}
			className={props.classes.mainLink}>
			<div className={props.classes.mainLinkInner}>
				<props.applet.iconNoSize
					size={24}
					className={props.classes.mainLinkIcon}
					stroke={1.5}
				/>
				<span>{props.applet.title}</span>
			</div>
		</UnstyledButton>
	);
};

SidebarApplet.defaultProps = {
	active: false,
};

export default SidebarApplet;
