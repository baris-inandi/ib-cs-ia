import { MantineColor } from "@mantine/core";
import type { SpotlightAction } from "@mantine/spotlight";
import {
	IconApple,
	IconCalendarEvent,
	IconChalkboard,
	IconCheckbox,
	IconComet,
	IconGauge,
	IconGraph,
	TablerIcon,
} from "@tabler/icons";
import Router from "next/router";
import { ReactNode } from "react";
import Calendar from "../../components/Applets/Pages/Calendar";
import Classes from "../../components/Applets/Pages/Classes";
import Dashboard from "../../components/Applets/Pages/Dashboard";
import Pomo from "../../components/Applets/Pages/Pomo/Pomo";
import Recommended from "../../components/Applets/Pages/Recommended";
import Scores from "../../components/Applets/Pages/Scores";
import Tasks from "../../components/Applets/Pages/Tasks";

interface AppletAdditionalFields extends Omit<SpotlightAction, "icon"> {
	notifications: number;
	route: string;
	iconNoSize: TablerIcon;
	icon: ReactNode;
	FC: React.FC;
	accentColor: MantineColor;
}

export type Applet = SpotlightAction | AppletAdditionalFields;
export type AppletMap = Map<string, Applet>;

const applets: AppletMap = new Map<string, Applet>([
	[
		"dashboard",
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
			route: "/app/dashboard",
			FC: Dashboard,
			accentColor: "blue",
		},
	],
	[
		"recommended",
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
			route: "/app/recommended",
			FC: Recommended,
			accentColor: "grape",
		},
	],
	[
		"calendar",
		{
			id: "calendar",
			title: "Calendar",
			description: "Your events all in one place.",
			group: "Applets",
			keywords: ["calendar", "lectures", "events", "schedule", "appointments"],
			iconNoSize: IconCalendarEvent,
			icon: <IconCalendarEvent size={20} />,
			onTrigger: (action: SpotlightAction) => {
				Router.push(action.route);
			},
			notifications: 10,
			route: "/app/calendar",
			FC: Calendar,
			accentColor: "teal",
		},
	],
	[
		"tasks",
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
			route: "/app/tasks",
			FC: Tasks,
			accentColor: "orange",
		},
	],
	[
		"scores",
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
			route: "/app/scores",
			FC: Scores,
			accentColor: "lime",
		},
	],
	[
		"pomodoro",
		{
			id: "pomodoro",
			title: "Pomodoro",
			description: "Pomodoro timer for studying",
			group: "Applets",
			keywords: ["pomo", "timer", "study", "focus"],
			iconNoSize: IconApple,
			icon: <IconApple size={20} />,
			onTrigger: (action: SpotlightAction) => {
				Router.push(action.route);
			},
			notifications: 0,
			route: "/app/pomo",
			FC: Pomo,
			accentColor: "pink",
		},
	],
	[
		"classes",
		{
			id: "classes",
			title: "Classes",
			description: "All your enrolled classes",
			group: "Applets",
			keywords: ["courses", "lectures", "lessons"],
			iconNoSize: IconChalkboard,
			icon: <IconChalkboard size={20} />,
			onTrigger: (action: SpotlightAction) => {
				Router.push(action.route);
			},
			notifications: 0,
			route: "/app/classes",
			FC: Classes,
			accentColor: "gray",
		},
	],
]);

export default applets;
