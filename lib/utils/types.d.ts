export type Style = { [key in keyof Input]: string };
export type NodeTimeout = ReturnType<typeof setTimeout>;
export type NodeInterval = ReturnType<typeof setInterval>;
