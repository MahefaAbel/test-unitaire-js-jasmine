
const exo1 = require("./exo-1");

describe("Nombre", () => {
    it("devrait etre un nombre est impair", () => {
        const result = exo1.isOdd(12345);
        expect(result).toBeFalse();
    });
    
    it("devrait etre un nombre est pair", () => {
        const result = exo1.isOdd(1234);
        expect(result).toBeTrue();
    });
});