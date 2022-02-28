//In addition to a name and value, 
//properties have attributes that specify whether they can be
// written, enumerated, and configured.

// For authors of API libraries
//• It allows them to add methods to prototype objects and 
//    make them nonenumerable, like built -in methods.
//• It allows them to “lock down” their objects, defining properties that cannot be
//    changed or deleted.

//To set the attributes of a property,
// or to create a new property with the specified attributes,
// call "Object.defineProperty()",
// passing the object to be modified, the name of
// the property to be created or altered,
// and the property descriptor object:

var o = {}; // Start with no properties at all
// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});


// If you want to create or modify more than one property at a time, 
// use Object.define Properties().
// The first argument is the object that is to be modified.
// The second argument is an object that maps the names of the properties 
// to be created or modified to the property descriptors for those properties.

    var p = Object.defineProperties({}, {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
        y: { value: 1, writable: true, enumerable: true, configurable: true },
        r: {
            get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
            enumerable: true,
            configurable: true
        }
});

///
// extend() function in "DemoD.js" copied properties from one object to
// another.
// That function simply copied the name and value of the properties and ignored
// their attributes.
// Furthermore, it did not copy the getter and setter methods of accessor
// properties, but simply converted them into static data properties.
// The below Example shows
// a new version of extend() that uses "Object.getOwnPropertyDescriptor()" and
// "Object.defineProperty()" to copy all property attributes.
// Rather than being written as a function, 
// this version is defined as a new Object method and is added as a nonenumerable
// property to Object.prototype.
/*
* Add a nonenumerable extend() method to Object.prototype.
* This method extends the object on which it is called by copying properties
* from the object passed as its argument. All property attributes are
* copied, not just the property value. All own properties (even non-
* enumerable ones) of the argument object are copied unless a property
* with the same name already exists in the target object.
*/
Object.defineProperty(Object.prototype,
    "extend", // Define Object.prototype.extend
    {
        writable: true,
        enumerable: false, // Make it nonenumerable
        configurable: true,
        value: function (o) { // Its value is this function
            // Get all own props, even nonenumerable ones
            var names = Object.getOwnPropertyNames(o);
            // Loop through them
            for (var i = 0; i < names.length; i++) {
                // Skip props already in this object
                if (names[i] in this) continue;
                // Get property description from o
                var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                // Use it to create property on this
                Object.defineProperty(this, names[i], desc);
            }
        }
    });
