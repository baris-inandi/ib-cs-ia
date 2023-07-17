import { RingProgress, useMantineTheme } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../../atoms/pomoState.atom";
import PomoTimerClock from "../PomoTimerClock/PomoTimerClock";

interface PomoProgressProps {}

const PomoProgress: React.FC<PomoProgressProps> = (props) => {
    const [pomoState] = useAtom(pomoStateAtom);
    const theme = useMantineTheme();

    return (
        <div className="flex h-full w-full items-center justify-center p-4">
            <RingProgress
                size={310}
                roundCaps
                thickness={16}
                color={pomoState.theme()}
                bg="transparent"
                label={<PomoTimerClock />}
                mb={50}
                sx={(theme) => {
                    return {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.fn.rgba(
                                      theme.colors[
                                          pomoState.theme()
                                      ][5],
                                      0.2,
                                  )
                                : theme.colors[pomoState.theme()][2],
                    };
                }}
                rootColor={theme.fn.rgba(
                    theme.colors[pomoState.theme()][9],
                    0.2,
                )}
                sections={[
                    {
                        color: pomoState.theme(),
                        value: pomoState.progress() * 100,
                    },
                ]}
            />
        </div>
    );
};

export default PomoProgress;

