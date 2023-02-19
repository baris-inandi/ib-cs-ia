import { MantineColor } from "@mantine/core";
import { atom } from "jotai";
import { PomoStage } from "../../../../../lib/applets/pomo/libPomoState/IPomoState";
import { pomoStateAtom } from "./pomoState.atom";

/* 
    IA:
    - The aim of this atom is to dynamically change the pomodoro theme based on the current stage.
        - stages are typical stages "focus", "break", "long break" of a pomodoro
          defined by type `PomoStage` in `IPomoState.ts`
    - `pomoThemes` maps every PomoStage to a MantineColor.
    - `pomoThemeAtom` is a jotai atom that returns the MantineColor
        - It is a derived atom that depends on `pomoStateAtom`
            - Jotai enables `atom` to be called with a parameter of `(get: Getter) => T` where `get` is a
              getter that get return an atom's value, registering it as a dependency of the atom.
              They call this a derived atom.
        - Everytime `get` is called, the atom will re-evaluate the function, therefore resulting in
          a re-render of the component that uses the atom so the theme of the page will change when
          the pomodoro stage changes.
*/

const pomoThemes = new Map<PomoStage, MantineColor>([
  ["focus", "accent"],
  ["break", "pink"],
  ["long break", "grape"],
]);

export const pomoThemeAtom = atom<MantineColor>((get): MantineColor => {
  const stage = get(pomoStateAtom).currentPomodoroStage;
  return pomoThemes.get(stage) ?? "accent";
});
