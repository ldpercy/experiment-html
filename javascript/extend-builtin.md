Extending built-in JS objects
=============================

Want to try a few experiments with extending built-in javascript objects to see how practical it is.


The main one I have in mind is Date, but wondering about Array too.


Date
----

In year clock i want to do something like this:

```js
yearclock.Date = class extends Date{

	constructor(date) {
		super(date);
	}

	//	...a bunch of my own methods...

}/* yearclock.Date */
```

I have quite a few methods to jam in and I don't know yet how well this is likely to work, so going to try it out here first.

