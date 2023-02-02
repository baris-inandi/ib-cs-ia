import { useAtom } from "jotai";
import { activeAppletAtom } from "../../../globalAtoms";
import applets, { Applet } from "../../../lib/utils/applets";
import InnerAppletViewportWrapper from "./InnerAppletViewportWrapper";

export default function ActiveAppletRenderer(props: { entryApplet: string }) {
	const DEFAULT_APPLET = applets.get("dashboard");

	const [applet, setApplet] = useAtom(activeAppletAtom);
	setApplet(applets.get(props.entryApplet) ?? (DEFAULT_APPLET as Applet));
	if (applet) {
		return (
			<InnerAppletViewportWrapper>
				<applet.FC />
			</InnerAppletViewportWrapper>
		);
	}
	return <div />;
}
