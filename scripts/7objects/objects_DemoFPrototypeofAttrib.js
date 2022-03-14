//The class Attribute

//An object’s class attribute is a string that provides information about the type of the
//object.Neither ECMAScript 3 nor ECMAScript 5 provide any way to set this attribute,
//    and there is only an indirect technique for querying it.The default toString() 
//   method
//   (inherited from Object.prototype) returns a string of the form:

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}
//So to obtain the class of an object, you can invoke this toString() method on it, and
//extract the eighth through the second - to - last characters of the returned string.The
//tricky part is that many objects inherit other, more useful toString() methods, and to
//invoke the correct version of toString(), we must do so indirectly, using the
//Function.call() method

