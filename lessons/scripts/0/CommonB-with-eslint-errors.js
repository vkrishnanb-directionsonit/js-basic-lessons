/* eslint-disable semi */
/* run in terminal
  >npx eslint CommonB.js
  */
function addNumbers(a, b) {
  return a + b;
}

console.log(`2 + 3 => ${addNumbers(2, 3)}`);

console.log(`20 * 3 => ${multiplyNumbers(20, 3)}`); // 'multiplyNumbers' was used before it was defined.
function multiplyNumbers(a, b) {
  return a * b;
}
console.log(`2 * 3 => ${multiplyNumbers(2, 3)}`);
