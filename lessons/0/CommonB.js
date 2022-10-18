/* eslint-disable semi */
/* eslint no-use-before-define: "error" */
/* eslint-env es6 */
/* run in terminal
  >npx eslint CommonB.js
  */
function addNumbers (a, b) {
  return a + b;
}
// Use back tick for interpolation
console.log(`2 + 3 => ${addNumbers(2, 3)}`);
/* Disallow Early Use (no-use-before-define) */
console.log(`20 * 3 => ${multiplyNumbers(20, 3)}`); // 'multiplyNumbers' was used before it was defined.
function multiplyNumbers (a, b) {
  return a * b;
}
console.log(`2 * 3 => ${multiplyNumbers(2, 3)}`);
