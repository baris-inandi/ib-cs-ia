import { MantineColor } from "@mantine/core";
import dayjs, { Dayjs } from "dayjs";
import { PomoStage } from "../libPomoState/IPomoState";
import { PomoStageNext } from "./PomoStageNext";
import PomoStateNextConstants, {
    type PomoStateNextConsts,
} from "./PomoStateNextConstants";

const DEFAULT_MILLIS = PomoStateNextConstants.STAGE_DURATION_MILLIS.get(
    PomoStageNext.FOCUS,
)!;

interface IPomoStateNextStarted {
    at: Dayjs;
    millis: number;
}

export default class PomoStateNext {
    pausedMillis: number | undefined;
    started: IPomoStateNextStarted = {
        at: dayjs(),
        millis: DEFAULT_MILLIS,
    };
    millis: number = DEFAULT_MILLIS;
    currentPomodoroStage: PomoStageNext = PomoStageNext.FOCUS;
    currentPomodoroNumber: number = 1;
    consts: PomoStateNextConsts = PomoStateNextConstants;
    setPomoState: React.Dispatch<React.SetStateAction<PomoStateNext>> =
        () => {};

    hook() {
        if (this.pausedMillis === undefined) {
            const elapsed = dayjs().diff(this.started.at);
            this.millis = this.started.millis - elapsed;
        }
        if (this.millis <= 0) {
            this.nextStage();
        }
    }

    nextStage() {
        const stage = this.currentPomodoroStage;
        const newStage =
            stage === PomoStageNext.FOCUS
                ? this.currentPomodoroNumber % 4 === 0
                    ? PomoStageNext.LONG_BREAK
                    : PomoStageNext.BREAK
                : PomoStageNext.FOCUS;
        this.currentPomodoroNumber =
            this.currentPomodoroNumber +
            (newStage === PomoStageNext.FOCUS ? 1 : 0);
        this.currentPomodoroStage = newStage;
        this.started.at = dayjs();
        this.started.millis =
            this.consts.STAGE_DURATION_MILLIS.get(newStage)!;
        this.rerender();
        return [newStage, this.currentPomodoroNumber];
    }

    pauseplay() {
        if (this.pausedMillis === undefined) {
            this.pausedMillis = this.millis;
        } else {
            const elapsed = dayjs().diff(this.started.at);
            this.millis += elapsed;
            this.pausedMillis = undefined;
        }
        this.rerender();
    }

    getClockState() {
        const m = Math.floor(this.millis / 60000);
        const s = Math.floor((this.millis % 60000) / 1000);
        return {
            mins: m <= 0 ? 0 : m,
            secs: s <= 0 ? 0 : s,
        };
    }

    progress() {
        const out = this.millis / this.started.millis;
        return out <= 0 ? 0 : out;
    }

    currentPomodoroStageAsLegacyPomoStage(): PomoStage {
        return this.currentPomodoroStage === PomoStageNext.FOCUS
            ? "focus"
            : this.currentPomodoroStage === PomoStageNext.BREAK
            ? "break"
            : "long break";
    }

    theme(): MantineColor {
        return this.consts.POMO_THEME_COLOR.get(
            this.currentPomodoroStage,
        )!;
    }

    increment() {
        const newMillis =
            this.millis +
            this.consts.POMO_INCREMENTS.get(this.currentPomodoroStage)!;
        this.started.millis = newMillis;
        this.millis = newMillis;
        this.rerender();
    }

    decrement() {
        this.millis -= this.consts.POMO_INCREMENTS.get(
            this.currentPomodoroStage,
        )!;
        this.rerender();
    }

    reset() {
        this.setThis(new PomoStateNext());
    }

    setThis(obj: PomoStateNext) {
        this.setPomoState(
            Object.assign(
                Object.create(Object.getPrototypeOf(this)),
                this,
                obj,
            ),
        );
    }

    rerender() {
        this.setThis(this);
    }

    isPaused() {
        return this.pausedMillis !== undefined;
    }

    initSetter(
        setPomoState: React.Dispatch<
            React.SetStateAction<PomoStateNext>
        >,
    ) {
        this.setPomoState = setPomoState;
    }
}
