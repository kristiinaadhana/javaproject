'use strict';

document.addEventListener('DOMContentLoaded', function() {

    const kohde = document.getElementById('target');

    const uus = document.createElement('li');
    uus.textContent = 'New item';

    const tokauus = document.createElement('li');
    tokauus.textContent = 'Second item';
    tokauus.classList.add('my-item');

    kohde.appendChild(uus);
    kohde.appendChild(tokauus);

});
