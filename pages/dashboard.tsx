import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Dashboard = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("blue");
	return <div>Dashboard</div>;
};

export default Dashboard;
