'use strict';
let numbers

const participants = [];

numbers = +prompt('Enter the number of participants: ')

for (let i = 1; i<=numbers; i++) {
    let names = prompt(`Enter the name of participant number ${i}: `)
    participants.push(names);
}

participants.sort();

//
const participantlist = document.getElementById('participantlisti');

const heading =document.createElement('h2');
heading.textContent = 'Participant names';

const orderedlist =document.createElement('ol');

for (let i = 0; i<=numbers; i++) {
    const listitem = document.createElement('li');
    listitem.textContent = participants[i];
    orderedlist.appendChild(listitem);
}

participantlist.appendChild(heading);
participantlist.appendChild(orderedlist);

