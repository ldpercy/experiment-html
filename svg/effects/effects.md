Effects
=======

General effects experiments.





Zoom
----

Getting consistent zoom effects for SVG is sometimes tricky, especially for cloned items such as with `use`.

This seems to work okay for 'ordinary' svg:
```
	transform-box:content-box;
	transform-origin:50% 50%;
```




Element reordering
------------------

There's no [z-index in svg](../css/css.md#z-index) so for now manipulating the element structure is the only way to move things up and down in the visual stack.





