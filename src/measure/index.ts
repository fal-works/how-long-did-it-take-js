import type { Unit } from "../format/common-types";
import * as format from "../format/index.js";

import type { Measurer, MeasurerSync } from "./types";
import { create, createSync } from "./create.js";

export const withUnit = (unit: Unit, fractionDigits: number): Measurer =>
  create(format.withUnit(unit)(fractionDigits));

export const autoUnit = (precision: number): Measurer =>
  create(format.autoUnit(precision));

export const withUnitSync = (
  unit: Unit,
  fractionDigits: number
): MeasurerSync => createSync(format.withUnit(unit)(fractionDigits));

export const autoUnitSync = (precision: number): MeasurerSync =>
  createSync(format.autoUnit(precision));
