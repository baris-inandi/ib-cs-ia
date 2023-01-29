import type { MantineColor } from "@mantine/core";
import { atom } from "jotai";
import Dashboard from "./components/Applets/Pages/Dashboard";
import { Applet } from "./lib/utils/applets";

export const accentColorAtom = atom<MantineColor>("blue");
export const accentColorRgbaAtom = atom<string>("rgba(0, 0, 0, 1)");
export const activeAppletAtom = atom<Applet>({
	id: "dashboard",
	title: "Dashboard",
	description: "An overview of your day.",
	group: "Applets",
	onTrigger: (_) => {},
	notifications: 0,
	route: "/app/dashboard",
	FC: Dashboard,
	accentColor: "blue",
});
