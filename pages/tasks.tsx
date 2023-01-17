import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Tasks = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("yellow");
	return <div>Tasks</div>;
};

export default Tasks;
