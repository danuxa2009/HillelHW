"use strict";
function Student(name, marks) {
  this.name = name;
  this.marks = marks;

  this.averageMark = function() {
    const sum = marks.reduce((acc, el) => acc + el, 0);
    const result = sum / marks.length;
    console.log(result);
  };

  this.maxMark = function() {
    console.log(Math.max(...marks));
  };

  this.minMark = function() {
    console.log(Math.min(...marks));
  };
}

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]), ///
  new Student("Student 2", [10, 0, 8, 0, 3, 4]),
  new Student("Student 3", [1, 2, 8, 5, 3, 7])
];
