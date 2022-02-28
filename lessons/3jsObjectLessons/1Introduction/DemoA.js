var empty = {}; // An object with no properties

var point = { x: 10, y: 50 }; // Two properties

var point2 = { x: point.x, y: point.y + 1 }; // More complex values

var book = {
    "main title": "JavaScript", // Property names include spaces,
    'sub-title': "The Definitive Guide", // and hyphens, so use string literals
    "for": "all audiences", // for is a reserved word, so quote
    author: { // The value of this property is
            firstname: "Donald", // itself an object. Note that
            surname: "Duck" // these property names are unquoted.
    }
};
