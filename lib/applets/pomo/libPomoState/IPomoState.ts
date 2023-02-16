export default interface IPomoState {
  remainingSecs: number;
  totalSecs: number;
  paused: boolean;
  currentPomodoroNumber: number;
  currentPomodoroType: "focus" | "break" | "long break";
}
