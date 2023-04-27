type Group = `${"population" | "sample"}`;

export default class Descriptive {
    data: Array<number>;
    group: Group;
    rounded: number|false;
    size: number;

    constructor (data: Array<number>, group: Group, rounded: number|false = false) {
        this.data = data;
        this.group = group;
        this.size = data.length;
        this.rounded = rounded;
    }

    sum() {
        var sum = this.data.reduce((sum, value) => sum + value, 0);

        return this.rounded ? parseFloat(sum.toFixed(this.rounded)): sum;
    }

    mean() {
        var mean = this.data.reduce((sum, value) => sum + value, 0)/this.size;

        return this.rounded ? parseFloat(mean.toFixed(this.rounded)): mean;
    }

    median() {
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

    mode(): number {
        var count: Record<number, number> = {};

        this.data.forEach((element) => {
            if (count.hasOwnProperty(element)) {
                count[element]++;
            } else {
                count[element] = 1;
            }
        });

        return Number(Object.entries(count).reduce((mode, current) => mode[1] < current[1] ? current: mode)[0]);
    }

    max() {
        return this.data.reduce((max, current) => current > max ? current: max);
    }

    min() {
        return this.data.reduce((min, current) => current < min ? current: min);
    }

    variance() {
        var variance = 0;
        if (this.group == "sample") {
            variance = this.sumOfSquareDeviations()/(this.size - 1);
        } else {
            variance = this.sumOfSquareDeviations()/(this.size);
        }

        return this.rounded ? parseFloat(variance.toFixed(this.rounded)): variance;
    }

    standardDeviation() {
        var standardDeviation = Math.sqrt(this.variance());

        return this.rounded ? parseFloat(standardDeviation.toFixed(this.rounded)): standardDeviation;
    }

    private sumOfSquareDeviations() {
        var squareDeviations = this.data.map((value) => Math.pow((value - this.mean()), 2));

        var sumOfSD = squareDeviations.reduce((sum, value) => sum + value, 0);

        return this.rounded ? parseFloat(sumOfSD.toFixed(this.rounded)): sumOfSD;
    }
}
