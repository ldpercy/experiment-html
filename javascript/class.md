JavaScript Classes
==================

### Refs

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
* https://stackoverflow.com/questions/51674947/javascript-classes-and-this



### Todo:

* When to use `static`
* Static initialization blocks


Anatomy
-------

### Simple class

```js
class BaseClass {							// declare BaseClass into an anonymous namespace
// class namespace.BaseClass {				// or declare into a specific namespace

	// initialisation area
	// cannot have function calls in this space
	// evaluated prior to the constructor being run

	name            = 'Default ClassA name';
	desc            = 'Default ClassA desc';
	summary         = `Name: ${this.name}; Description: ${this.desc};`								 // can reference other vars declared in the initialisation area
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
	// Setters cannot return a value.ts(2408)
	set foo(param) { this.foo = param }

	report() {
		console.log('report:', this);
	}

}/* BaseClass */
```

### Class with extends

```js
class SubClass extends BaseClass {			// extending a class

	// initialisation area
	// cannot have function calls in this space
	// evaluated prior to the constructor being run

	name            = 'Default ClassA name';
	desc            = 'Default ClassA desc';
	summary         = `Name: ${this.name}; Description: ${this.desc};`								 // can reference other vars declared in the initialisation area
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



Name clashes
------------

You can't have a field and a method with the same name - the field ends up overriding the method:
```js
foo = 'This is foo';
foo()				{ console.log('This never gets called'); return this.foo; }
get foo()			{ console.log('This never gets called'); return this.foo; }
set foo(value)		{ console.log('This never gets called'); this.foo = value; }
foo = function()	{ return 'However this overwrites the field'; }
```


Accessors
---------

* A 'get' accessor cannot have parameters. ts(1054)
* A 'get' accessor must return a value.ts(2378)
* A 'set' accessor must have exactly one parameter. ts(1049)
* Setters cannot return a value.ts(2408)


Naive use of getters and setters ends up being recursive:
```js
get foo()		{ return this.foo; }	// this is recursive
set foo(param)	{ this.foo = param; }	// this is recursive as well
```

Accessors aren't all that useful for regular fields.
But they are good for private fields, and for complex properties.



Private properties
------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties

> Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class.

Using classes - JavaScript | MDN:
> Derived classes don't have access to the parent class's private fields — this is another key aspect to JavaScript private
fields being "hard private". Private fields are scoped to the class body itself and do not grant access to any outside
code.



Constructors and setters
------------------------

Can't (yet) find any way of doing something like this:
```js
	i = new Foo().property = 1234;

```
Ie construction with a chained setter.
Setter return values are seemingly ignored, so variations like the following don't work either:
```js
set x(x) { this.#x=x; return this; }
```

Try this instead:

```js
(p1 = new Point(2,3)).x = 22
```
The expression evaluates to '22' but p1 is set correctly.



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


Classes can be constructed and stringified in one step like so:
```
	someOutput = `
		<div>
			${new ExampleClass(123)}
		</div>
	`;
```
But the instance will be discarded so this is little more than a glorified function call.
This *is* allowed though:
```
	someOutput = `
		<div>
			${mc = new ExampleClass(123)}
		</div>
	`;
```
But `mc` becomes globally(?) scoped, and cannot be preceded by keywords like var, let or const - so like this would be a trick of limited use.
A better variant of this that happens to work is:
```
	someOutput = `
		<div>
			${someScope.mc = new ExampleClass(123)}
		</div>
	`;
```
In that case you can instantiate into a given scope, and stringify at the same time.
Still not sure why you'd want to do it all in one step, but it can be done.




Method Naming
-------------

This is mostly for my own practise, to make what certain kinds of methods do clear from their naming.

Mostly he confusing case that I'm running into most right now are methods that return new instances calculated from the instance.

For example:

```
	d = new Date()
	s = d.startOfYear() // or as an accessor without ()
```

Questions arise:
* `startOfYear` is sort of a property, but also kind of not, so would be arguable as a getter
* It returns a **new** instance so is it a conversion or factory method?
* It returns the same type, so as a conversion like `toStartOfYear` looks really weird

For the moment I think it probably be mostly naturally is a getter, ie 'getStartOfYear' of simply 'startOfYear'.
But the fact that it returns a new object still irks me a little bit.
Maybe if it was actually a proper property of the date then it would read less awkwardly to me.
Might consider that.





