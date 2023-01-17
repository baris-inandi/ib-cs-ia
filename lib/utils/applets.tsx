import type { SpotlightAction } from "@mantine/spotlight";
import {
	IconApple,
	IconCalendarEvent,
	IconCheckbox,
	IconComet,
	IconGauge,
	IconGraph,
	TablerIcon,
} from "@tabler/icons";
import Router from "next/router";
import { ReactNode } from "react";

interface AppletAdditionalFields extends Omit<SpotlightAction, "icon"> {
	notifications: number;
	route: string;
	iconNoSize: TablerIcon;
	icon: ReactNode;
}

export type Applet = SpotlightAction | AppletAdditionalFields;

const applets: Array<Applet> = [
	{
		id: "dashboard",
		title: "Dashboard",
		description: "An overview of your day.",
		group: "Applets",
		keywords: ["home", "overview", "dashboard", "day"],
		iconNoSize: IconGauge,
		icon: <IconGauge size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 0,
		route: "/dashboard",
	},
	{
		id: "recommended",
		title: "Recommended",
		description: "Study session recommendations",
		group: "Applets",
		keywords: ["study", "recommendations", "recommended", "new"],
		iconNoSize: IconComet,
		icon: <IconComet size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 0,
		route: "/recommended",
	},
	{
		id: "calendar",
		title: "Calendar",
		description: "Your events all in one place.",
		group: "Applets",
		keywords: ["calendar", "events", "schedule", "appointments"],
		iconNoSize: IconCalendarEvent,
		icon: <IconCalendarEvent size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 10,
		route: "/calendar",
	},
	{
		id: "tasks",
		title: "Tasks",
		description: "Your To-Do list.",
		group: "Applets",
		keywords: ["todo", "task"],
		iconNoSize: IconCheckbox,
		icon: <IconCheckbox size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 0,
		route: "/tasks",
	},
	{
		id: "scores",
		title: "Scores",
		description: "Your scores and grades",
		group: "Applets",
		keywords: ["marks", "grades", "gpa", "exam", "scores"],
		iconNoSize: IconGraph,
		icon: <IconGraph size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 99,
		route: "/scores",
	},
	{
		id: "pomodoro",
		title: "Pomodoro",
		description: "Pomodoro timer for studying",
		group: "Applets",
		keywords: ["pomodoro", "timer", "study", "focus"],
		iconNoSize: IconApple,
		icon: <IconApple size={20} />,
		onTrigger: (action: SpotlightAction) => {
			Router.push(action.route);
		},
		notifications: 0,
		route: "/pomo",
	},
];

export default applets;
