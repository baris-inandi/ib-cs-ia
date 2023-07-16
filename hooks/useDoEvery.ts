import { useEffect, useState } from "react";

/*
IA:
- This is a react hook that calls `callback` every `interval`
  milliseconds within a `useEffect`.
*/

export const useDoEvery = (interval: number, callback: () => void) => {
    const [$, set$] = useState(false);
    useEffect(() => {
        const i = setInterval(() => {
            set$(!$);
            callback();
        }, interval);
        return () => {
            clearInterval(i);
        };
    }, [$, callback, interval]);
};

