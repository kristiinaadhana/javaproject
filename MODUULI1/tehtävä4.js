let nimi, eka;

nimi = prompt('Syötä nimi: ');
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

console.log(getRandomInt(4))
if (getRandomInt()===0) {
    console.log(nimi + ', you are Gryffindor');
    document.querySelector('#target').innerHTML = nimi + ', you are Gryffindor';
}
else if (getRandomInt()===1) {
    console.log(nimi + ', you are Slytherin');
    document.querySelector('#moi').innerHTML = nimi + ', you are Slytherin'
}
else if (getRandomInt()===2) {
    console.log(nimi + ', you are Hufflepuff');
    document.querySelector('#ok').innerHTML = nimi + ', you are Hufflepuff'

}
else if (getRandomInt()===3) {
    console.log(nimi + ', you are Ravenclaw');
    document.querySelector('#joo').innerHTML = nimi + ', you are Ravenclaw'
}


