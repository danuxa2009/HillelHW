'use strict'


function plus() {
    let num1, num2, result;
    num1 = prompt('Суммирование: \nВведите первое число');
    num1 = parseInt(num1);

    num2 = prompt('Введите второе число');
    num2 = parseInt(num2);

    result = num1 + num2;
    alert(`${num1} + ${num2}` + ' = ' + result);
}


function minus() {
    let num1, num2, result;
    num1 = prompt('Вычитание: \nВведите первое число');
    num1 = parseInt(num1);

    num2 = prompt('Введите второе число');
    num2 = parseInt(num2);

    result = num1 - num2;
    alert(`${num1} - ${num2}` + ' = ' + result);
}


function multiplication() {
    let num1, num2, result;
    num1 = prompt('Умножение: \nВведите первое число');
    num1 = parseInt(num1);

    num2 = prompt('Введите второе число');
    num2 = parseInt(num2);

    result = num1 * num2;
    alert(`${num1} * ${num2}` + ' = ' + result);
}


function division() {
    let num1, num2, result;
    num1 = prompt('Деление: \nВведите первое число');
    num1 = parseInt(num1);

    num2 = prompt('Введите второе число');
    num2 = parseInt(num2);

    result = num1 / num2;
    alert(`${num1} / ${num2}` + ' = ' + result);
}

plus();
minus()
multiplication();
division();