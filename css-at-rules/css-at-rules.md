css-at-rules
============

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/At-rule

A few of these I've used before (ages ago), but some are new-to-me.


	@charset
	@color-profile
	@container
	@counter-style
	@font-face
	@font-feature-values
	@font-palette-values
	@import
	@keyframes
	@layer
	@media
	@namespace
	@page
	@position-try
	@property
	@scope
	@starting-style
	@supports
	@view-transition




@namespace
----------

I had a half-baked idea that it might be possible to mess with this a little bit by declaring variant namespaces on particular svg nodes, and using different @namespace rules to target them.

Doesn't look likely to work unfortunately.

https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace

>... `<svg>` and `<math>` elements will be assigned their proper namespaces (http://www.w3.org/2000/svg and http://www.w3.org/1998/Math/MathML, respectively

So it doesn't look it will be simple to override the default namespaces, and even if you could you'd probably end up with svg that no longer worked as intended.

https://css-tricks.com/almanac/rules/n/namespace/

Another similar-ish technique using custom elements described here:
https://www.codingeasypeasy.com/blog/namespace-css-advanced-styling-with-scoped-selectors-a-comprehensive-guide


@scope
------

https://developer.chrome.com/docs/css-ui/at-scope

In the cascade:
	* after specificity
	* before order-of-appearance
	* (2nd last)




Naming things just got easier thanks to @scope
https://www.youtube.com/watch?v=PkFuytYVqI8


* can drop element scoped style tags directly into html, eg
	<parent-element>
		<style>
			@scope {
				rulesets
			}
		</style>
	</parent-element>

