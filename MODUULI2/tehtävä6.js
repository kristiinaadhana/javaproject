'use strict';
let tulos
const lista = [];
function noppa() {
    const randomNumero = Math.floor(Math.random() * 6) + 1;
    lista.push(randomNumero)
    return randomNumero
}

do {
    tulos = noppa();
} while (tulos !== 6)

//

const participantlist = document.getElementById('Noppalista');

const heading =document.createElement('h2');
heading.textContent = 'Nopanheitossa saadut silmäluvut';

const unorderedlist =document.createElement('ul');

for (let i = 0; i<lista.length; i++) {
    const listitem = document.createElement('li');
    listitem.textContent = lista[i];
    unorderedlist.appendChild(listitem);
}

participantlist.appendChild(heading);
participantlist.appendChild(unorderedlist);
