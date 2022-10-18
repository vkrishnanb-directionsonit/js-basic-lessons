/* eslint-disable semi */

function Car () {
  let milesDriven = 0;
  let speed = 0;
  // In this case, we instead use the "this" keyword,
  // which refers to CarModule
  this.accelerate = (velocity, distance) => {
    speed += velocity;
    milesDriven += distance;
  }
  this.getMilesDriven = () => milesDriven;
  this.getSpeed = () => speed;
}

const testCarModule = new Car();
testCarModule.speed = 100; // adds a new field to the object
testCarModule.milesDriven = 10; // adds a new field to the object
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());
testCarModule.accelerate(4, 10);
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());
// ------------

class Ecar {
  constructor() {
    let milesDriven = 0;
    let speed = 0;

    this.accelerate = (velocity, distance) => {
      speed += velocity;
      milesDriven += distance;
    }

    this.getMilesDriven = () => milesDriven;
    this.getSpeed = () => speed;
  }
}

const testEcarModule = new Ecar();
testEcarModule.speed = 100; // adds a new field to the object
testEcarModule.milesDriven = 10; // adds a new field to the object
console.log('Miles: ' + testEcarModule.getMilesDriven());
console.log('Speed: ' + testEcarModule.getSpeed());
testEcarModule.accelerate(5, 20);
console.log('Miles: ' + testEcarModule.getMilesDriven());
console.log('Speed: ' + testEcarModule.getSpeed());
// ---------------------------------

class UserData {
  name = '';
  #type = 'internal';

  constructor ({ name }) {
    this.name = name;
  }

  setType (type) {
    this.#type = type;
    console.log('#type set: ', this.#type);
  }
  getType () {
    return this.#type;
  }
}

const student1 = new UserData({ name: 'Neo' });
student1.setType('secret programmer'); // assume admin is initiating this function!
// console.log("type: ", student1.#type);
// cannot access this will cause error
// SyntaxError: Undefined private field #type: must be declared in an enclosing class
console.log(student1.getType());
