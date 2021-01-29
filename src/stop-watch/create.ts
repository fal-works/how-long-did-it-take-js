import { performance } from "perf_hooks";

import type { Formatter } from "../format/common-types";
import type { StopWatch } from "./types";

export function create(format: Formatter): StopWatch {
  let last = performance.now();

  return () => {
    const now = performance.now();
    const elapsed = now - last;
    last = now;

    return format(elapsed);
  };
}
