import { RingProgress } from "@mantine/core";
import { useAtom } from "jotai";
import { pomoStateAtom } from "../../atoms/pomoState.atom";
import { pomoThemeAtom } from "../../atoms/pomoTheme.atom";
import PomoTimerClock from "../PomoTimerClock/PomoTimerClock";

interface PomoProgressProps {}

const PomoProgress: React.FC<PomoProgressProps> = (props) => {
    const [pomoTheme] = useAtom(pomoThemeAtom);
    const [pomoState] = useAtom(pomoStateAtom);

    return (
        <div className="flex h-full w-full items-center justify-center p-4">
            <RingProgress
                size={300}
                roundCaps
                thickness={16}
                color={pomoTheme}
                bg="transparent"
                label={<PomoTimerClock />}
                mb={40}
                sx={(theme) => {
                    return {
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.fn.rgba(
                                      theme.colors[pomoTheme][5],
                                      0.2,
                                  )
                                : theme.colors[pomoTheme][2],
                    };
                }}
                sections={[
                    {
                        color: pomoTheme,
                        value: pomoState.progress(),
                    },
                ]}
            ></RingProgress>
        </div>
    );
};

export default PomoProgress;
