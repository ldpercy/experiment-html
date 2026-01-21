DOM maths
=========




Points and geometry features
----------------------------
I'd barely seen these before - I've used a dom point once before to get some svg coords but that's about it.
Turns out there are a bunch of different interfaces/objects that look potentially *really* interesting...


* https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly
* https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/matrixTransform
* https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix



I think I can definitely use it for some things right now - the space-to-svg mapping thing is the first thing I need.
Feel like there's probably lots more it could be used for, potentially could replace/upgrade some of my own code...???
Not sure yet.
Also the general problem of space settings - things like y-inversion and polar direction.

Ahh the actual svg doc transforms i'm using for turtle for things like centering and rotating - currently like this - the note to self is telling:
```js
	updatePageTransform() {
		const rotate = turtleApp.turtle.position.degrees;

		const rotateTransform    = (ui.rotatePage)   ? `rotate(${-rotate},0,0)` : 'rotate(0,0,0)';
		const translateTransform = (ui.centerTurtle) ? `translate(${-turtleApp.turtle.svgX},${-turtleApp.turtle.svgY})` : 'translate(0,0)';

		const scaleTransform = `scale(${ui.getScale()})`;

		// TODO: see if this can be applied as separate attributes, or combined into a single transform matrix

		const transform = `${scaleTransform} ${rotateTransform} ${translateTransform} `;

		element.page.setAttribute('transform', transform);
	}/* updatePageTransform */

	// yields a transform string like:
	// transform="scale(2) rotate(-1461.461267034024,0,0) translate(818.4637861251831,-8.72766923904419) "
```

These can definitely be combined into something like this from mdn:
```js
	const matrix = new DOMMatrix();
	matrix.scaleSelf(0.5, 2);
	// + rotate + translate
	element.setAttribute("transform", matrix.toString());

	// gives something like:
	// transform="matrix(0.5, 0, 0, 2, 0, 0)"
```

A bit less obvious to the casual punter, but definitely conciser, I'll def do it
No idea if the browser has an easier time with second as well - it might all boil down the same under the hood.


What would be *supremely* cool is if i could transform some points or a shape in 3d space and get the 2d projection out...
Actually I think that shouldn't be too hard...?





Space Mapping
-------------

I need a way to map an arbitrary euclidean coordinate space to an SVG output area - currently needed for wormfarm and turtle, but looking for a general soln.




