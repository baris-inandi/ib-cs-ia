import applets from "./applets";

export default function getAppletAccent(appletID: string) {
	return applets.get(appletID)?.accentColor ?? "gray";
}
