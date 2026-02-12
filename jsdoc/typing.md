Typing
======

Notes about type rules in general.



Arguments
---------

Very cranky about this.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#arguments_is_an_array-like_object

The last example using the spread operator does *not* pass typechecking:
```js
	const args = [...arguments];			// Type 'IArguments' is not an array type.ts(2461)
```
Until you try the first two...
```js
	const args = Array.prototype.slice.call(arguments);	// Does work
	// or
	const args = Array.from(arguments);			// Property 'from' does not exist on type 'ArrayConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.ts(2550)
```
And notice that you've been using the wrong compiler settings... sigh.

Now I've got to go back and re-run a bunch of trials.





Compatible & Incompatible Types
-------------------------------
Sometimes I'm seeing things work that are a bit unexpected.
For instance `number` being compatible with `object`.
Looks like `{object}` will take just about anything - pretty obvious now that i think about it.

For testing purposes I sometimes need to force a type incompatibility so looking for notable examples of each.
Some might only work in one direction also.


* Argument of type 'any[]' is not assignable to parameter of type 'number'.ts(2345)





Class Extension
---------------

Something about this that I don't properly get yet...
Not sure done I've this kind of thing recently - might need to brush up a bit.


* You can change the type signature of an extended class's constructor, but not the signature of methods


Actually still experimenting - like everything, I think it *depends*.


I'm not sure there's any kind of strict relationship between the constructor signatures of base & derived classes.



