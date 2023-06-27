import dayjs from "dayjs";
import IPomoState from "../libPomoState/IPomoState";

const toggleTimer = (
    pomoState: IPomoState,
    setPomoState: (pomoState: IPomoState) => void,
) => {
    let newPaused = !pomoState.pause.is;
    let remaining = 31;
    if (newPaused) {
        // working -> paused
        setPomoState({
            ...pomoState,
            pause: {
                is: newPaused,
                clockState: {
                    mins: 31,
                    secs: 31,
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
