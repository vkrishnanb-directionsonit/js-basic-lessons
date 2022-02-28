// String -  used for holding text
console.log('It Works');
/* eslint-disable  */ 
// does not convert double quote to single quote

//  3 ways to create strings Variables 
/*
    1.  using single quotes:
    2.  using double quotes:
    3.  using back ticks:
*/
const my_name = 'NamefieldEmpty'; // Single quote
const middle = "Gabbbar"; 
const last = `Singh`; // back tick

// const sentence1 = 'shes's so cool'; // unexpected identifier
const sentence1 = 'shes\'s so cool'; // single quote
console.log(sentence1); // she's so cool
const sentence3 = "shes's so cool";
const sentence = "shes's so \"cool\"";
console.log(sentence); // she's so "cool"

// with back ticks
const sentence2 = `shes's so "cool"`;
const sentence4 = `shes\`s so "cool"`; 

// multi line String using single quote doesn't work
/*
 const song1 = 'Ohhh
 
 ya
 
 I like 
 pizza';
*/

// include escape sequence at the end of each line.
// No space after the escape sequence, 
// but the content will still print in single line

const song1 = 'Ohhh \
\
ya \
\
I like \
pizza';

// back ticks
// for multi line String use back tick 
const song = `Ohhh

ya

I like
pizza with back tick`;

// concat
console.log(1+1); // 2
console.log('1'+'1'); // 11
console.log(1+'1'); // 11

const hello3 = 'hello my name is ' + my_name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + my_name;
hello2 = hello2 + ' Nice to meet you';

// variable interpolation : putting a variable in a string sentence
// back ticks
const hello = `hello my name is ${my_name}. Nice to meet you. I am ${1 + 100} years old`;
// Js does not remember what quote was used in the code 
// All quotes are converted into double quotes

const html = `
  <div>
    <h2>${my_name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;
// end of String
