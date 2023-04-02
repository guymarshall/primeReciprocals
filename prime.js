const isPrime = input => {
    if (input % 2 == 0) {
        return false;
    }

    for (let i = 3; i < input; i += 2) {
        if (input % i == 0) {
            return false;
        }
    }

    return true;
};

module.exports = isPrime;