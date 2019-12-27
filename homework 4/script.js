'use strict'

let enteredNumbers = prompt('Введите числа через запятую');
arr = [enteredNumbers];
let re = /\s*,\s*/;
arrSplited = arr.split(re);
console.log(arrSplited);