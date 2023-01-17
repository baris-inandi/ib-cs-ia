import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Scores = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("lime");
	return <div>Scores</div>;
};

export default Scores;
