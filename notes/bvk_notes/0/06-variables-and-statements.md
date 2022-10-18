## Variables and statements

Semicolons used to end a statement.  
You can choose to not to write them (because there is ASI: Automatic Semicolon Insertion in Javascript).

---
### Declaring a variable:

**var, let, const**

`var first_v1 = 'John';`

`let first_v2 = 'John';`

`const first_v3 = 'John';`

(here value is 'John')

---
-   `let` and `const` were introduced in ES6 (newer-since 2016)    
-   `var` and `let` can be updated but not `const`.
    
    ```javascript  
      var x = 'hey';  
	  console.log(x);
      x = 'hi';  
      console.log(x);
      let cool = true; 
	  console.log(cool);
      cool = false;  
      console.log(cool);
      const age = 10;  
	  console.log(age);
      age = 11; // wrong: throws error 
    ```
---
    
-   In **strict mode**, define a variable first before assigning a value to it.
    
    ```javascript  
      pet = 'snickers'; // bad coding, don't do this
      console.log(pet); // snickers (no error) 
      
      'use strict';
      pet = 'snickers'; // error: pet is not defined
    ```
-   If we write `var pet; console.log(pet);` Here pet is not defined.

---
    
-   **Scoping:**
    -   **var** : _function scoped_ (only available inside parent functions)
    -   **let** and **const** : _block scoped_ (available inside a block denoted by \{ } )
        
-   **Opinion (what to use):** 
    - Use `const` by default; 
    - if the value of the variable needs to change then use `let`.  
    
-   **AVOID `var` as far as possible**  
    - `let` was introduced from ES6 - since 2016  
    - js has been around since 1995  
    
-   **Variable naming conventions:**  
    -   Should not start with capital unless they are a class.
    -   Must start with **a-z** or **_** or **$**.
    -   If a variable is multi-word, you can use:
        -   Camel-case:  `let iLovePizza = true;`
        -   Upper Camel case (in case of classes):  `ILovePizza`
        -   Snake case: `let i_love_pizza = true;`
    - _ (underscore)  is used by the helper lib called `lodash` (https://lodash.com/)
        - **Lodash**: A modern JavaScript utility library delivering modularity, performance & extras.
    - $ is used by `jQuery`
    
-   **Avoid naming variables as just `_` or `$`**
---
# Disallow Early Use (no-use-before-define)

In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope,  
so it's possible to use identifiers before their formal declarations in code.  
This can be confusing and some believe it is best to always declare  
 variables and functions before using them.  

In ES6, block-level bindings (let and const) introduce a   
"temporal dead zone" where a `ReferenceError` will be thrown   
with any attempt to access the variable before its declaration.  


