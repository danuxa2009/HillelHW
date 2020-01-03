'use strict'
const operandAElement = document.querySelector('#operandA');
const operandBElement = document.querySelector('#operandB');
const resultElement = document.querySelector('#result');
document.getElementById('sumBtn').addEventListener('click', onSumBtnClick);

function onSumBtnClick() {
    calculate();
    clear();
    focus();
}


function calculate() {
    const operands = getOperands(); // {a: num, b:num}

    const result = getSum(operands.a, operands.b);

    showResult(operands, result);
}

function getOperands() {
    return {
        a: +operandAElement.value,
        b: +operandBElement.value
    };
}

function getSum(a, b) {
    return a + b;
}

function showResult(operands, result) {
    resultElement.innerHTML = `${operands.a}+ ${operands.b}= ${result}`;

}

function calculateSum() {
    const operandA = +operandAElement.value;
    const operandB = +operandBElement.value;


    const result = operandA + operandB;



    console.log('calculating', operandA, operandB, result);
}



function clear() {
    operandAElement.value = '';
    operandBElement.value = '';
}

function focus() {
    document.querySelector('#operandA').focus();
}