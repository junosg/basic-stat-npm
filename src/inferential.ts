import { Summary } from "./index";

export class Inferential {
    describes: Array<Summary>;
    numberOfGroups: number;

    constructor(describes: Array<Summary>) {
        this.describes = describes;
        this.numberOfGroups = describes.length;
    }
}