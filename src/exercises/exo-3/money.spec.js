
const Money = require("./money");

describe("Money", () => {
    it("devrait creer de l'argent de 100 MGA", () => {
        const money = new Money("MGA", 100);
        expect(money.montant).toEqual(100);
    });
    it("devrait additionner de l'argent", () => {
        const moneyA = new Money("MGA", 100);
        const moneyB = new Money("MGA", 150);
        moneyA.add(moneyB);
        expect(moneyA.montant).toEqual(250);
    });
    it("devrait lever une exception", () => {
        const moneyA = new Money("MGA", 100);
        const moneyB = new Money("EUR", 20);
        expect(() => moneyA.add(moneyB)).toThrow(new Error("Money currency are not the same"));
    });
});