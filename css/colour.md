Colour
======


Dynamic text colour
-------------------

Trying to get something to automatically set text colour based on the element, scheme and transparency.

This works pretty well for solid backgrounds for generating black or white text:

```css
	color: hsl(from var(--element-colour) h s calc(sign(l - 51) * -100));
```

That one is pretty simple, it's really just a function of one input, the element lightness.

But it doesn't work for elements with alpha transparent backgrounds that show the light/dark scheme colour though - which is what what I want.

I think I've been overcomplicating it.
As the background becomes more transparent you just need to revert to the colour scheme's text colour.

Yeah this much better, especially for strong/weak transparencies eg .25 & .75.
At mid transparencies of around 0.5 still a bit up in the air.
So basically use the formula above for relatively opaque backgrounds, and revert to theme text colour for relatively transparent backgrounds.
With some crossover threshold tbd.


Think I can probably replace the original colour-calc with colour-calc2 as well.