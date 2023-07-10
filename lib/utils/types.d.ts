export type Style = { [key in keyof Input]: string };
export type NodeTimeout = ReturnType<typeof setTimeout>;
export type NodeInterval = ReturnType<typeof setInterval>;
export type UseState<T> = [T, React.Dispatch<React.SetStateAction<T>>];
export type OverrideField<T, R> = Omit<T, keyof R> & R;

