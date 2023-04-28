import { Group } from "./types";
/**
 * @param name - name of the summary
 * @param data - data to be processed
 * @param group - define whether the summary is for a sample or a population
 * @param rounded - (optional) decimal place to round off the values
 */
export default class Descriptive {
    name: string;
    data: Array<number>;
    group: Group;
    rounded: number|false;
    size: number;

    constructor (name: string, data: Array<number>, group: Group, rounded: number|false = false) {
        this.name = name;
        this.data = data;
        this.group = group;
        this.size = data.length;
        this.rounded = rounded;
    }

    sum(): number {
        console.log(this.data);
        var sum = this.data.reduce((sum, value) => sum + value, 0);

        return this.rounded ? parseFloat(sum.toFixed(this.rounded)): sum;
    }

    mean(): number {
        var mean = this.data.reduce((sum, value) => sum + value, 0)/this.size;

        return this.rounded ? parseFloat(mean.toFixed(this.rounded)): mean;
    }

    median(): number {
        var dataCopy: Array<number> = this.data;
        var sortedData: Array<number> = dataCopy.sort((a, b) => a - b);

        var median: number = 0;

        if (this.size % 2 == 0) {
            median = (sortedData[(this.size/2) - 1] + sortedData[(this.size/2)])/2;
        } else {
            median = sortedData[(this.size+1)/2 - 1];
        }

        return median;
    }

    mode(): Array<number> {
        var counts: Record<number, number> = {};
        var modes: Array<number> = [];

        this.data.forEach((element) => {
            if (counts.hasOwnProperty(element)) {
                counts[element]++;
            } else {
                counts[element] = 1;
            }
        });

        var modeCount = Object.entries(counts).reduce((mode, current) => mode[1] < current[1] ? current: mode)[1];

        Object.entries(counts).forEach((count) => {
            if (count[1] == modeCount) {
                modes.push(Number(count[0]));
            }
        });

        return modes;
    }

    max(): number {
        return this.data.reduce((max, current) => current > max ? current: max);
    }

    min(): number {
        return this.data.reduce((min, current) => current < min ? current: min);
    }

    variance(): number {
        var variance = 0;
        if (this.group == "sample") {
            variance = this.sumOfSquareDeviations()/(this.size - 1);
        } else {
            variance = this.sumOfSquareDeviations()/(this.size);
        }

        return this.rounded ? parseFloat(variance.toFixed(this.rounded)): variance;
    }

    standardDeviation(): number {
        var standardDeviation = Math.sqrt(this.variance());

        return this.rounded ? parseFloat(standardDeviation.toFixed(this.rounded)): standardDeviation;
    }

    private sumOfSquareDeviations(): number {
        var squareDeviations = this.data.map((value) => Math.pow((value - this.mean()), 2));

        var sumOfSD = squareDeviations.reduce((sum, value) => sum + value, 0);

        return this.rounded ? parseFloat(sumOfSD.toFixed(this.rounded)): sumOfSD;
    }

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
