import Descriptive from "./descriptive";

export default class Inferential {
    descriptives: Array<Descriptive>;

    constructor (descriptives: Array<Descriptive>) {
        this.descriptives = descriptives;
    }

    oneSampleT(populationMean: number, descriptiveName: string, rounded: number|false = false) {
        var descriptive: Descriptive = this.descriptives.filter((descriptive) => descriptive.name == descriptiveName)[0];

        var numerator = ( descriptive.mean() - populationMean );
        var denominator = (descriptive.standardDeviation()/Math.sqrt(descriptive.size));

        return rounded ? parseFloat(Number(numerator/denominator).toFixed(rounded)): Number(numerator/denominator);
    }
    
    // twoSampleT
}