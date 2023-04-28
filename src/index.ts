import Descriptive from "./descriptive";


/**
 * @param name - name of the summary
 * @param data - data to be processed
 * @param group - define whether the summary is for a sample or a population
 * @param rounded - (optional) decimal place to round off the values
 */
export class Summary extends Descriptive {
    value = {
        mean: this.mean(),
        median: this.median(),
        mode: this.mode(),
        max: this.max(),
        min: this.min(),
        variance: this.variance(),
        standardDeviation: this.standardDeviation()
    }
}