CSS Length
==========

https://developer.mozilla.org/en-US/docs/Web/CSS/length




Relative units
--------------

### Percent

```
%			define a size as relative to an element's parent object
```

> Although percentage values are usable in some of the same properties that accept length values, they are not themselves length values. See https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage


### Font and character based
```
em			the calculated font-size of the element
rem
ex			the x-height of the element's font
rex
lh			the computed value of the line-height property of the element
rlh
cap			the nominal height of capital letters of the element's font
rcap
ch			the advance measure of the glyph 0
rch
ic			the used advance measure of the "水" glyph
ric
```

**'r' prefix:**
Root element font relative length units define the length value in terms of the size of a particular character or font attribute of the root element (usually `<html>`).


**NB** At time of writing some of font relative units are not available in Firefox:
https://developer.mozilla.org/en-US/docs/Web/CSS/length#browser_compatibility


### Viewport based units
```
vw			percentage of the width of the viewport's initial containing block
vh			percentage of the height of the viewport's initial containing block
vmin		percentage, the smaller of vw and vh
vmax		percentage, the larger of vw and vh
vi			percentage of the size of the initial containing block, in the direction of the root element's inline axis
vb			percentage of the size of the initial containing block, in the direction of the root element's block axis
```

**s, l and d prefixes:**
For small, large, and dynamic viewport sizes, the respective viewport-percentage units are sUUU, lUUU, and dUUU.
UUU is equivalent to lUUU, representing the viewport-percentage length unit based on the large viewport size.


### Container query units
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
```
cqw			1% of a query container's width
cqh			1% of a query container's height
cqi			1% of a query container's inline size
cqb			1% of a query container's block size
cqmin		The smaller value of either cqi or cqb
cqmax		The larger value of either cqi or cqb
```




Absolute units
--------------

```
Unit	Name					Equivalent to
cm		centimeters				1cm = 37.8px = 25.2/64in
mm		millimeters				1mm = 1/10th of 1cm
q		quarter-millimeters		1q = 1/40th of 1cm
in		inches					1in = 2.54cm = 96px
pc		picas					1pc = 1/6th of 1in
pt		points					1pt = 1/72nd of 1in
px		pixels 					1px = 1/96th of 1in
```
