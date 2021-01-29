import type { Duration } from "../format/common-types";

export type Measurer = (callback: () => Promise<void>) => Promise<Duration>;
export type MeasurerSync = (callback: () => void) => Duration;
