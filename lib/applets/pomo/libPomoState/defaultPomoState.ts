import IPomoState from "./IPomoState";

const DEFAULT_POMOSTATE_MINS = 25;

const DEFAULT_POMOSTATE: IPomoState = {
	remainingSecs: DEFAULT_POMOSTATE_MINS * 60,
	totalSecs: DEFAULT_POMOSTATE_MINS * 60,
	paused: true,
};

export default DEFAULT_POMOSTATE;