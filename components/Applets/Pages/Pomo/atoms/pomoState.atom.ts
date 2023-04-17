import { atomWithStorage } from "jotai/utils";
import { DEFAULT_POMOSTATE } from "../../../../../lib/applets/pomo/libPomoState/IPomoState";

export const pomoStateAtom = atomWithStorage(
    "jotaiPomoStateAtom",
    DEFAULT_POMOSTATE,
);
