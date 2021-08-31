
const exo1 = require("./exo-1");

describe("Nombre", () => {
    it("devrait etre un nombre est pair", () => {
        const result = exo1.isOdd(2);
        expect(result).toBeTrue();
    });
    it("devrait etre un nombre est pair", () => {
        const result = exo1.isOdd(12);
        expect(result).toBeTrue();
    });
    it("devrait etre un nombre est impair", () => {
        const result = exo1.isOdd(1);
        expect(result).toBeFalse();
    });
    it("devrait etre un nombre est impair", () => {
        const result = exo1.isOdd(19);
        expect(result).toBeFalse();
    });
});