/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function createCopy (o, p) {
	for (var prop in p) { // For all props in p.
		o[prop] = p[prop] // Add the property to o.
	}
	return o
}
/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is left alone.
* This function does not handle getters and setters or copy attributes.
*/
function merge (o, p) {
    for (var prop in p) { // For all props in p.
        if (prop in o) continue
        o[prop] = p[prop] // Add the property to o.
	}
	return o
}
/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function removeUnCommonItem (o, p) {
	for (var prop in o) { // For all props in o
		if (!(prop in p)) delete o[prop] // Delete if not in p
	}
	return o
}
/*
* For each property of p, delete the property with the same name from o.
* Return o.
*/
function removeCommonItem (o, p) {
	for (var prop in p) { // For all props in p
		 if (o.hasOwnProperty(prop)) {
		delete o[prop] // Delete from o (deleting a nonexistent prop is harmless)
		}
	}
	return o
}
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union (o, p) { return createCopy(createCopy({}, o), p) }
/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection (o, p) { return removeUnCommonItem(createCopy({}, o), p) }
/*
* Return an array that holds the names of the enumerable own properties of o.
*/
function keys (o) {
	if (typeof o !== 'object') throw TypeError() // Object argument required
	const result = [] // The array we will return
	for (const prop in o) { // For all enumerable properties
		if (o.hasOwnProperty(prop)) // If it is an own property
		{ result.push(prop) } // add it to the array.
	}
	return result // Return the array.
}
