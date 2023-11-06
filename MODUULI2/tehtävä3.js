'use strict';

const dogs = [];

for (let i = 1; i<=6; i++) {
    const dog = prompt(`Enter the name of the dog number ${i}: `)
    dogs.push(dog);
}

dogs.reverse()


const participantlist = document.getElementById('Doglist');

const heading =document.createElement('h2');
heading.textContent = 'Dog names';

const orderedlist =document.createElement('ul');

for (let i = 0; i<=dogs.length; i++) {
    const listitem = document.createElement('li');
    listitem.textContent = dogs[i];
    orderedlist.appendChild(listitem);
}

participantlist.appendChild(heading);
participantlist.appendChild(orderedlist);
