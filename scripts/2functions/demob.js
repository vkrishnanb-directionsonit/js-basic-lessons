const maxvalue = Math.max(10, 12); 
console.log(maxvalue);
const minvalue = Math.min(10, 12); 
console.log(minvalue);

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
