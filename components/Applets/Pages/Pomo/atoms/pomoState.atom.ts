import { atom } from "jotai";
import PomoStateNext from "../../../../../lib/applets/pomo/PomoStateNext/PomoStateNext";

export const pomoStateAtom = atom<PomoStateNext>(new PomoStateNext());
// TODO: to persist the pomodoro state, turn this into a localstorage atom
