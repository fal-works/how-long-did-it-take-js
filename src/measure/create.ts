import { performance } from "perf_hooks";

import type { Formatter } from "../format/common-types";

import type { Measurer, MeasurerSync } from "./types";

export const create = (format: Formatter): Measurer => async (callback) => {
  const last = performance.now();
  await callback();
  const now = performance.now();

  return format(now - last);
};

export const createSync = (format: Formatter): MeasurerSync => (callback) => {
  const last = performance.now();
  callback();
  const now = performance.now();

  return format(now - last);
};
