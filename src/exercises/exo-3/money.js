
class Money {
    currency = "MGA";
    montant = 0;

    constructor(currency, montant) {
        this.currency = currency;
        this.montant = montant;
    }

    add(money){
        if(money != null){
            if(money.currency != this.currency){
                throw new Error("Money currency are not the same");
            }
            this.montant += money.montant;
        }
    }
}

module.exports = Money;