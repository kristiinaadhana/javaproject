'use strict';

function concat(array) {
    let result = '';
    for (let i = 0; i< array.length; i++ ) {
        result += array[i];
    }
    return result;
}

const nimet = ['Maija', 'Milla', 'Meri'];

const listannimet = concat(nimet);

//

const participantlist = document.getElementById('string');

const heading =document.createElement('h2');
heading.textContent = 'Listan nimet';

const list =document.createElement('p');
list.textContent = listannimet;

participantlist.appendChild(heading);
participantlist.appendChild(list);