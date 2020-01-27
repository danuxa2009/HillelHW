"use strict";

const total = [];

class Hamburger {
  constructor(options) {
    this.cost = options.cost;
    this.calories = options.calories;
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
    total.push(additives);
  }

  calculateCalories() {
    let tot = total.map;
  }
}
