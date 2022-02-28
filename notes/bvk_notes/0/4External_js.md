JS Lessons
----------
Pagec.html: external js files

- <script> tags must not be empty elements. must have its own closing element
- Also, we can run JS in another file using `script` tag with `src` attribute:
     <script src="./sampleb.js" ></script>

- Illegal: will be ignored
        <script src="./sampleb.js" />

- and in the following code the console.log() will be ignored
    <script src="./sampleb.js">
        console.log('I will not be executed')
    </script>

---
# Disallow Early Use (no-use-before-define)

In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope, so it's possible to use identifiers before their formal declarations in code. This can be confusing and some believe it is best to always declare variables and functions before using them.

In ES6, block-level bindings (let and const) introduce a "temporal dead zone" where a ReferenceError will be thrown with any attempt to access the variable before its declaration.

