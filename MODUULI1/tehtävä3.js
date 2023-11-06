let number1, number2, number3, summa, keskiarvo, tulo;

number1 = +prompt('Syötä 1. numero: ');
number2 = +prompt('Syötä 2. numero: ');
number3 = +prompt('Syötä 3. numero: ');

summa = number1 + number2 + number3;
keskiarvo = number1 * number2 * number3/3;
tulo = number1 * number2 * number3;

console.log(summa);
console.log(keskiarvo);
console.log(tulo);

'use strict';
document.querySelector('#target').innerHTML = 'Antamesi lukujen summa: ' + summa + '. Antamiesi lukujen tulo: ' + tulo + '. Antamiesi lukujen keskiarvo: ' + keskiarvo;
