export type Group = `${"population" | "sample"}`;

export type Summary = {
    mean: number,
    median: number,
    mode: Array<number>,
    max: number,
    min: number,
    variance: number,
    standardDeviation: number
}