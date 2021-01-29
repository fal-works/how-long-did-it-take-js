export type Unit = "s" | "ms" | "ns";
export type Duration = `${number} ${Unit}`;
export type Formatter = (ms: number) => Duration;
