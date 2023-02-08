import IPomoState from "../IPomoState";
import libPomoState from "../libPomoState";

const pomoTimerReducer = (prev: IPomoState, next: IPomoState): IPomoState => {
	/*
		IA:
		we use a reducer instead of a state here to perform validation on the `IPomoState` object.
		The state should be updated only if the following conditions are met:
			- `libPomoState.isFuturePomoStateValidOnAddSubForReducerValidation(next)` is true
				- this ensures that the `endTime` is less than `libPomoState.INCREMENT_MINS` minutes from now
			- Additionally, the reducer makes sure if the remaining time is less than `libPomoState.INCREMENT_MINS` minutes,
			  the timer is set to 00:00 from now instead of a negative number
				- ...and since the `pomoState.remainingSecs` will hit 0, the next stage will be triggered
	*/
	let out = { ...prev };
	if (libPomoState.isFuturePomoStateValidOnAddSubForReducerValidation(next)) {
		if (next.remainingSecs > 0) out = { ...prev, ...next };
		else {
			out = {
				...prev,
				...next,
				remainingSecs: 0,
			};
		}
	}
	return out;
};

export default pomoTimerReducer;
