// 'use strict';

// let maxValue = null;
// let sum = 0;
// const evenNumbers = [];

// const number = prompt('enter numbers')
//     .split(',')
//     .forEach((val) => {
//         if (!isNaN(val) && val.trim() !== '') {
//             val = Number(val);
//             sum += val;

//             if (maxValue === null || maxValue < val) {
//                 maxValue = val;
//             }

//             if (val % 2 === 0) {
//                 evenNumbers.push(val);
//             }

//             console.log('max', maxValue);
//             console.log('Even', evenNumbers);
//             console.log('sum', sum);
//         }

//     });

const sum = 0;

function prog(val) {
    if (val > 0) {
        setTimeout(() => {
            sum += prog(val - 1)

        }, 100);
    }
    return val;
}

prog(100000);