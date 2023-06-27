import { PomoStage } from "../libPomoState/IPomoState";

export interface ClockState {
    mins: number;
    secs: number;
}

const DEFAULT_SECS = 25 * 60;

export default class PomoStateNext {
    public secs = DEFAULT_SECS;
    public pause = { is: false, secs: DEFAULT_SECS };
    public currentPomodoroNumber = 1;
    public currentPomodoroStage: PomoStage = "focus";
    public previousHookCall = Date.now();
    /* public history: Array<{
        stage: PomoStage;
        pomoNumber: number;
    }>; */
    hook() {
        // check if new stage is available
        // change the pomodoronumber accordingly
        console.log((Date.now() - this.previousHookCall) / 1000);
        this.secs -=
            Math.floor(Date.now() - this.previousHookCall) / 1000;
        this.previousHookCall = Date.now();
    }

    getClockState(): ClockState {
        return {
            mins: Math.floor(this.secs / 60),
            secs: Math.floor(this.secs % 60),
        };
    }
}
