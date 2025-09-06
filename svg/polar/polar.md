Polar coordinates
=================



[polar-coordinates](../[library]/polar-coordinates.js)



Offsets
-------

Need a way to figure out a polar point plus x and y offsets, for example something like:


	polarPointWithOffset = new PolarPoint(
		radian : 45,
		radius : 600,
		dx     : 10,
		dy     : 10,
	);


Where dx and dy are relative to the polar point's coordinate system, not the eventual cartesian coordinates.
Feels like it shouldn't be hard.


