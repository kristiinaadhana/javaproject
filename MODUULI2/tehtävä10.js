'use strict';


const osallistujamaara = +prompt('Anna kilpailuun osallistuvien määrä: ');

for (let i=0; i < osallistujamaara; i++) {
    const nimet = prompt(`${i}. Osallistujan nimi: `)
    console.log(nimet[i]);
}