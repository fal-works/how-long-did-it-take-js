import * as fs from "fs";
import { runJs } from "./run-js.js";
import { runCommand } from "./run-command.js";

const argv = process.argv.slice(2);
const firstArg = argv[0];

if (!firstArg || firstArg === "--help") {
  console.log("Command usage:");
  console.log("  hldit (any command)");
  console.log("  hldit (any *.js filepath)");
  console.log();
  process.exit(0);
}

fs.promises.open(firstArg, "r").then(
  (file) => file.close().then(() => runJs(firstArg)),
  () => runCommand(argv.join(" "))
);
