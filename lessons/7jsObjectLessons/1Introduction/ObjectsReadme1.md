---
marp: true
---

url: https://geekiam.io/how-to-use-javascript-classes/ 

---

# Object
JavaScript’s fundamental datatype is the object.
An object is an unordered collection of properties, 
each of which has a name and a value.
Property names are strings, hence objects map strings to values

---
# prototype
JavaScript object also inherits the properties of another object, known as its **“prototype.”**
The methods of an object are typically inherited properties, 
and this “prototypal inheritance” is a key feature of JavaScript

---
**dynamic—properties** can usually be added, and deleted in JavaScript objects.
Any value in JavaScript that is not a string, a number, true, false, null, or undefined is an object
And even though strings, numbers, and booleans are not objects, they behave like immutable objects

---
# Property:
A property has a name and a value
A property name may be any string, including the empty string, 
but no object may have two properties with the same name

---
# Creating Objects <!--fit-->

---
# Prototypes:
Every JavaScript object has a second JavaScript object (or null, but this is rare) associated with it.
This second object is known as a **prototype**, and the first object inherits properties from the prototype

---
So the object created by **new Object()** inherits from **Object.prototype** just as the object created by {} does. 
Similarly, the object created by **new Array()** uses **Array.prototype** as its prototype, and
The object created by **new Date()** uses **Date.prototype** as its prototype
**Date.prototype** inherits properties from **Object.prototype**, 
So a Date object created by new Date() inherits properties from both Date.prototype, and Object.prototype. 

This linked series of prototype objects is known as a **prototype chain**.

---
# Object.create():
Object.create() is a static function, 
Not a method invoked on individual objects. 
To use it, simply pass the desired prototype object:

**var o1 = Object.create({x:1, y:2});** // o1 has properties x and y.

---
**var o2 = Object.create(null); // o2 inherits no props or methods.** 
You can pass **null** to create a new object that does not have a prototype, 
but if you do this, the newly created object will not inherit anything, 
not even basic methods like toString() 
it won’t work with the + operator either

---
# Associative array:
The following two JavaScript expressions have the same value:
	object.property
	object["property"]

The second syntax, using square brackets and a string, looks like array access, 
but to an array indexed by strings rather than by numbers.
This kind of array is known as an **associative array** (or hash or map or dictionary).
JavaScript objects are associative arrays

---
# delete:
delete does not remove properties that have a configurable attribute of false.
Though it will remove configurable properties of non extensible objects.
Certain properties of built -in objects are non-configurable, 
as are properties of the global object created by variable declaration and function declaration
In strict mode, attempting to delete a non-configurable property causes a TypeError.
In non - strict mode(and in ECMAScript 3), delete simply evaluates to false in this case:

---

