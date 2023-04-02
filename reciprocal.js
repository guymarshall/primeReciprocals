const reciprocalDecimalCount = (input) => {
    let dividend = 1;
    const remainders = new Map();
    let decimalCount = 0;

    while (!remainders.has(dividend)) {
        remainders.set(dividend, decimalCount);
        dividend = (dividend * 10) % input;
        decimalCount++;
    }

    return decimalCount - remainders.get(dividend);
}

module.exports = reciprocalDecimalCount;