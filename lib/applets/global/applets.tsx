import type { SpotlightAction } from "@mantine/spotlight";
import {
	IconCalendarEvent,
	IconCheckbox,
	IconComet,
	IconGauge,
	IconGraph,
	IconHourglass,
	TablerIcon,
} from "@tabler/icons";
import dayjs from "dayjs";
import Router from "next/router";
import { ReactNode } from "react";
import Calendar from "../../../components/Applets/Pages/Calendar";
import Dashboard from "../../../components/Applets/Pages/Dashboard";
import Pomo from "../../../components/Applets/Pages/Pomo/Pomo";
import Recommended from "../../../components/Applets/Pages/Recommended";
import Scores from "../../../components/Applets/Pages/Scores";
import Tasks from "../../../components/Applets/Pages/Tasks";
import CalendarToolbar from "../../../components/Applets/Toolbars/Calendar/CalendarToolbar";

/* 
	IA:
	- Applets are primary pages of the app. They are accessed via the sidebar. Each of them are smaller apps that communicate with each other.
	- Each applet is stored in a Nextjs route. When the sidebar item is clicked, the `applet.route` is pushed to the router.
	- The structure of `Applet` is the union of:
		- `SpotlightAction` - The spotlight action that is triggered when the user types the applet's name in the spotlight.
		  This is a default type from mantine. It allows for any `Applet` to be used in the spotlight component (see `AppSpotlightProvider.tsx`)
		  since applets will be supersets of spotlight actions.
	- Every applet is wrapped around an `<AppLayout />`
		- The app layout is a component that renders the sidebar, the toolbar, and the applet.
		- Every applet has a toolbar. The toolbar is a component that is rendered in the top right of the applet.
		  It is used to provide additional functionality to the applet - similar to that of MacOS toolbars.
*/

interface AppletAdditionalFields extends SpotlightAction {
	route: string;
	iconNoSize: TablerIcon;
	icon: ReactNode;
	FC: React.FC;
	toolbar?: React.FC;
	toolbarTitleOverride?: string;
}

export type Applet = SpotlightAction & AppletAdditionalFields;
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
			route: "/app/dashboard",
			FC: Dashboard,
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
			route: "/app/recommended",
			FC: Recommended,
		},
	],
	[
		"calendar",
		{
			id: "calendar",
			title: "Calendar",
			description: "Your events all in one place.",
			group: "Applets",
			keywords: [
				"calendar",
				"lectures",
				"events",
				"schedule",
				"appointments",
			],
			iconNoSize: IconCalendarEvent,
			icon: <IconCalendarEvent size={20} />,
			onTrigger: (action: SpotlightAction) => {
				Router.push(action.route);
			},
			route: "/app/calendar",
			FC: Calendar,
			toolbar: CalendarToolbar,
			toolbarTitleOverride: dayjs().startOf("month").format("MMMM YYYY"),
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
			route: "/app/tasks",
			FC: Tasks,
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
			route: "/app/scores",
			FC: Scores,
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
			iconNoSize: IconHourglass,
			icon: <IconHourglass size={20} />,
			onTrigger: (action: SpotlightAction) => {
				Router.push(action.route);
			},
			route: "/app/pomodoro",
			FC: Pomo,
		},
	],
]);

export default applets;
