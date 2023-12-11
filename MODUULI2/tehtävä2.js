'use strict';
let numbers

const participants = [];

numbers = +prompt('Enter the number of participants: ')

for (let i = 1; i<=numbers; i++) {
    let names = prompt(`Enter the name of participant number ${i}: `)
    participants.push(names);
}

participants.sort();

document.querySelector('participantlisti').innerHTML = participants;

