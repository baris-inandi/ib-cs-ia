const path = require("path");
const concurrently = require("concurrently");
const os = require("os");

concurrently(
    [
        {
            command: "yarn next-dev || npm run next-dev",
            name: "N",
            prefixColor: "red",
            cwd: path.resolve(__dirname),
        },
        {
            command:
                os.platform() === "win32"
                    ? '"./database/pocketbase.exe" serve'
                    : "./database/pocketbase serve",
            name: "P",
            prefixColor: "cyan",
            cwd: path.resolve(__dirname),
        },
    ],
    {
        killOthers: ["failure"],
        restartTries: 2,
        restartDelay: 500,
        cwd: path.resolve(__dirname),
    },
);
