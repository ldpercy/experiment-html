jsconfig
========

* https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
* https://code.visualstudio.com/docs/languages/jsconfig
* https://junkangworld.com/blog/unlock-project-wide-jsdoc-in-vscode-the-1-fix-for-2025




I've started using jsconfig & JSDoc for typechecking. Introducing the config file to a directory adds red squigglies to js files, *and* anything implicated such as imported modules.


> [!IMPORTANT]
> Make sure `compilerOptions` in jsconfig are set to something modern or you can get really confusing and outdated errors

Set these in the project root `jsconfig.json` file - keep them up to date, or you can get really frustratingly annoying errors:

```js
{
	"compilerOptions": {
		"checkJs": true,
		"target": "es2024", // es6, es2024
		"module": "es2022"
	}
}
```


Compiler Options
----------------


| Option 					| Description	|
|-----------				|---------------|
| noLib 					| Do not include the default library file (lib.d.ts) |
| checkJs 					| Enable type checking on JavaScript files.
| target 					| Specifies which default library (lib.d.ts) to use. The values are "ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ES2022", "ES2023", "ESNext".
| module 					| Specifies the module system, when generating module code. The values are "AMD", "CommonJS", "ES2015", "ES2020", "ES2022", "ES6", "Node16", "NodeNext", "ESNext", "None", "System", "UMD".
| moduleResolution 				| Specifies how modules are resolved for imports. The values are "Node", "Classic", "Node16", "NodeNext", "Bundler".|
| experimentalDecorators 		| Enables experimental support for proposed ES decorators. |
| allowSyntheticDefaultImports 	| Allow default imports from modules with no default export. This does not affect code emit, just type checking. |
| baseUrl 						| Base directory to resolve non-relative module names. |
| paths 						| Specify path mapping to be computed relative to baseUrl option.|



### lib.d.ts
eg:
	/snap/codium/495/usr/share/codium/resources/app/extensions/node_modules/typescript/lib/lib.d.ts



"strict": true
--------------

>"strict": true: This is highly recommended. It enables a suite of strict type-checking rules, including noImplicitAny, which forces you to be explicit about types instead of letting them default to any. It will make your code significantly more robust.

== Hard Mode

https://www.typescriptlang.org/tsconfig/#strict


I should probably try turning this on for html-common.