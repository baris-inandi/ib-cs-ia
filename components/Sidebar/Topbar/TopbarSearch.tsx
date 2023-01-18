import { Box, Group, Text, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react";
import getOS from "../../../lib/utils/getOS";

export default function TopbarSearch() {
	const spotlight = useSpotlight();
	const [mod, setMod] = useState("Mod");

	useEffect(() => {
		setMod(getOS() == "macos" ? "⌘" : "Ctrl");
	}, []);

	return (
		<UnstyledButton
			w="100%"
			onClick={() => {
				spotlight.openSpotlight();
			}}>
			<Box
				w={280}
				p={3}
				sx={(theme) => {
					return {
						borderRadius: theme.radius.md,
						backgroundColor: "rgba(255,255,255,0.8)",
						color: "black",
						textAlign: "left",
					};
				}}>
				<Group w="100%" position="apart">
					<Group pl={12}>
						<IconSearch width={16} height={16} />
						<Text size={14}>Search...</Text>
					</Group>
					<Text
						px={10}
						py={3}
						sx={(theme) => {
							return {
								fontSize: 12,
								borderRadius: theme.radius.sm,
								backgroundColor: "white",
								border: `1px solid ${theme.colors.gray[4]}`,
							};
						}}>
						{mod}+K
					</Text>
				</Group>
			</Box>
		</UnstyledButton>
	);
}
