'use strict';

document.addEventListener('DOMContentLoaded', function() {

    const names = ['John', 'Paul', 'Jones'];

    const kohde = document.getElementById('target');

    for (let i = 0; i < names.length; i++) {
        const lista = document.createElement('li');
        lista.textContent = names[i];
        kohde.appendChild(lista);
    }
});


