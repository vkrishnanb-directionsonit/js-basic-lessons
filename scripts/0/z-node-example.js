/* eslint-disable no-var */
/* eslint-disable semi */
console.log('Hi Node!!!');
/* Variable scope */
var x = 100;
function callme () {
  const y = x * 2;
  if (x < 500) {
    console.log('x < 500');
    const z = x + y;
    console.log(`z : ${z}`);
    x = x * 200;
  }
  if (y < 500) {
    console.log('y < 500');
    let v1 = 0;
    v1 = x + y + 500;
    // v1 = z + y;
    console.log(`V1: ${v1} `);
  }
}

console.log(callme());
