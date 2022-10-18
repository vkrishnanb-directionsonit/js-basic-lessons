/* eslint-disable dot-notation */
/* eslint-disable quote-props */
/* eslint-disable semi */
const empty = {}; // An object with no properties

const point = {
    x: 10,
    y: 50
}; // Two properties
//console.log(point.x);
//console.log(point.y);

const point2 = {
    x: point.x,
    y: point.y + 1
}; // More complex values
//console.log(point2.x);
//console.log(point2.y);

const book = {
  'main title': 'JavaScript', // Property names include spaces,
  'sub-title': 'The Definitive Guide', // and hyphens, so use string literals
  'for': 'all audiences', // for is a reserved word, so quote
  author: { // The value of this property is
    firstname: 'Donald', // itself an object. Note that
    surname: 'Duck' // these property names are unquoted.
  }
};
//console.log(book['main title']);
//console.log(book['sub-title']);
//console.log(book['for']);
//console.log(book.author.firstname);
//console.log(book.author.surname);
///*console.log(book.sub-title);// ERROR */
//console.log(book.for);
//console.log(empty);
