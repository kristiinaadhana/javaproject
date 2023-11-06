'use strict';
let numero;
const numbers = [];

numero = +prompt('Enter a number (to quit enter number 0); ');

while (numero > 0) {
    numero = +prompt('Enter a number (to quit enter number 0); ');
    numbers.push(numero);
}

numbers.sort((a,b) => a-b);

for (let i = 0; i<=numbers.length; i++) {
    console.log(numbers[i]);
}









