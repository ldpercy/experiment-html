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

