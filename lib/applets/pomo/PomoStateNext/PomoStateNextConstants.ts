import { MantineColor } from "@mantine/core";
import { PomoStageNext } from "./PomoStageNext";

const POMO_CONSTS = {
    STAGE_DURATION_MILLIS: new Map<PomoStageNext, number>([
        [PomoStageNext.FOCUS, 25 * 60000],
        [PomoStageNext.BREAK, 5 * 60000],
        [PomoStageNext.LONG_BREAK, 15 * 60000],
    ]),
    POMO_THEME_COLOR: new Map<PomoStageNext, MantineColor>([
        [PomoStageNext.FOCUS, "red"],
        [PomoStageNext.BREAK, "accent"],
        [PomoStageNext.LONG_BREAK, "grape"],
    ]),
    POMO_INCREMENTS: new Map<PomoStageNext, number>([
        [PomoStageNext.FOCUS, 5 * 60000],
        [PomoStageNext.BREAK, 1 * 60000],
        [PomoStageNext.LONG_BREAK, 2 * 60000],
    ]),
};

export default POMO_CONSTS;
export type PomoStateNextConsts = typeof POMO_CONSTS;

