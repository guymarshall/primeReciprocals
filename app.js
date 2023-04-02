const isPrime = require('./prime');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lineReader.question('Enter a number: ', (number) => {
    let counter = 0;
    let primeCount = 0;
    let primes = [];

    while (primeCount < number) {
        const isPrimeNumber = isPrime(counter);
        if (isPrimeNumber) {
            primeCount++;
            console.log(`${primeCount}: ${counter}`);
            primes.push(counter);
        }

        counter++;
    }
    lineReader.close();
});