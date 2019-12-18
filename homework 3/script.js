'use strict'

let action, num1, num2;


do {
    action = prompt('Выбирите действие +, -, /, *');
} while ((action !== '+') && (action !== '*') && (action !== '-') && (action !== '/'));


while (isNaN(num1)) {
    num1 = +prompt('Введите первый аргумент');
}

while (isNaN(num2)) {
    num2 = +prompt('Введите второй аргумент');
}

switch (action) {
    case '-':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '+':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '*':
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}