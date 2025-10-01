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

