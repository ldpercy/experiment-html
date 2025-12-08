jsconfig
========

* https://code.visualstudio.com/docs/languages/jsconfig
* https://junkangworld.com/blog/unlock-project-wide-jsdoc-in-vscode-the-1-fix-for-2025



I'm curious about the possibility of using jsdoc for some opt-in typechecking.


I've read this can be done in vscode by adding a `jsconfig.json` file:

```js
{
	"compilerOptions": {
		"checkJs": true,
	}
}
```

Introducing the config file to a directory adds red squigglies to js files, *and* anything implicated such as imported modules.




Compiler Options
----------------



| Option 	| Description	|
|-----------|---------------|
| noLib 		| Do not include the default library file (lib.d.ts)|
|target 	| Specifies which default library (lib.d.ts) to use. The values are "ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ES2022", "ES2023", "ESNext".
| module 	| Specifies the module system, when generating module code. The values are "AMD", "CommonJS", "ES2015", "ES2020", "ES2022", "ES6", "Node16", "NodeNext", "ESNext", "None", "System", "UMD".
| moduleResolution 	| Specifies how modules are resolved for imports. The values are "Node", "Classic", "Node16", "NodeNext", "Bundler".|
| checkJs 	| Enable type checking on JavaScript files.
| experimentalDecorators 	| Enables experimental support for proposed ES decorators. |
| allowSyntheticDefaultImports 	| Allow default imports from modules with no default export. This does not affect code emit, just type checking. |
| baseUrl 	| Base directory to resolve non-relative module names. |
| paths 	| Specify path mapping to be computed relative to baseUrl option.|



