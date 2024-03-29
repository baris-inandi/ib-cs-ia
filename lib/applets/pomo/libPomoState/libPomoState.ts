import dayjs from "dayjs";
import IPomoState from "./IPomoState";

/* 
  IA:
    This file contains the logic for the Pomo applet.
    The global pomodoro state object of type `IPomoState` is accessed as an atom
    throughout the applet. Its structure is defined in `IPomoState.ts`. Jotai is used to
    store the global state object in the local storage, so that refreshing the page does
    not reset the pomodoro state. This means we have to make `IPomoState` serializable
    (Meaning it can be converted to a string and back to an object without losing any data).
    This is why there is no PomoState class that implements the `IPomoState` interface.

    Instead, we have a library that provides functions take the global state object
    as an argument and mutate them, mostly for preperation for React dispatches.
    
    This is essentially where all the logic of the pomodoro applet is stored.
*/

const libPomoState = {
    MAX_DURATION_MINS: 1440,

    STAGE_DURATION_MINS: {
        "focus": 25,
        "break": 5,
        "long break": 15,
    },

    getIncrementMins: (self: IPomoState): number => {
        return {
            "focus": 5,
            "break": 1,
            "long break": 2,
        }[self.currentPomodoroStage];
    },

    remaningSecs: (self: IPomoState): number => {
        if (self.end.isAfter instanceof Function) {
            if (self.end.isAfter(dayjs())) {
                if (self.end.diff instanceof Function) {
                    return self.end.diff(dayjs(), "seconds");
                }
                console.error(
                    "self.end.diff is undefined, see libPomoState.ts",
                );
            } else {
                return 0;
            }
        }
        return (
            libPomoState.STAGE_DURATION_MINS[
                self.currentPomodoroStage
            ] * 60
        );
    },

    increment: (self: IPomoState): IPomoState => {
        let s =
            (self.pause.is
                ? self.pause.clockState.mins * 60 +
                  self.pause.clockState.secs
                : libPomoState.remaningSecs(self) + 1) +
            libPomoState.getIncrementMins(self) * 60;
        /* 
      IA:
        Here, and in function `decrement`, we add (or subtract) 1 to the total seconds.
        This is a clever hack to improve the user experience of the applet.
        This is because if the timer is running we want to freeze time for 1 second
        so that subsequent presses to the + or - buttons will preserve the remaining
        seconds (and not subtract 1 second as it normally would on every passing second
        due to the `useEffect` hook on `Pomo.tsx`). It feels more natural to the user.
    */
        return {
            ...self,
            end: dayjs().add(s, "seconds"),
            pause: {
                ...self.pause,
                clockState: {
                    mins: Math.floor(s / 60),
                    secs: Math.floor(s % 60),
                },
            },
            totalSecs: s,
        };
    },

    decrement: (self: IPomoState): IPomoState => {
        let s =
            (self.pause.is
                ? self.pause.clockState.mins * 60 +
                  self.pause.clockState.secs
                : libPomoState.remaningSecs(self) + 1) -
            libPomoState.getIncrementMins(self) * 60;
        return {
            ...self,
            end: dayjs().add(s, "seconds"),
            pause: {
                ...self.pause,
                clockState: {
                    mins: Math.floor(s / 60),
                    secs: Math.floor(s % 60),
                },
            },
        };
    },

    remainingFormatted: (
        self: IPomoState,
    ): { mins: number; secs: number } => {
        const r = libPomoState.remaningSecs(self);
        return {
            mins: Math.floor(r / 60),
            secs: Math.floor(r % 60),
        };
    },

    isFuturePomoStateValidForAddSubForReducerValidation: (
        next: IPomoState,
    ): boolean => {
        return (
            libPomoState.remaningSecs(next) <=
            libPomoState.MAX_DURATION_MINS * 60
        );
    },

    nextStage: (
        pomoState: IPomoState,
        setPomoState: (pomoState: IPomoState) => void,
    ) => {
        // TODO: also send this to the database so that the total hours of pomo is recorded
        // also attach a course that was studied in this session (according to the tasks completed during the pomo)
        const stage = pomoState.currentPomodoroStage;
        const newStage =
            stage === "focus"
                ? pomoState.currentPomodoroNumber % 4 === 0
                    ? "long break"
                    : "break"
                : "focus";
        const out: IPomoState = {
            ...pomoState,
            end: dayjs().add(
                libPomoState.STAGE_DURATION_MINS[newStage],
                "minutes",
            ),
            totalSecs: libPomoState.STAGE_DURATION_MINS[newStage] * 60,
            pause: {
                is: true,
                clockState: {
                    mins: libPomoState.STAGE_DURATION_MINS[newStage],
                    secs: 0,
                },
            },
            secondsPassed: 0,
            currentPomodoroStage: newStage,
            currentPomodoroNumber:
                pomoState.currentPomodoroNumber +
                (newStage === "focus" ? 1 : 0),
        };
        setPomoState(out);
    },

    generateDefaultPomoState: (): IPomoState => {
        return {
            end: dayjs().add(25, "minutes"),
            totalSecs: 25 * 60,
            pause: {
                is: true,
                clockState: {
                    mins: 25,
                    secs: 0,
                },
            },
            currentPomodoroNumber: 1,
            currentPomodoroStage: "focus",
            secondsPassed: 0,
            history: [],
            $: false,
        };
    },

    isReadyForAutoNextStage: (self: IPomoState): boolean => {
        return libPomoState.remaningSecs(self) <= 0;
    },

    ui: {
        decrementDisabled: (self: IPomoState) => {
            return libPomoState.remaningSecs(self) <= 0;
        },

        incrementDisabled: (self: IPomoState) => {
            return (
                libPomoState.remaningSecs(self) >=
                libPomoState.MAX_DURATION_MINS * 60
            );
        },
    },
};

export default libPomoState;
