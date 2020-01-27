'use strict'

function Car(color) {
    this.color = color;

    this.go = function() {
        console.log(`My ${this.color} car is going`)
    };
}


const myCar = new Car('grey');

console.log(myCar);



function BMW(color) {
    this.color = color;
}


const myBMW