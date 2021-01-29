import type { Unit } from "../format/common-types";
import * as format from "../format/index.js";

import type { StopWatch } from "./types";
import { create } from "./create.js";

export const withUnit = (unit: Unit, fractionDigits: number): StopWatch =>
  create(format.withUnit(unit)(fractionDigits));

export const autoUnit = (precision: number): StopWatch =>
  create(format.autoUnit(precision));
