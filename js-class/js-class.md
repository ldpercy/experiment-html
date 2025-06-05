JavaScript Classes
==================



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

https://stackoverflow.com/questions/51674947/javascript-classes-and-this


### Private properties

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties

> Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class.





Scope/namespace of Class
========================

When classes are written plainly like this:

```js
	class Foo {
		...
	}
```

It's not at all apparent what scope/namespace 'Foo' ends up in.
It's not in window, so you can't write `window['Foo']`.

This makes dynamically instantiating a class written this way pretty hard.
The only truly dynamic way I can see for now is using eval() like so:

```js
 	className       = 'Foo';
	dynamicClass    = eval(className);
	dynamicInstance = new dynamicClass();
```

But eval has its own problems.

### Manual scoping

When dynamically instantiating classes is needed manual scoping/namespacing of classes might be a better option:

```js
	namespace.Foo = class {
		...
	}
```





