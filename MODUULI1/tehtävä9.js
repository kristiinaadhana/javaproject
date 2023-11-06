'use strict';
let number
let i

number = +prompt('Enter a number: ');

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(`Luku ${number} ei ole alkuluku.`);
    }
}

if (i === number + 1) {
    console.log(`Number ${number} is a prime number.`);
}
