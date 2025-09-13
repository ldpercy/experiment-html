JavaScript Classes
==================

Todo:
* When to use `static`
* Accessor fields - get and set
* Static initialization blocks
* experiment with private


Anatomy
-------

### Simple class

```js
class MyClass {								// declare MyClass into an anonymous namespace
// class namespace.MyClass {				// declare into a specific namespace

	// pseudo-constructor area
	// cannot have function calls in this space
	// evaluated prior to the constructor being run

	name            = 'Default ClassA name';
	desc            = 'Default ClassA desc';
	summary         = `Name: ${this.name}; Description: ${this.desc};`								 // can reference vars declared in the pseudo-constructor
	extendedSummary = `Name: ${this.name}; Description: ${this.desc}; property1: ${this.property1};` // property1 is undefined at this point

	foo = ' this is foo ';

	constructor(property1, property2) {
		this.property1 = property1;
		this.property2 = property2;
	}

	// Accessors

	// A 'get' accessor cannot have parameters. ts(1054)
	get foo() { return this.foo; }

	// A 'set' accessor must have exactly one parameter. ts(1049)
	set foo(param) { this.foo = param }

	report() {
		console.log('report:', this);
	}


}/* MyClass */
```

### Class with extends

```js
class SubClass extends MyClass {			// extending a class

	// pseudo-constructor area
	// cannot have function calls in this space
	// evaluated prior to the constructor being run

	name            = 'Default ClassA name';
	desc            = 'Default ClassA desc';
	summary         = `Name: ${this.name}; Description: ${this.desc};`								 // can reference vars declared in the pseudo-constructor
	extendedSummary = `Name: ${this.name}; Description: ${this.desc}; property1: ${this.property1};` // property1 is undefined at this point

	constructor(property1, property2) {
		super(property1, property2);
		// super call required when class extends another
		// the call must explicitly pass parameters or they will be undefined
	}

}/* SubClass */
```
You can declare a subclass with a constructor that lacks a super call, but you cannot instantiate it.
A subclass with a constructor must call super().








Private properties
------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties

> Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class.





Scope/namespace of Class
------------------------

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



Convenient ways of passing arguments to super
---------------------------------------------

See also: [javascript - destructuring](../javascript/javascript.md#destructuring)

A given set of base and derived classes will often have similar constructor arguments.
What convenient ways are there for passing arguments up the construction chain?

There will be a few different kinds of possibilities here:
* regular named constructor arguments
* constructor argument as an object with named members
* semi-anonymous args - arrays etc

And also what we want to do with them:
* set them as individual member properties on the instance - this.foo etc
* set them wholesale as a single object - eg this.param

And what, if any, special handling is needed when constructor signatures vary in derived classes.

I guess it will probably vary a bit on situation.



`toString` magic
------------------

It's probably not magic, but was definitely a headscratcher for me initially as I wasn't expecting it.

If a `toString` method exists, it will be implicitly called under some circumstances.

Actually it's probably just that we're overriding the default implementation which returns '[object Object]', so not magic at all.




Refs
----

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

https://stackoverflow.com/questions/51674947/javascript-classes-and-this
