import { Box, Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { Applet } from "../../../../../lib/applets/global/applets";
import { Style } from "../../../../../lib/utils/types";

interface SidebarAppletProps {
	appletOrCourse?: Applet | any; // TODO: type this when Course has an interface implemented
	classes: Style;
	active?: boolean;
}

const SidebarApplet: React.FC<SidebarAppletProps> = (props) => {
	const router = useRouter();

	return (
		<UnstyledButton
			onClick={() => {
				router.push(props.appletOrCourse.route);
			}}
			sx={(theme) => {
				return props.active
					? {
							background: theme.colors.indigo[0],
							border: `1px solid ${theme.colors.indigo[1]}`,
					  }
					: {
							border: `1px solid transparent`,
					  };
			}}
			className={props.classes.mainLink}>
			<Box
				sx={(theme) => {
					return props.active
						? {
								color: theme.colors.indigo[9],
						  }
						: {};
				}}
				className={props.classes.mainLinkInner}>
				<props.appletOrCourse.iconNoSize
					size={20}
					className={`${props.classes.mainLinkIcon} ${
						props.active
							? props.classes.mainLinkIconActive
							: props.classes.mainLinkIconInactive
					}`}
					stroke={1.5}
				/>
				<Text>{props.appletOrCourse.title}</Text>
			</Box>
		</UnstyledButton>
	);
};

SidebarApplet.defaultProps = {
	active: false,
};

export default SidebarApplet;
