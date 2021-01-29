import type { Duration, Formatter } from "./common-types";

export type AutoFormatterFactory = (precision: number) => Formatter;

export const autoUnit: AutoFormatterFactory = (precision) => (ms) => {
  const log10 = Math.log10(ms);
  const roundFactor = Math.pow(10.0, precision + Math.floor(-log10));
  const rounded = Math.round(roundFactor * ms) / roundFactor;

  const shift = precision - log10;

  if (shift < 0) return `${0.001 * rounded} s` as Duration;
  if (shift < 3) return `${rounded} ms` as Duration;
  return `${1000.0 * rounded} ns` as Duration;
};
