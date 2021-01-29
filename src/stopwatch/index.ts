import type { Unit } from "../format/common-types";
import * as format from "../format/index.js";

import type { Stopwatch } from "./types";
import { create } from "./create.js";

export const withUnit = (unit: Unit, fractionDigits: number): Stopwatch =>
  create(format.withUnit(unit)(fractionDigits));

export const autoUnit = (precision: number): Stopwatch =>
  create(format.autoUnit(precision));
