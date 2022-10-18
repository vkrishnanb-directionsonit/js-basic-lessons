1. Open Chrome
2. Open Developer Tools
3. Select Console
4. Try arithmetic operations (1+1 etc..)
5. Try DOM function in the console:
    document.querySelectorAll('p') - select all "paragraph" elements from the page
6. Try console.log('Hello')
    **undefined**
    Every time console.log is executed from the console itself, a line saying undefined is appended to the output log.
    When you run any void function (like console.log) from the console, it also prints out info about the return value, undefined in this case.

    - JavaScript is designed as a dynamic language which means that the return type (string, void, boolean …) of a function's return value is not pre-defined.
    - If a function does not use a return statement or an empty return statement with no value, JavaScript automatically returns undefined. 
    - That means that **in JavaScript every function returns something, at least undefined.**

    So the function console.log() in Chrome console either uses non or an empty return statement, so that the return value of this function is undefined. 
    This function return value also  gets displayed in the console.

    If you're running console.log() from a JS file, this undefined line will not be appended.
---
This undefined also appears when the following line is written in the console:  
```code
    var name;
	console.log(name);
	name = "venkat"; 
	console.log(name);
```
The var statement declares a function-scoped or globally-scoped variable.
    
Variables declared using var are created before any code is executed in a process known as **hoisting**.  
Their initial value is **undefined**.
