JSDoc
=====

https://jsdoc.app/






VSCode
------
I'm running this straight in VSCode with no other tooling, so I presume whatever is working is built-in somewhat.
Should try to find out what and how...

But for now, JSDoc is being parsed and I can apply and check types.



Type resolution
---------------

Until I can find more info, one thing I curious about is how types are resolved - do they have namespaces, belong to modules etc.

From some quick tests right now it seems like it's aware of types in the same folder, and worked when I pushed the type to a subfolder.
Over in yearclock though, didn't find the subfolder type.
Have to figure out what it's doing.





HTML Element Typing
-------------------

This produces the type error `Property 'content' does not exist on type 'HTMLElement'.ts(2339)`:
```js
	let template = document.getElementById("template0");
	let templateContent = template.content;
```

This resolves it:
```js
	/** @type {HTMLTemplateElement} */
	let template = document.querySelector("#template0");
	let templateContent = template.content;
```

Can't seem to cast `document.getElementById` in the same way.

