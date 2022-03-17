/* eslint-disable no-prototype-builtins */
// The class Attribute

// An object’s class attribute is a string that provides information about the type of the
// object.Neither ECMAScript 3 nor ECMAScript 5 provide any way to set this attribute,
//    and there is only an indirect technique for querying it.The default toString() method
//   (inherited from Object.prototype) returns a string of the form:

function classOf (o) {
  if (o === null) return 'Null'
  if (o === undefined) return 'Undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}
const box = { x: 100, y: 200 }
console.log(classOf(box))
// So to obtain the class of an object, you can invoke this toString() method on it, and
// extract the eighth through the second - to - last characters of the returned string.The
// tricky part is that many objects inherit other, more useful toString() methods, and to
// invoke the correct version of toString(), we must do so indirectly, using the
// Function.call() method

// An object’s prototype attribute specifies the object
// from which it inherits properties.
let p = { x: 1 } // Define a prototype object.
let o = Object.create(p) // Create an object with that prototype.
console.log(p.isPrototypeOf(o)) // => true: o inherits from p
console.log(Object.prototype.isPrototypeOf(o)) // => true: p inherits from Object.prototype
console.log(classOf(null)) // => "Null"
console.log(classOf(1)) // => "Number"
console.log(classOf('')) // => "String"
console.log(classOf(false)) // => "Boolean"
console.log(Object.prototype.toString.call(false)) // => "Boolean"
console.log(classOf({}))// => "Object"
console.log(classOf([])) // => "Array"
console.log(classOf(/./)) // => "Regexp"
console.log(classOf(new Date())) // => "Date"
console.log(classOf(window)) // => "Window" (a client-side host object)
function f () { }; // Define a custom constructor
console.log(classOf(new f())) // => "Object"
// Serializing Objects
console.log('----Serializing-----')
o = { x: 1, y: { z: [false, null, ''] } } // Define a test object
console.log(o)
const s = JSON.stringify(o) // s is '{"x":1,"y":{"z":[false,null,""]}}'
console.log(s)
p = JSON.parse(s) // p is a deep copy of o
console.log(p)
