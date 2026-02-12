HTML Experiment
===============

Experiments and tests of HTML, CSS, SVG, and JavaScript

<p align="center">
	<img width="15%" src="./favicon.svg" alt="HTML Experiment" title="HTML Experiment"/>
</p>

> [!IMPORTANT]
> Anything reusable should be moved to `html-common`



Experiments might be:
* horribly broken
* really dumb
* incomplete
* quite old



Slightly interesting things
---------------------------

* [css/colour](./css/colour.html)
* [css/colour-calc](./css/colour-calc.html)
* [css/perspective](./css/perspective.html)
* [dom/transform](./dom/transform.html)
* [dom/transform3d](./dom/transform3d.html)
* [svg/polygon](./svg/polygon/)
* [svg/text/baseline](./svg/text/baseline.svg)


jsconfig & JSDoc
----------------

> [!IMPORTANT]
> Make sure `compilerOptions` in jsconfig are set to something modern or you can get really confusing and outdated errors

I'm using `jsconfig.json` to turn on typechecking, currently with the following settings - keep these updated to the latest:

```js
	"compilerOptions": {
		"checkJs": true,
		"target": "es2024",
		"module": "es2022"
	}
```




Todo
----

* JSDoc partial typing - see if there are ways to declare generic types that only specify certain items of a type signature, eg *just* the return type of a function - and be able to mix these partials together a bit like interfaces
* See if there's a way to type the whole of a function's arguments object, not just individual parameters
* See if @interface typing can be applied to non-class objects
* Look for other duck/mixin typing options
* Grid layout - see if there's an simpler way of making grid items go full-width
* Testing that code excepts
* Find out where the root/base context of jsconfig+checkJs typechecking is
* See if there's a way to turn on jsdoc typechecking for inline `<script></script>` within html - nothing found so far
* Revisit named function arguments and options for only specifying certain parameters, leaving others as defaults - I've done this before, need to review.
	Turns out you can omit arguments with `undefined` to get the defaults...
* Parent selector - 'has'
* 3d transform experiments
* dynamic/automatic/contextual colours for text
* CSS colour model/api etc
* See if there's a way to collapse the single extra spaces that sometimes get added just from formatting, eg `<h1>	<a ...`
* CSS `grey` is darker than `darkgrey` ????

