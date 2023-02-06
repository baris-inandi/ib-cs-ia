import { UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { Applet } from "../../../../../lib/applets/global/applets";
import { Style } from "../../../../../lib/utils/style";

interface SidebarAppletProps {
	applet: Applet;
	classes: Style;
}

const SidebarApplet: React.FC<SidebarAppletProps> = (props) => {
	const router = useRouter();
	return (
		<UnstyledButton
			onClick={() => {
				router.push(props.applet.route);
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

export default SidebarApplet;
