Inner Classes
=============

I remember reading about inner classes in Java years ago, don't think I ever used them though.

Looks like there are a couple of ways of doing similar things in JavaScript.
Will explore a bit and report results.



Two Variants
------------

### 'Proper' Inner Class

```js
class OuterClass {

	name = 'initial OuterClass name';

	constructor(name) {
		this.name = name;
	}

	static InnerClass = class {
		name = 'initial InnerClass name';

		constructor(name) {
			this.name = name;
		}
	}/* InnerClass */

}/* OuterClass */

oc = new OuterClass('outer class');
ic = new OuterClass.InnerClass('inner class')
```

This appears to work just fine.
`static` isn't required for the inner class, but probably recommended for this kind of thing otherwise you could only create an instance of InnerClass from an *instance* of OuterClass.

There could be cases where you specifically want the inner class instances attached in some way to the instances of outer class... in which case no-static thing might be an approach, but there's probably better ways to do that though.


Actually I've just found an entirely appropriate use-case for the no-static inner class constructor - constructing the inner class when you only have access to an *instance* of the outer class.

In Turtle I'm using `space` instances to create new Points, and I want the code to be agnostic of the actual space being used.
So instead of using a constructor like `new ConcreteSpace.Point()`, i want to call a constructor off the instance instead, something like:
```
	point = new spaceInstance.point()
```

So in this case I need an inner class constructor that isn't static.






### 'Quasi' Inner Class

A similar kind of namespacing arrangement can be achieved by just declaring another class in the outer classes name:
```js
OuterClass.QuasiInnerClass = class {
	name = 'initial QuasiInnerClass name';

	constructor(name) {
		this.name = name;
	}

}/* OuterClass.QuasiInnerClass */

qic = new OuterClass.QuasiInnerClass('quasi-inner class');
```
Whether they operate the same in practise however...


### Details

There are probably a whole bunch of fiddly little details with setups like these, especially when it comes to things like inheritance and private fields.
Will have to try stuff out and see how it works.

The main initial benefit I'm going for here though is the ability to namespace and group related classes together.




Attaching the inner instance to the outer one
---------------------------------------------

Doing something like the following on an inner class:

```js
	Point = class {
		constructor(name, space=this) {
			return new PlanarSpace.Point(...arguments);
		}
	}/* Point */
```

Unfortunately does not bind the 'this' to the outer class instance, it's bound to the new instance's this.
I bet there is a way to do it though...



