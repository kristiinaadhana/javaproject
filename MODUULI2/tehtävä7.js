'use strict';
let tulos
const lista = [];

const tahkot = +prompt('Anna tahkojen määrä: ');

function noppa(sides) {
    const randomNumero = Math.floor(Math.random() * sides) + 1;
    lista.push(randomNumero)
    return randomNumero
}

do {
    tulos = noppa(tahkot);
} while (tulos !== tahkot)



//

const participantlist = document.getElementById('Noppalista');

const heading =document.createElement('h2');
heading.textContent = `${tahkot} tahkoisen nopan heitossa saadut silmäluvut`;

const unorderedlist =document.createElement('ul');

for (let i = 0; i<lista.length; i++) {
    const listitem = document.createElement('li');
    listitem.textContent = lista[i];
    unorderedlist.appendChild(listitem);
}

participantlist.appendChild(heading);
participantlist.appendChild(unorderedlist);

