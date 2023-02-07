import { Button, Flex, Paper } from "@mantine/core";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons";
import { Dispatch } from "react";
import IPomoState from "../../../../../../lib/applets/pomo/libPomoState/IPomoState";

interface PomoControlsProps {
	toggleTimer: () => void;
	updatePomoState: Dispatch<IPomoState>;
	pomoState: IPomoState;
}

const PomoControls: React.FC<PomoControlsProps> = (props) => {
	return (
		<Paper withBorder mt={12} p={10} w="100%">
			<Flex w="100%" align="center" justify="center" gap={10}>
				<Button
					sx={{ fontSize: 16 }}
					w="100%"
					h={60}
					color="violet"
					variant="filled"
					onClick={props.toggleTimer}>
					{props.pomoState.paused ? (
						<IconPlayerPlay />
					) : (
						<IconPlayerPause />
					)}
				</Button>
				<Button
					sx={{ fontSize: 16 }}
					w="100%"
					h={60}
					color="violet"
					variant="outline">
					Skip to Break
				</Button>
			</Flex>
		</Paper>
	);
};

export default PomoControls;
