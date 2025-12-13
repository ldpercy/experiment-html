css-nested
==========

Some experiments to see how CSS nesting works.


https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting



CSS containment
---------------

One thing I want to try is dynamically creating a stylesheet that targets a single element.

Say you have some generic little blob of CSS:

```css
	div { border: 1px solid red; border-radius:1em; background-color:pink; padding:1em; }
	p { font-family:serif; }
```

That you want to add to a document, but only apply it to a certain, maybe new bit of html.

Can you dynamically create a stylesheet that nests the blob under an id selector, so that it only targets a single node?

```js
	let targetedCSS = `
		div#para3 { ${newCSS} }
	`;
	dynStyleElement.innerHTML = targetedCSS;
```

Yep it works. Using something like the above can push new CSS into the document and target it using CSS nesting.
Not sure if there are any caveats with this technique...?

I want it for injecting potentially large stylesheets into documents, that themselves may have their own vars (???) nestings etc.
Actually that's a good question - does this work with CSS vars?
Or are there other parts of CSS that cannot be nested in this way?
Will find out soon enough I suppose.



Creating new content & styles
-----------------------------

That all works fine with existing style and html.
What about writing brand new content?





