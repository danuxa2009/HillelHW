"use strict";

class Hamburger {
  constructor(options) {
    this.cost = [options.cost];
    this.calories = [options.calories];
  }
  static SIZE_SMALL = {
    cost: 50,
    calories: 20
  };
  static SIZE_MEDIUM = {
    cost: 75,
    calories: 30
  };
  static SIZE_LARGE = {
    cost: 100,
    calories: 40
  };
  static TOPPING_MAYO = {
    cost: 20,
    calories: 5
  };
  static TOPPING_CHEESE = {
    cost: 10,
    calories: 20
  };
  static TOPPING_CALAT = {
    cost: 20,
    calories: 5
  };
  static TOPPING_POTATO = {
    cost: 15,
    calories: 10
  };
  static TOPPING_SAUSE = {
    cost: 15,
    calories: 0
  };
  add(additives) {
    this.cost.push(additives.cost);
    this.calories.push(additives.calories);
  }

  calculateCalories() {
    console.log("Кол-во калорий: " + this.calories.reduce((acc, el) => acc + el, 0));
  }
  calculateCost() {
    console.log("Цена: " + this.cost.reduce((acc, el) => acc + el, 0));
  }
}
