/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable semi */
/* *
const maxvalue = Math.max(10, 12)
console.log(maxvalue)
const minvalue = Math.min(10, 12)
console.log(minvalue)

// function add (...value: number[]) {
//     for(var item in value) {
//       console.log(item)
//     }
// }
// Default values:

function yell (name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`
}

let greetings = yell('Venkat') // HEY VENKAT
console.log(greetings)
greetings = yell() // HEY SILLY GOOSE
console.log(greetings)

// Above, if we don't pass any argument to yell function, then it takes the default value in function definition,
// here Silly Goose, else it takes whatever we pass as argument.

// - **Important gotcha:**

function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!!')
  console.log('billAmount: ' + billAmount + ' taxRate: ' + taxRate + ' tipRate: ' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * tipRate
  return total
}
calculateBill(100)
calculateBill(100, 0.66)

// Suppose above, we want to pass the tipRate but not the taxRate and want taxRate to be default,
// then the only thing we can do is:

calculateBill(100, undefined, 0.66) // here the taxRate will default to 0.13 as
// we have passed undefined to it and the tipRate will be 0.66 as passed
*/
// -----------------------
// const doc = doctorize('venkat')
// console.log(doc)
// function doctorize (firstName) {
//   return `Dr. ${firstName}`
// }

// Anon Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

/* Function Expression */

// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`
// }
// const doc = doctorize('venkat')
// console.log(doc)
// ----------------------
/* Arrow Functions */
// const inchToCM = inches => {
//   console.log(inches);
//   return inches * 2.54;
// };

// const resultcm = inchToCM(10)
// console.log(resultcm)

// const funcA = () => {
//   console.log('Hi');
// };
// funcA();
// const add = (a, b = 3) => a + b;
// const inTocm = (inches) => inches * 2.54;

// console.log(add(100));
// console.log(inTocm(25));

// const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
// const person = makeAPerson('venkat', 'krishnan');
// console.log(person);

/* **IIFE: Immediately Invoked Function Expression** */
// (function(age) {
//   console.log(`You are cool, and your age is ${age}`);
//   return `You are cool, and your age is ${age}`;
// })(10);

// ----------------------
const employee = {
  name: 'Venkat Krishnan',
  // method
  sayHi: function () {
	  console.log(`Hi!!! ${this.name}`);
	  return `Hi ${this.name}`;
  },
  print: () => {
    console.log('Hello employee');
  },
  yellHi () {
    console.log(`HI ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
