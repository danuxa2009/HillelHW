'use strict';

const calculator = createCalculator(10);



function createCalculator(n) {
  return {
    add: value => (value + n),
    sub: value => (n - value),
    set: value => (n = value),
    divide: value => (n / value),
    mult: value => (n * value)

  }
}


console.log(calculator.add(45));
console.log(calculator.sub(45));
console.log(calculator.divide(5));
console.log(calculator.mult(5));
console.log(calculator.set(100));
console.log(calculator.mult(5));