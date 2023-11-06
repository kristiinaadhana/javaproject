'use strict';

const numbers = [];

for (let i=1; i<=5; i++) {
    const annetut = +prompt(`Anna ${i}. numero: `)
    numbers.push(annetut);
}

for (let i=1; i<=5; i--) {
    console.log(numbers);
}