'use strict'


const a = 3;
const b = 0;
let result;

// if (a !== 23) {
//     alert('equal');
// }

// if (a === 10) {
//     result = 'result is 10';
// } else if (b == 0) {
//     result = 'result is not 10';
// } else {
//     result = 'I dont know';
// }

// result = (a === 10) ? 'result is 10' : 'result is not 10';

// switch (a) {
//     case 10:
//         alert('a is 10');
//         break;
//     case 20:
//         alert('a is 20');
//         break;
//     case 30:
//         alert('a is 30');
//         break;
//     default: // не обязателен.
//         alert('nothing');
// }


// for (let i = 0; i < 10; i++) {
//     alert(i);
// }

let val;

do {
    val = +prompt('enter number')
} while (isNaN(val));