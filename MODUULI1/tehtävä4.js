let nimi, eka;

nimi = prompt('Syötä nimi: ');
function randomnimi() {
    return Math.floor(Math.random() *4) +1
}

if (randomnimi()===4) {
    console.log(nimi + ', you are Gryffindor');
    document.querySelector('#target').innerHTML = nimi + ', you are Gryffindor';
}
else if (randomnimi()===1) {
    console.log(nimi + ', you are Slytherin');
    document.querySelector('#target').innerHTML = nimi + ', you are Slytherin';
}
else if (randomnimi()===2) {
    console.log(nimi + ', you are Hufflepuff');
    document.querySelector('#target').innerHTML = nimi + ', you are Hufflepuff';

}
else if (randomnimi()===3) {
    console.log(nimi + ', you are Ravenclaw');
    document.querySelector('#target').innerHTML = nimi + ', you are Ravenclaw';
}


