Use
===


* Can reuse any element with an id
* Reference external svg file `<use href="external.svg"/>` (prob http only)
* Reference element within external svg file `<use href="external.svg#element"/>` (prob http only)



File URIs
---------
Apparently not (chromium):
```
Unsafe attempt to load URL file:///... from frame with URL file:///... 'file:' URLs are treated as unique security origins.
```


* firefox still seems to need the #nodeId reference in the href


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




