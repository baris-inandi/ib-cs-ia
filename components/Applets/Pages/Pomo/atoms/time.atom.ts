import { atom } from "jotai";
import { PomoTime } from "../../../../../lib/applets/pomo/PomoTime";

export const DEFAULT_MINS = 25;
export const DEFAULT_SECS = 0;

export const pomoTimeAtom = atom(new PomoTime(DEFAULT_MINS, DEFAULT_SECS));
