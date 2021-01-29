import { timestamp } from "../util/timestamp.js";

import type { Formatter } from "../format/common-types";

import type { Measurer, MeasurerSync } from "./types";

export const create = (format: Formatter): Measurer => async (callback) => {
  const last = timestamp();
  await callback();
  const now = timestamp();

  return format(now - last);
};

export const createSync = (format: Formatter): MeasurerSync => (callback) => {
  const last = timestamp();
  callback();
  const now = timestamp();

  return format(now - last);
};
