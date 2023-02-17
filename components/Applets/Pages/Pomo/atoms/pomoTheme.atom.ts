import { MantineColor } from "@mantine/core";
import { atom } from "jotai";

export const pomoThemeAtom = atom<MantineColor>("blue");
// TODO: this should change colors according to the pomo state (work, break, long break etc.)
