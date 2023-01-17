import { useAtom } from "jotai";
import { useState } from "react";
import { accentColorAtom } from "../../atoms/theme.atom";
import applets from "../../lib/utils/applets";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function AppLayout(props: { children: React.ReactNode }) {
	const [accent] = useAtom(accentColorAtom);
	const [activeApplet, setActiveApplet] = useState(applets[0]);
	console.log(accent);

	return (
		<div className="flex flex-col h-screen w-screen">
			<Topbar activeAppletTitle={activeApplet.title} />
			<div className="h-full flex">
				<Sidebar
					activeApplet={activeApplet}
					setActiveApplet={setActiveApplet}
				/>
				{props.children}
			</div>
		</div>
	);
}
