import Descriptive from "./descriptive";

export class Describe extends Descriptive {
    summary() {
        return {
            mean: this.mean(),
            median: this.median(),
            mode: this.mode(),
            max: this.max(),
            min: this.min(),
            variance: this.variance(),
            standardDeviation: this.standardDeviation()
        }
    }
}