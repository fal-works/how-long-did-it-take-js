import { performance } from "perf_hooks";

export const timestamp = (): number => performance.now();
