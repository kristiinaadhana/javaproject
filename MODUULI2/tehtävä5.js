'use strict';
let number;
let numbers = [];
let hasduplicate = false;

do {
    number = +prompt('Enter a new number: ');

    if (numbers.includes(number)) {
        console.log('The number has already been given!')
        hasduplicate = true;
    } else {
        numbers.push(number)
    numbers.sort((a,b) => a - b);

    for (let i=0; i<numbers.length; i++) {
        console.log(numbers[i]);
        }
    }
} while (!hasduplicate);