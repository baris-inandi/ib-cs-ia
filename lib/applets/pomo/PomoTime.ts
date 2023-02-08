export class PomoTime {
	mins: number;
	secs: number;
	totalSecs: number;

	constructor(mins: number, secs: number) {
		this.secs = secs;
		this.mins = mins;
		this.totalSecs = mins * 60 + secs;
	}

	completePercentage(): number {
		let currentSecs = this.secs + this.mins * 60;
		return (currentSecs / this.totalSecs) * 100;
	}

	value(): number {
		return this.mins * 60 + this.secs;
	}
}
