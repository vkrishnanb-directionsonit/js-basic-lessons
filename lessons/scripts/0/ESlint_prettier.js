/* eslint-disable quotes */
/*
install eslint
     >npm install --global eslint
Next, install the ESLint extension for VSCode:
        Search the Marketplace for ‘eslint’ --Dirk Baeumer  and install the extension.
        Reload VSCode and watch the linter warnings appear in the js file
Prettier:
    >npm install --global prettier
install an extension for VSCode to make it work in the editor.
    Install Prettier — Code formatter from the VSCode extension marketplace:

create package.json
    >npm init
then
    >npm init @eslint/config

Open File>Preferences>Settings> prettier > enable Single Quote for prettier

*/
// Auto formatting of code
//  const     q     =       document.querySelector(    'p'     )   ;
const p = document.querySelector('p')
// console.log     (      'im in another file'      );
console.log("im in another file")

/*
 *  Using a variable without declaring the variable
 */
// town = "chennai"
// console.log(town);

const city = "Chennai"
console.log(city)
const age = 100

// var city = 'Chennai';
// console.log(city);
// var age = 100;
// console.log(p); // eslint no-unused-vars
// // console.log(p, age);
