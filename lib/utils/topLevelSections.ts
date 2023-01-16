import type { SpotlightAction } from "@mantine/spotlight";
import {
	IconApple,
	IconCalendarEvent,
	IconCheckbox,
	IconGauge,
	IconGraph,
	TablerIcon,
} from "@tabler/icons";

export interface TLS extends Omit<SpotlightAction, "icon"> {
	notifications: number;
	route: string;
	icon: TablerIcon;
}

const topLevelSections: Array<TLS> = [
	{
		id: "dashboard",
		title: "Dashboard",
		description: "An overview of your day.",
		group: "Applets",
		keywords: ["home", "overview", "dashboard", "day"],
		icon: IconGauge,
		onTrigger: (action: SpotlightAction) => {
			console.log(action);
		},
		notifications: 10,
		route: "/dashboard",
	},
	{
		id: "calendar",
		title: "Calendar",
		description: "Your events all in one place.",
		group: "Applets",
		keywords: ["calendar", "events", "schedule", "appointments"],
		icon: IconCalendarEvent,
		onTrigger: (action: SpotlightAction) => {
			console.log(action);
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
		icon: IconCheckbox,
		onTrigger: (action: SpotlightAction) => {
			console.log(action);
		},
		notifications: 10,
		route: "/tasks",
	},
	{
		id: "grades",
		title: "Grades",
		description: "Your grades",
		group: "Applets",
		keywords: ["marks", "grades", "gpa", "exam"],
		icon: IconGraph,
		onTrigger: (action: SpotlightAction) => {
			console.log(action);
		},
		notifications: 10,
		route: "/grades",
	},
	{
		id: "pomodoro",
		title: "Pomodoro",
		description: "Pomodoro timer for studying",
		group: "Applets",
		keywords: ["pomodoro", "timer", "study", "focus"],
		icon: IconApple,
		onTrigger: (action: SpotlightAction) => {
			console.log(action);
		},
		notifications: 10,
		route: "/pomo",
	},
];

export default topLevelSections;
