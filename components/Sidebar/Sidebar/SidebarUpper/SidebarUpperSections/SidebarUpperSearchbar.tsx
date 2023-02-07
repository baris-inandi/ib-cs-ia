import { Box, Flex, Group, Text, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react";
import getOS from "../../../../../lib/utils/getOS";

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
				w="100%"
				p={5}
				sx={(theme) => {
					return {
						borderRadius: theme.radius.md,
						backgroundColor: theme.colors.gray[0],
						color: "black",
						textAlign: "left",
						border: `1px solid ${theme.colors.gray[4]}`,
					};
				}}>
				<Group w="100%" position="apart">
					<Flex
						gap={6}
						align="center"
						pl={6}
						sx={(theme) => {
							return {
								color: theme.colors.gray[7],
							};
						}}>
						<IconSearch size={18} />
						<Text size={16}>Search</Text>
					</Flex>
					<Text
						px={10}
						py={3}
						sx={(theme) => {
							return {
								fontSize: 13,
								borderRadius: theme.radius.sm,
								backgroundColor: "white",
								border: `1px solid ${theme.colors.gray[4]}`,
								color: theme.colors.gray[6],
							};
						}}>
						{mod}+K
					</Text>
				</Group>
			</Box>
		</UnstyledButton>
	);
}
