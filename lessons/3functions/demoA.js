function add () {
  const x = 100
  const y = 20
  //    console.log(x+y);
  // document.writeln('Result '+ (x+y) );
  const resultElement = document.getElementById('result')
  resultElement.innerText = 'Result =' + (x + y)
}
//add();

function sum () {
  const x = parseInt(document.getElementById('firsttxt').value)
  const y = parseInt(document.getElementById('secondtxt').value)
  const resultElement = document.getElementById('result')
  resultElement.innerText = 'Result =' + (x + y)
}
//sum();

function addition (x, y) {
  const resultElement = document.getElementById('result')
  resultElement.innerText = 'Result =' + (parseInt(x) + parseInt(y))
}
//addition(100, 20);

function printuptohundred () {
  let i = 0
  for (i = 0; i < 100; i++) {
    console.log(i)
  }
}
//printuptohundred()

function printnosinreverse () {
  for (let index = 100; index > 10; index--) {
    console.log(index)
  }
}
//printnosinreverse();

function printevennos () {
  for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
      console.log(index)
    }
  }
}
//printevennos();

function printdigits (x) {
  // let x = 945632672;
  let num = x
  let reminder = 0
  while (num > 0) {
    reminder = parseInt(num % 10)
   // if (reminder % 2 != 0) {
      console.log(reminder)
   // }
    num = parseInt(num / 10)
  }
}
//printdigits(95874632180);

/**
 *  Now print numbers from 1 to 100 But
 *  for multiples of 3 print Fizz
 *   for multiples of 5 print Bizz
 *  for multiples of 15 print Mizz
 */
function fizzBizz() {
  for(let count=1;count<100;count++) {
    if(count %15 ===0){
      console.log(`MIZZ....`)
    }
    else if(count%5===0){
      console.log(`BIZZ`)
    } 
    else if(count%3===0){
      console.log(`FIZZ`)
    }
    else{
      console.log(count)
    }
  } 
}
fizzBizz();