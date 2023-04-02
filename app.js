const isPrime = require('./prime');
const reciprocalDecimalCount = require('./reciprocal');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lineReader.question('Enter a number: ', (number) => {
    let counter = 0;
    let primeCount = 0;
    let primes = new Array(number);

    while (primeCount < number) {
        const isPrimeNumber = isPrime(counter);
        if (isPrimeNumber) {
            primes[primeCount] = counter;
            primeCount++;
            console.log(`${primeCount}: ${counter}`);
        }

        counter++;
    }

    let reciprocalRepeatingDigitCounts = {};
    primes.forEach(element => {
        if (element === 2 || element === 5) {
            return;
        }

        const repeatingDigitCount = reciprocalDecimalCount(element);

        console.log(`Reciprocal of ${element} repeats after ${repeatingDigitCount} digits.`);

        reciprocalRepeatingDigitCounts[element] = repeatingDigitCount;
    });

    for (let key in reciprocalRepeatingDigitCounts) {
        console.log(`${key}: ${reciprocalRepeatingDigitCounts[key]}`);
    }
    lineReader.close();
});