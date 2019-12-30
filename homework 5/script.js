"use strict";

let action, numberOfOperands, operand, result;
const arr = [];


do {
    action = prompt("Выбирите действие +, -, /, *");
} while (action !== "+" && action !== "-" && action !== "*" && action !== "/");

do {
    numberOfOperands = +prompt("Введите количество операндов");
} while (isNaN(numberOfOperands) || numberOfOperands > 5 || numberOfOperands < 0);


for (let i = 1; i <= numberOfOperands; i++) {
    do {
        operand = +prompt('Введите операнд');
    } while (isNaN(operand && operand !== '' && operand !== ' '));
    arr.push(operand);

};


switch (action) {
    case '+':
        result = arr.reduce((summ, start) => summ + start);
        alert(`Суммирование:${arr.join(' + ')} = ${result}`);
        break;
    case '-':
        result = arr.reduce((sub, start) => sub - start);
        alert(`Вычитание: ${arr.join(' - ')} = ${result}`);
        break;
    case '*':
        result = arr.reduce((mult, start) => mult * start);
        alert(`Умножение: ${arr.join(' * ')} = ${result}`);
        break;
    case '/':
        result = arr.reduce((div, start) => div / start);
        alert(`Деление: ${arr.join(' / ')} = ${result}`);
        break;
};