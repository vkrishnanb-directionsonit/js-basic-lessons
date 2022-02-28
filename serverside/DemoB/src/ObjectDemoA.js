function classof(o) {
    if (o === null) console.log("Null");//return "Null";
    else if (o === undefined) console.log("Undefined");//return "Undefined";
   
    else console.log(Object.prototype.toString.call(o).slice(8,-1));// console.log(typeof(o));
    
}
/*
console.log(classof(null)); // => "Null"
console.log(classof(1)); // => "Number"
console.log(classof("")); // => "String"
console.log(classof(false)) // => "Boolean"
console.log(classof({})) // => "Object"
console.log(classof([])) // => "Array"
console.log(classof(/./)) // => "Regexp"
console.log(classof(new Date())) // => "Date"
//console.log(classof(window)) // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
console.log(classof(new f())); // => "Object"
*/
classof(null) // => "Null"
classof(1) // => "Number"
classof("") // => "String"
classof(false) // => "Boolean"
classof({}) // => "Object"
classof([]) // => "Array"
classof(/./) // => "Regexp"
classof(new Date()) // => "Date"
classof(window);
function f() {}; // Define a custom constructor
classof(new f()); // => "Object"