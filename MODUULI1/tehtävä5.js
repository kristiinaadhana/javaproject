const vuosi = +prompt('Syötä vuosiluku: ')
if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
    document.querySelector('#target').innerHTML =`Vuosi ${vuosi} on karkausvuosi`;
} else {
    document.querySelector('#target').innerHTML =`Vuosi ${vuosi} ei ole karkausvuosi.`;
}

'use strict';
