
const math = require("./math");

describe("Math", () => {
    it("devrait etre un nombre est pair", () => {
        const testArray = [1, 2, 17, 34];
        const divisors = math.getDivisors(34);
        console.log(testArray, divisors);
        expect(divisors).toEqual(testArray);
    });
    // it("devrait etre un nombre est pair", () => {
    //     const result = exo1.isOdd(12);
    //     expect(result).toBeTrue();
    // });
    // it("devrait etre un nombre est impair", () => {
    //     const result = exo1.isOdd(1);
    //     expect(result).toBeFalse();
    // });
    // it("devrait etre un nombre est impair", () => {
    //     const result = exo1.isOdd(19);
    //     expect(result).toBeFalse();
    // });
});