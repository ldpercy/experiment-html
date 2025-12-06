Use
===


* Can reuse any element with an id
* Reference external svg file `<use href="external.svg"/>` - http only
* Reference element within external svg file `<use href="external.svg#element"/>` - http only
* Clones created with `use` are added as shadow dom subtrees to the use elements


File URIs
---------

```xml
	<use href="../[library]/grid.svg#grid" x="0" y="0"/>
```

* firefox still seems to need the #nodeId reference in the href


### HTTP only

Firefox:
> Security Error: Content at file:///ldpercy/experiment-svg/use/use.svg may not load data from file:///ldpercy/experiment-svg/[library]/grid.svg.

Chromium:
> Unsafe attempt to load URL file:///ldpercy/experiment-svg/[library]/grid.svg#grid from frame with URL file:///ldpercy/experiment-svg/use/use.svg. 'file:' URLs are treated as unique security origins.




CSS
---

There are some quirks to do with `use` and CSS that I run into from time to time, and some seem to vary a bit by browser.

Need to do some experiments to nail down what does and doesn't work, and see if I can figure out what *should* and *should not* work.


From: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/use
> Since the cloned nodes are not exposed, care must be taken when using CSS to style a <use> element and its cloned descendants. CSS properties are not guaranteed to be inherited by the cloned DOM unless you explicitly request them using CSS inheritance.


As far as i can tell browsers use shadow dom for `use` elements, but need to dig further.

Firefox and chrome show these for use elements in their inspectors:

```html
<use ... >
	#shadow-root (closed)				<!-- firefox -->
	<cloned node ...etc..../>
</use>

<use ... >
	#shadow-root (user-agent)			<!-- chrome -->
	<cloned node ...etc..../>
</use>
```







Refs
----


https://github.com/WICG/webcomponents/issues/772