Background
==========




Coordinate system
-----------------

Backgrounds specified like this:

```css
	svg {
		background:
			repeating-linear-gradient(
				90deg,
				#fffa 0px,
				#ccca 100px
			),
			repeating-linear-gradient(
				180deg,
				#fffa 0px,
				#ccca 100px
			);
		background-position-x: center;
		background-position-y: center;
	}
```

Appear to use the browser's page coordinate system rather than the SVG coordinate system.
Want to find an equivalent or similar using the drawing's coords.

