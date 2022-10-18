﻿class Pizza {
  // constructor
  constructor (toppings = [], customer) {
    // computer instance property
    this.toppings = toppings;
    this.customer = customer;
  }

  // static property
  static extraToppings = ['pepperoni', 'cheese'];

  //  static method
  static sayThanyou () {
    console.log('ThankYou!!!')
  }

  // factory method
  static createNewPizza () {
      return new Pizza();
  }

  eat () {
      console.log(this.toppings);
      console.log(this.slices);
  }

  // instance property
    slices = 10;
  // Getter Property
  get length () {
      return this.slices;
  }
  set length (value) {
      this.slices = value;
  }
  // Private Fields can only be modified inside a class
  #bankBalance = 10000;
  get balance () {
      return this.#bankBalance;
  }
  set balance (value) {
      this.#bankBalance = value;
  }

  // instance method
  getCokeOrPepsi = () => {
      console.log('Coke');
      console.log('Pepsi');
      console.log(this);
  }
}

// const myPizza = new Pizza();
const myPizza = new Pizza(['onions'], 'Venkat');
console.log(myPizza);
myPizza.eat();
myPizza.toppings = ['Carrot', 'Almonds', 'Lobster'];
console.log(myPizza.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ['onions', 'Lettuce'];
console.log(Pizza.extraToppings);
Pizza.sayThanyou();
console.log(myPizza.length);
myPizza.length = 8;
console.log(myPizza.length);
myPizza.slices = 12;
console.log(myPizza.length);
myPizza.getCokeOrPepsi();
console.log(myPizza.balance);
myPizza.balance = 5000;
console.log(myPizza.balance); // 5000
// myPizza.#bankBalance = 2000;
myPizza.bankBalance = 2000; // will add a dynamic prop to myPizza
console.log(myPizza.balance); // No change in balance

 