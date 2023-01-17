import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Calendar = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("green");
	return <div>Calendar</div>;
};

export default Calendar;
