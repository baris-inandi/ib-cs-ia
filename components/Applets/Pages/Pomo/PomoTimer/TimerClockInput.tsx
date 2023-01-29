export default function TimerClockInput(props: {
	value: string;
	align: "left" | "center" | "right";
	onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<input
			onChange={props.onChange}
			onBlur={props.onBlur}
			value={props.value}
			style={{
				all: "unset",
				width: "100%",
				textAlign: props.align,
			}}></input>
	);
}
