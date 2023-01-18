import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

export default function AppLayout(props: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col h-screen w-screen">
			<Topbar />
			<div className="h-full flex">
				<Sidebar />
				{props.children}
			</div>
		</div>
	);
}
