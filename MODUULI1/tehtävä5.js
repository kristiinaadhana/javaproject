const vuosi = +prompt('Syötä vuosiluku: ')
if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
    console.log(`Vuosi ${vuosi} on karkausvuosi`);
} else {
    console.log(`Vuosi ${vuosi} ei ole karkausvuosi.`)
}

'use strict';

document.querySelector('#target').innerHTML = '';
document.querySelector('#target').innerHTML = `<p> ${vuosi}</p>