import { useAtom } from "jotai";
import { accentColorAtom } from "../atoms/theme.atom";

const Recommended = () => {
	const [_, setAccentColor] = useAtom(accentColorAtom);
	setAccentColor("grape");
	return <div>Recommended</div>;
};

export default Recommended;
