Namespace
=========


See also: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#classes-functions-and-object-literals-are-namespaces




Having more ideas about using js classes as namespaces generally, want to try one or two things.

In Turtle I've started grouping things into class-based namespaces, and I'm about to start doing the same thing to year-clock, but that one is more complicated.

In particular one concern was what to do about dates and embellsihed date objects.

It occurred that I can probably just have my own extension of Date that adds some methods, and place it under the YearClock namespace.

I think that will probably work, and that's what I'll try, though I think there are one or two caveats about built-in objects that I might need to careful of.

But whatever happens for that, I want to see if I can take the namespace idea a little further.

For instance it would be nice if could I place all of my work under an "ldpercy" namespace, and hopefully end up with something like this:

	ldpercy
		htmlApp
		turtle
			app
			SVG
			PlanarSpace
			...
		yearclock
			app
			Date
			i10n
			SVG
			Theme
				ThemeBase
				[... concerete themes]
			...
		svg
		maths
		geometry
		...etc...


This is probably something usually done with modules, but I want to see if it works with classes.



It appears to work...
---------------------
I can create nested namespaces like this, and create object instances within them.
```js
class ldpercy {}
ldpercy.namespace = class {}
ldpercy.namespace.App = class extends HTMLApp { ... }
ldpercy.namespace.app = new ldpercy.namespace.App();
```

I wonder if there are any limitations with something like this?

* It seems like child classes can *only* be declared with class expressions, not statements



Class statement vs. class expression
------------------------------------

VSCode highlights these two slightly differently:

```js
	class foo1 {}
	foo1.name = "foo1";
	foo1.bar = class {}


	foo2 = class {}
	foo2.name = "foo2";
	foo2.bar = class {}
```

In both cases, as soon as you give the parent class *any fields at all*, VSCode will label it as a `module` when you mouse over it.
The highlighting is nicer for the first variant though.
Interesting.

I'm not 100%, but I think there might be some other small differences in the two techniques.

From MDN:

> Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.

Needs further investigation.



Class expression names
----------------------

From MDN:
> Class expressions can have names as well. The expression's name is only visible to the class's body.
> ```js
> const MyClass = class MyClassLongerName {
>	// Class body. Here MyClass and MyClassLongerName point to the same class.
> };
> new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
> ```

I'll have to see how this works with nesting, could be useful.

Looks like it really is body-only, so not as useful as I'd hoped, not for most things anyway.
