import { Summary } from "./index";

class Inferential {
    summaries: Array<Summary>;
    numberOfGroups: number;
    significanceLevel: number;

    constructor(summaries: Array<Summary>, significanceLevel: number) {
        this.summaries = summaries;
        this.numberOfGroups = summaries.length;
        this.significanceLevel = significanceLevel;
    }
}