import applets from "./applets";

export const appletExists = (appletId: string) => {
    return Array.from(applets.keys()).includes(appletId);
};
