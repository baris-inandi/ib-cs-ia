import { RingProgress, useMantineTheme } from "@mantine/core";
import { useAtom } from "jotai";
import PomoTimerClock from "../PomoTimerClock/PomoTimerClock";
import { pomoStateAtom } from "../atoms/pomoState.atom";

interface PomoProgressProps {}

const PomoProgress: React.FC<PomoProgressProps> = (props) => {
    const [pomoState] = useAtom(pomoStateAtom);
    const theme = useMantineTheme();

    return (
        <div className="flex h-full w-full items-center justify-center p-4">
            <RingProgress
                size={360}
                roundCaps
                thickness={14}
                color={pomoState.theme()}
                bg="transparent"
                label={<PomoTimerClock />}
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

