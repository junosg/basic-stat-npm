import { Summary } from "./index";

test("Integers dataset", () => {
    const data = [1, 2, 2, 3, 4, 2, 4];
    const test = new Summary("test", data, "sample", 4);

    expect(test.mean()).toBe(parseFloat((2.5714285714286).toFixed(4)));
    expect(test.median()).toBe(parseFloat((2).toFixed(4)));
    expect(test.mode()).toStrictEqual([2]);
    expect(test.max()).toBe(4);
    expect(test.min()).toBe(1);
    expect(test.variance()).toBe(parseFloat((1.2857142857143).toFixed(4)));
    expect(test.standardDeviation()).toBe(parseFloat((1.1338934190277).toFixed(4)));
});

test("Floats dataset", () => {
    const data = [.34, .12, .41, .67, .45, .23, .12, .49, .14, .76, .34];
    const test = new Summary("test", data, "sample", 4);

    expect(test.mean()).toBe(parseFloat((0.37).toFixed(4)));
    expect(test.median()).toBe(parseFloat((.34).toFixed(4)));
    expect(test.mode()).toStrictEqual([.12, .34]);
    expect(test.max()).toBe(.76);
    expect(test.min()).toBe(.12);
    expect(test.variance()).toBe(parseFloat((0.04638).toFixed(4)));
    expect(test.standardDeviation()).toBe(parseFloat((0.21536016344719).toFixed(4)));
});