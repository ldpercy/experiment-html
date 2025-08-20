CSS
===

Spotted this (https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect):

```
Note: Starting with SVG2, x, y, width, height, rx and ry are Geometry Properties, meaning those attributes can also be used as CSS properties for that element.
```

Somehow I'd missed this - this could change *lots* of stuff.

Need to find out how far these go, and what support is like.


https://github.com/w3c/svgwg/wiki/SVG-2-new-features#geometric-attributes-that-can-now-be-specified-as-style-properties


```
Geometric attributes that can now be specified as style properties:

	'x', 'y', 'width' and 'height' on 'svg', 'rect', image, 'foreignObject', 'use', and 'symbol'
	'cx' and 'cy' on 'ellipse' & 'circle'
	'r' on 'circle'
	'rx' and 'ry' on 'ellipse' & 'rect'
	'd' on a 'path'
```


Text
----

You'd think they'd have added some of these for `text` / `tspan` as well...
They would been *really* useful.
Could try it with text in a use - maybe that was the intention?

There are quirks to do with css and `use` that I'm still figuring out, but so far it looks like:
* Styling has to be on the source elements - eg those that are in the `defs` block
* Positioning is done on the `use` element itself, which *can* be done through css

I'm not sure I want to go fully down this path, but I'll try it out in a couple of places to get a feel for how well it works, or doesn't.



z-index
-------
Thought i'd seen somewhere that this was being added to SVG, but not working for me (yet).

May have been proposed for SVG2 at some point - will try to find a reference, but for now no current implementation:

https://stackoverflow.com/questions/17786618/how-to-use-z-index-in-svg-elements

`use` or other programmatic techniques to reorder the document needed for now.
