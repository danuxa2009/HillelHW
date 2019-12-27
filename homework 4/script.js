'use strict'

const enteredNumbers = prompt('Введите числа через запятую');
const arrSplited = enteredNumbers.split(',');
console.log(arrSplited);

const numberArr = arrSplited.filter(number => {
    return !isNaN(number) && number !== " " && number !== "";
});

alert(`Числа в массиве ${numberArr.join(',')}`);