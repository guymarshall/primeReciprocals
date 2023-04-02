const isPrime = require('./prime');
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

    primes.forEach(element => {
        if (element === 2 || element === 5) {
            return;
        }

        
    });
    lineReader.close();
});