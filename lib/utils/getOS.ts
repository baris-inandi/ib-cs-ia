export type OSes = "windows" | "macos" | "unix" | "linux";

const getOS = (): OSes => {
  let os = "windows";
  if (navigator.appVersion.indexOf("Win") != -1) os = "windows";
  else if (navigator.appVersion.indexOf("Mac") != -1) os = "macos";
  else if (navigator.appVersion.indexOf("X11") != -1) os = "unix";
  else if (navigator.appVersion.indexOf("Linux") != -1) os = "linux";
  return os as OSes;
};

export default getOS;
