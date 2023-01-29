import { useAtom } from "jotai";
import { accentColorAtom, activeAppletAtom } from "../../../globalAtoms";
import applets, { Applet } from "../../../lib/utils/applets";
import InnerAppletViewportWrapper from "./InnerAppletViewportWrapper";

export default function ActiveAppletRenderer(props: { entryApplet: string }) {
	const DEFAULT_APPLET = applets.get("dashboard");

	const [applet, setApplet] = useAtom(activeAppletAtom);
	const [_, setAccent] = useAtom(accentColorAtom);
	setApplet(applets.get(props.entryApplet) ?? (DEFAULT_APPLET as Applet));
	setAccent(applet?.accentColor ?? DEFAULT_APPLET?.accentColor);
	if (applet) {
		return (
			<InnerAppletViewportWrapper>
				<applet.FC />
			</InnerAppletViewportWrapper>
		);
	}
	return <div />;
}
