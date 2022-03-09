/* eslint-disable new-cap */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-array-constructor */
/* eslint-disable semi */
/* eslint-disable no-new-object */
/* eslint-disable no-unused-vars */
const o = new Object(); // Create an empty object: same as {}.
const a = new Array(); // Create an empty array: same as [].
const d = new Date(); // Create a Date object representing the current time
const r = new RegExp('js'); // Create a RegExp object for pattern matching.
const f1 = function () {
  document.writeln('The Cow Jumped over the MOON');
};

// -----------------
const o1 = Object.create({ x: 100, y: 200 });
// console.log('x= ' + o1.x + ' y=' + o1.y);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

const o4 = { x: "don't change this value" };
// console.log(o4.x);

// inherit() returns a newly created object that inherits properties from
// the prototype object p.
// It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit (p) {
  if (p == null) throw TypeError(); // p must be a non-null object

  if (Object.create) {
    // If Object.create() is defined...
    return Object.create(p); // then just use it.
  }

  const t = typeof p; // Otherwise do some more type checking
  // console.log('typeof p=' + t);
  if (t !== 'object' && t !== 'function') throw TypeError();

  function person () {} // Define a dummy constructor function.
  person.prototype = p; // Set its prototype property to p.
  return new person(); // Use f() to create an "heir" of p.
}
