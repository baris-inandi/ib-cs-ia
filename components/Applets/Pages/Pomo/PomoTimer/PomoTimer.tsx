import { Box, Flex, Paper, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../atoms/pomoState.atom";
import { pomoThemeAtom } from "../atoms/pomoTheme.atom";
import {
  POMO_PROGRESSBAR_HEIGHT,
  POMO_STAGEBAR_HEIGHT,
} from "./constants";
import PomoProgress from "./PomoProgress/PomoProgress";
import PomoTimerClock from "./PomoTimerClock/PomoTimerClock";

export default function PomoTimer() {
  const [pomoState] = useAtom(pomoStateAtom);
  const [pomoTheme] = useAtom(pomoThemeAtom);

  return (
    <>
      <Paper
        h={300}
        w="100%"
        sx={(theme) => {
          return {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.white,
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[3]
            }`,
          };
        }}
      >
        <Flex
          justify="center"
          align="center"
          w="100%"
          h={POMO_STAGEBAR_HEIGHT}
          sx={(theme) => {
            return {
              color: theme.white,
              textAlign: "center",
              borderTopLeftRadius: theme.radius.md,
              borderTopRightRadius: theme.radius.md,
              backgroundColor: theme.colors[pomoTheme][5],
              textTransform: "capitalize",
            };
          }}
        >
          <Text size={18}>
            Pomodoro {pomoState.currentPomodoroNumber} •{" "}
            {pomoState.currentPomodoroStage}
          </Text>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          sx={{
            height: `calc(100% - ${POMO_STAGEBAR_HEIGHT}px)`,
          }}
          justify="center"
          align="center"
        >
          <PomoTimerClock />
          <Box w="100%" maw={300}>
            <PomoProgress height={POMO_PROGRESSBAR_HEIGHT} />
          </Box>
        </Flex>
      </Paper>
    </>
  );
}
