import dayjs from "dayjs";
import IPomoState from "../libPomoState/IPomoState";
import libPomoState from "../libPomoState/libPomoState";

const toggleTimer = (
    pomoState: IPomoState,
    setPomoState: (pomoState: IPomoState) => void,
) => {
    let newPaused = !pomoState.pause.is;
    let remaining = libPomoState.remainingFormatted(pomoState);
    if (newPaused) {
        // working -> paused
        setPomoState({
            ...pomoState,
            pause: {
                is: newPaused,
                clockState: {
                    mins: remaining.mins,
                    secs: remaining.secs,
                },
            },
        });
    } else {
        // paused -> working
        let clockState = pomoState.pause.clockState;
        setPomoState({
            ...pomoState,
            end: dayjs()
                .add(clockState.mins, "minutes")
                .add(clockState.secs, "seconds"),
            pause: {
                ...pomoState.pause,
                is: newPaused,
            },
        });
    }
};

export default toggleTimer;
