import { Kbd, TextInput, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";

const SidebarSearch = () => {
	const spotlight = useSpotlight();

	return (
		<UnstyledButton
			tabIndex={
				-1
			} /* TABBING MAKES THE KEYBOARD USERS TAB AND WRITE ON THE TEXTINPUT */
			onClick={() => {
				spotlight.openSpotlight();
			}}>
			<TextInput
				sx={{ pointerEvents: "none" }}
				placeholder="Search"
				size="sm"
				icon={<IconSearch size={16} stroke={1.5} />}
				rightSectionWidth=""
				rightSection={
					<>
						<Kbd>Mod</Kbd>
						<div className="h-full w-1"></div>
						<Kbd>K</Kbd>
						<div className="h-full w-1"></div>
					</>
				}
				styles={{ rightSection: { pointerEvents: "none" } }}
				mb="sm"
			/>
		</UnstyledButton>
	);
};

export default SidebarSearch;
