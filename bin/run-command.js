import { exec } from "child_process";
import { create } from "../lib/stop-watch/create.js";
import { autoUnit } from "../lib/format/auto-unit.js";

/**
 * @param {string} command
 */
export const runCommand = (command) => {
  const cwd = process.cwd();
  const PATH = (process.env.PATH ? [process.env.PATH] : [])
    .concat([`${cwd}\\node_modules\\.bin`])
    .join(";");
  const env = Object.assign(process.env, { PATH });

  const getElapsed = create(autoUnit(2));

  const child = exec(command, { env }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`command complete. (${getElapsed()})`);
  });
  const { stdout, stderr } = child;
  if (stdout) stdout.pipe(process.stdout);
  if (stderr) stderr.pipe(process.stderr);

  return child;
};
