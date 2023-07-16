import dayjs, { Dayjs } from "dayjs";
import { PomoStage } from "../libPomoState/IPomoState";

const DEFAULT_MILLIS = 0.2 * 60000;

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
    currentPomodoroStage: PomoStage = "focus";
    currentPomodoroNumber: number = 1;

    hook() {
        if (this.pausedMillis === undefined) {
            const elapsed = dayjs().diff(this.started.at);
            this.millis = this.started.millis - elapsed;
        }
    }

    pauseplay() {
        if (this.pausedMillis === undefined) {
            this.pausedMillis = this.millis;
        } else {
            this.millis = this.pausedMillis;
            this.pausedMillis = undefined;
        }
    }

    getClockState() {
        return {
            mins: Math.floor(this.millis / 60000),
            secs: Math.floor((this.millis % 60000) / 1000),
        };
    }

    progress() {
        return this.millis / this.started.millis;
    }
}

