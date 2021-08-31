
const getDivisors = val => {
    const divisors = [];
    for(let i = 0; i < val; i++){
        if(val % i == 0)
            divisors.push(i);
    }
    return divisors;
};

const gcd = (val1, val2) => {
    if(val1 == 0)
        return val2;
    return gcd(val2 % val1, val1);
};

const getGCD = (...nbs) => {
    if(nbs.length > 0){
        let result = nbs[0];
        for(let i = 0; i < nbs.length; i++){
            result = gcd(result, nbs[1]);
            if(result == 1)
                break;
        }
        return result;
    }
};

module.exports = {
    getDivisors,
    getGCD
};