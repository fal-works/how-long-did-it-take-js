import { timestamp } from "../util/timestamp.js";

import type { Formatter } from "../format/common-types";
import type { Stopwatch } from "./types";

export function create(format: Formatter): Stopwatch {
  let last = timestamp();

  return () => {
    const now = timestamp();
    const elapsed = now - last;
    last = now;

    return format(elapsed);
  };
}
