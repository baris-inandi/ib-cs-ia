import dayjs, { Dayjs } from "dayjs";
export type PomoStage = "focus" | "break" | "long break";

export default interface IPomoState {
    end: Dayjs;
    totalSecs: number;
    pause: {
        is: boolean;
        clockState: {
            mins: number;
            secs: number;
        };
    };
    currentPomodoroNumber: number;
    currentPomodoroStage: PomoStage;
    secondsPassed: number;
    history: Array<{
        stage: PomoStage;
        pomoNumber: number;
    }>;
    $: boolean;
}

export const DEFAULT_POMOSTATE: IPomoState = {
    end: dayjs("2000-01-01"),
    totalSecs: 25 * 60,
    pause: {
        is: true,
        clockState: {
            mins: 25,
            secs: 0,
        },
    },
    secondsPassed: 0,
    history: [],
    currentPomodoroNumber: 1,
    currentPomodoroStage: "focus",
    $: false,
};
