checkJs
=======

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


