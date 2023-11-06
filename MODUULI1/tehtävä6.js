let numero, neliö

if (confirm('Should I calculate the square root?')===true) {
    numero = +prompt('Enter number: ')
    neliö = Math.sqrt(numero)
    console.log(neliö);
}
else if (confirm()===false) {
    console.log('The square root is not calculated');
}

'use strict';
document.querySelector('#target').innerHTML = neliö