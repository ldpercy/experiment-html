Testing
=======


This **really** isn't the sort of thing I should be attempting, but there's basically nothing built into core js or the apis that I can see save for the lonely `console.assert()` function.

So I'm going to whip together a little module to help with some things.



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some





A single test will be:

* one or more values/expressions
* a predicate to be said about those values/expressions, eg allEqual

eg
	[1,2]



Predicate typing in jsdoc
-------------------------

I want to be able to declare a predicate function type, eg only specifying it's return type (for now).
Not sure how to partially type a function like this (or similar) in jsdoc, or if it's even possible.
(The `partial` utility type isn't what I want here.)

It might end up easier from a typing perspective to write the predicates as small classes instead.




Testing for code that should except
-----------------------------------
Can this be done in a not-too-complicated way?
Not sure, but I don't think evaluation of expressions can be delayed until we're inside the predicate function...?
Might have to wrap the declarations in this case.
Have to try some things.


Test categories
---------------
* equality
* equivalence - to some specified level
* greater/less than a specified comparator
* typeof
* instanceof
* exceptions
*