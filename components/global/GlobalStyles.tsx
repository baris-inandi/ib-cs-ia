import { css, Global } from "@emotion/react";
import { useAtom } from "jotai";
import { accentColorRgbaAtom } from "../../atoms/atoms";

export default function GlobalStyles() {
	const [accentColorRgba] = useAtom(accentColorRgbaAtom);
	return (
		<div className="hidden">
			<Global
				styles={css`
					body {
						background-color: ${accentColorRgba};
					}
				`}
			/>
		</div>
	);
}
