import { resolve } from "path";

import { create } from "../lib/stop-watch/create.js";
import { autoUnit } from "../lib/format/auto-unit.js";

export const runJs = async (path) => {
  const file = "file:///" + resolve(path);

  const getElapsed = create(autoUnit(2));

  const { default: exported } = await import(file);
  await Promise.resolve(exported);

  console.log(`command complete. (${getElapsed()})`);
};
