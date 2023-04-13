const path = require("path");

const concurrently = require("concurrently");
concurrently(
  [
    {
      command: "yarn next-dev || npm run next-dev",
      name: "N",
      prefixColor: "blue",
      cwd: path.resolve(__dirname),
    },
    {
      command: "npm run db",
      name: "P",
      prefixColor: "magenta",
      cwd: path.resolve(__dirname, "database"),
    },
  ],
  {
    killOthers: ["failure"],
    restartTries: 2,
    restartDelay: 500,
    cwd: path.resolve(__dirname),
  },
);

