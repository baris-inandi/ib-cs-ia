import IPomoState from "./IPomoState";

const libPomoState = {
	MAX_DURATION_MINS: 1440,
	INCREMENT_MINS: 5,

	increment: (self: IPomoState): IPomoState => {
		let s = self.remainingSecs + libPomoState.INCREMENT_MINS * 60;
		return {
			...self,
			remainingSecs: s,
			totalSecs: s,
		};
	},

	decrement: (self: IPomoState): IPomoState => {
		let s = self.remainingSecs - libPomoState.INCREMENT_MINS * 60;
		return {
			...self,
			remainingSecs: s,
			totalSecs: s,
		};
	},

	remainingFormatted: (self: IPomoState): { mins: number; secs: number } => {
		const r = self.remainingSecs;
		return {
			mins: Math.floor(r / 60),
			secs: Math.floor(r % 60),
		};
	},

	isFuturePomoStateValidOnAddSubForReducerValidation: (
		next: IPomoState,
	): boolean => {
		return next.remainingSecs <= libPomoState.MAX_DURATION_MINS * 60;
	},

	ui: {
		decrementDisabled: (self: IPomoState) => {
			return self.remainingSecs <= 0;
		},

		incrementDisabled: (self: IPomoState) => {
			return self.remainingSecs >= libPomoState.MAX_DURATION_MINS * 60;
		},
	},
};

export default libPomoState;
