'use strict';

function even(array) {
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

const originallist = [1,2,3,4,5,6,7,8,9];
console.log(originallist);

const newlist = even(originallist);