const isPrime = require('./prime');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lineReader.question('Enter a number: ', (number) => {
    console.log(`You entered: ${number}`);
    lineReader.close();
});