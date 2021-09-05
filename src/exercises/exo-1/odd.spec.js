
const odd = require("./odd");

describe("Nombre", () => {
    it("devrait etre un nombre est pair", () => {
        const result = odd.isOdd(2);
        expect(result).toBeTrue();
    });
    it("devrait etre un nombre est pair", () => {
        const result = odd.isOdd(12);
        expect(result).toBeTrue();
    });
    it("devrait etre un nombre est impair", () => {
        const result = odd.isOdd(1);
        expect(result).toBeFalse();
    });
    it("devrait etre un nombre est impair", () => {
        const result = odd.isOdd(19);
        expect(result).toBeFalse();
    });
});