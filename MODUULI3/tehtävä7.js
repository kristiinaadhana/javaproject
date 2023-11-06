'use strict';

document.addEventListener('DOMContentLoaded', function() {

    const kohde = document.getElementById('target');
    const trigger = document.getElementById('trigger');

    trigger.addEventListener('mouseover', function ()  {
        kohde.src = 'picB.jpg';
    });

    trigger.addEventListener('mouseout', function () {
        kohde.src = 'picA.jpg';
    });
});