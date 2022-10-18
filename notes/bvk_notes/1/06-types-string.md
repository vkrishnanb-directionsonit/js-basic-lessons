### String

- used for holding text
    
- 3 ways to create strings:
    
    1.  using single quotes:
        ```javascript
            const first = 'Suresh';
        ```
    2.  using double quotes:
         ```javascript
            const middle = "Ranjan";
        ```
    -   single quotes and double quotes are the same thing.

    3.  using backticks:
        
        ```javascript
         	const last = `Mohanty`;        
        ```
        used for: `"she's cool"`
    
        or escaping: `'she\'s cool'`
    
-   backticks:
    
    ```javascript
      const sentence = `she's so "cool"`;
      console.log(sentence); // she's so "cool"
    
    ```
    
-   Multi-line string:
    
    ```javascript
      const food1 = 'Oh \
      I like \
      pizza';
      
      console.log(food1); // Oh I like pizza
    
    ```
    
    ```javascript
      const food2 = `Oh
      I like
      pizza`;
      
      console.log(food2); 
      /*
      Oh
      I like
      pizza
      */
    
    ```
    
    2nd one using backticks is mostly used.
    
-   **String concatenation and interpolation**
    
    -   '+' is used for **concatenation**. It is also used for adding 2 nos.
    -   **Concatenation**: when 2 or more strings combined to one
    -   **Interpolation**: when you put a variable inside a string
    -   Example 1:
    
    `const name = 'Suresh';`
    
    `const hello = 'Hello my name is ' + name + '. Nice to meet you.'`
    
    _(can use double or single quotes)_
    
    -   Example 2:
        
    ` 1+1 // 2`

	`'1'+'1' // 11 `

	`1 + '1' // 11`
        
    -   Example 3:

    ```javascript        
        const name = 'Suresh';  
        const hello = `Hello my name is ${name}. Nice to meet you. I am ${100+1} years old.`;  
        console.log(hello); // Hello my name is Suresh. Nice to meet you. I am 101 years old.

        ```
-   Backticks also used for _tagged template literals_.
        
-   Backticks are helpful for creating HTML:  
    ```javascript  
        const html = `
        <div>
            <h2>Hey everyone! I am ${name}.</h2>
        </div>
        `;
    ```