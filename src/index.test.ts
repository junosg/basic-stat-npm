import { Descriptive } from "./index";

test("Integers dataset", () => {
    const data = [1, 2, 2, 3, 4, 2, 4];
    console.log(data);
    const test = new Descriptive("test", data, "sample", 4);

    expect(test.mean()).toBe(parseFloat((2.5714285714286).toFixed(4)));
    expect(test.median()).toBe(parseFloat((2).toFixed(4)));
    expect(test.mode().sort()).toStrictEqual([2].sort());
    expect(test.max()).toBe(4);
    expect(test.min()).toBe(1);
    expect(test.variance()).toBe(parseFloat((1.2857142857143).toFixed(4)));
    expect(test.standardDeviation()).toBe(parseFloat((1.1338934190277).toFixed(4)));
});

test("Floats dataset", () => {
    const data = [.34, .12, .41, .67, .45, .23, .12, .49, .14, .76, .34];
    const test = new Descriptive("test", data, "sample", 4);

    expect(test.mean()).toBe(parseFloat((0.37).toFixed(4)));
    expect(test.median()).toBe(parseFloat((.34).toFixed(4)));
    expect(test.mode().sort()).toStrictEqual([.12, .34].sort());
    expect(test.max()).toBe(.76);
    expect(test.min()).toBe(.12);
    expect(test.variance()).toBe(parseFloat((0.04638).toFixed(4)));
    expect(test.standardDeviation()).toBe(parseFloat((0.21536016344719).toFixed(4)));
});

test("Floats dataset", () => {
    const data = [43.34, 78.12, -12.41, 54.67, -89.45, 43.23, 76.12, 45.49, 76.14, 24.76, -102.34];
    const test = new Descriptive("test", data, "sample", 4);

    expect(test.mean()).toBe(parseFloat((21.606363636364).toFixed(4)));
    expect(test.median()).toBe(parseFloat((43.34).toFixed(4)));
    expect(test.mode().sort()).toStrictEqual([43.34, 78.12, -12.41, 54.67, -89.45, 43.23, 76.12, 45.49, 76.14, 24.76, -102.34].sort());
    expect(test.max()).toBe(78.12);
    expect(test.min()).toBe(-102.34);
    expect(test.variance()).toBe(parseFloat((4060.6285254545).toFixed(4)));
    expect(test.standardDeviation()).toBe(parseFloat((63.723061174543).toFixed(4)));
});