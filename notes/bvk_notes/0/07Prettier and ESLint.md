## Code Quality Tooling

---

# Prettier and ESLint
---
- **ESLint**: Javascript linting tool for identifying and reporting potential issues  in code. e.g. bad practices and design patterns.
    eslint.org ==> Coding standards
	no-console rule
    - Demo : https://eslint.org/demo
- **Prettier**: Formats code.
    prettier.io ==> Formatting coding

Install eslint config from https://github.com/wesbos/eslint-config-wesbos
 or 
create your own config. 
Follow the global installation steps

Install ESLint package in VScode -- ESLint --Dirk Baeumer from	
    https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Now we need to setup some VS Code settings via Code/File → Preferences → Settings. 
It's easier to enter these settings while editing the settings.json file, so click the {} icon in the top right corner:
	// These are all my auto-save configs
	"editor.formatOnSave": true,
	// turn it off for JS and JSX, we will do this via eslint
	"[javascript]": {
	  "editor.formatOnSave": false
	},
	"[javascriptreact]": {
	  "editor.formatOnSave": false
	},
	// tell the ESLint plugin to run on save
	"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
	// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
	"prettier.disableLanguages": ["javascript", "javascriptreact"],

Run eslint from terminal to check the js file
    $ npx eslint <filename.js> 
    $ npx eslint CommonB.js 