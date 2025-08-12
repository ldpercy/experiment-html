Clip and mask
=============


Clip
----

Pretty much just a shape to cut another shape with.


Mask
----

Appears to just be a translucent version of clip, but not sure I fully get it yet.



Knock-out
---------

In both cases would like to be able invert the effect to be able to 'knock-out' (not sure if correct term) sections of a drawing according the shape.

There might be a flag or setting for this.


Working with a mask something like this:
```html
	<style>
		#knockout {
			rect { fill: #ffff; }
			text { fill: #000f; }
		}

		.knockout {
			mask: url(#knockout);
		}
	</style>

	<mask id="knockout">
		<rect x="-1000" y="-1000" width="2100" height="1600" />
		<text x="0" y="0" >
			knockout
		</text>
	</mask>

	<use href="#drawing" class="knockout"/>
```
The rect (white) has to be big enough or correctly shaped to cover over all of the parts to keep.
The actual knocked-out shape is black.
