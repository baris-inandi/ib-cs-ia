import { Flex } from "@mantine/core";
import InnerAppletViewportWrapper from "../Applets/Renderer/InnerAppletViewportWrapper";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function AppLayout(props: { children: React.ReactNode }) {
	const topbarHeight = 56;
	return (
		<div className="h-screen w-screen">
			<Topbar h={topbarHeight} />
			<Flex
				sx={{
					height: `calc(100% - ${topbarHeight}px)`,
				}}>
				<Sidebar />
				<InnerAppletViewportWrapper>
					{props.children}
				</InnerAppletViewportWrapper>
			</Flex>
		</div>
	);
}
