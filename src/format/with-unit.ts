import type { Unit, Duration, Formatter } from "./common-types";

export type FixedFormatterFactory = (fractionDigits: number) => Formatter;

export const asSeconds: FixedFormatterFactory = (fractionDigits) => (ms) =>
  `${(0.001 * ms).toFixed(fractionDigits)} s` as Duration;

export const asMilliSeconds: FixedFormatterFactory = (fractionDigits) => (ms) =>
  `${ms.toFixed(fractionDigits)} ms` as Duration;

export const asNanoSeconds: FixedFormatterFactory = (fractionDigits) => (ms) =>
  `${(1000 * ms).toFixed(fractionDigits)} ns` as Duration;

export const withUnit = (unit: Unit): FixedFormatterFactory => {
  switch (unit) {
    case "s":
      return asSeconds;
    case "ms":
      return asMilliSeconds;
    case "ns":
      return asNanoSeconds;
  }
};
