'use strict'

const enteredNumbers = prompt('Введите числа через запятую')
    .split(',')
    .filter(value => !isNaN(value) && value.trim() !== '')
    .map(Number);
alert(`Числа в массиве: ${enteredNumbers}`);


const maxNumber = Math.max(...enteredNumbers);
alert(`Максимальное число: ${maxNumber}`);

const sumNumbers = enteredNumbers.reduce((acc, num) => acc + num, 0);
alert(`Сумма всех чисел: ${sumNumbers}`);


const evenNumber = enteredNumbers.filter(num => num % 2 === 0);
alert(`Четные числа: ${evenNumber}`);