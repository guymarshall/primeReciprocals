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

    console.log('Calculating primes...');
    while (primeCount < number) {
        if (counter === 2 || counter === 5) {
            counter++;
            continue;
        }
        const isPrimeNumber = isPrime(counter);
        if (isPrimeNumber) {
            primes[primeCount] = counter;
            primeCount++;
        }

        counter++;
    }

    console.log('Calculating reciprocal repeating digit counts...');
    let reciprocalRepeatingDigitCounts = new Array(number);

    for (let i = 0; i < number; i++) {
        const element = primes[i];
        const repeatingDigitCount = reciprocalDecimalCount(element);

        reciprocalRepeatingDigitCounts[i] = repeatingDigitCount;
    }

    for (let i = 0; i < number; i++) {
        console.log(`Reciprocal of ${primes[i]} repeats after ${reciprocalRepeatingDigitCounts[i]} digits.`);
    }
    lineReader.close();
});