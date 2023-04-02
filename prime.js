const isPrime = input => {
    if (input < 2) {
        return false;
    }
    if (input === 2) {
        return true;
    }
    if (input % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(input); i += 2) {
        if (input % i === 0) {
        return false;
        }
    }
    return true;
};

module.exports = isPrime;