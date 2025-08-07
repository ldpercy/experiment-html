JavaScript
==========




Destructuring
-------------

### Parameter Destructuring

https://www.geeksforgeeks.org/javascript/parameter-destructuring/

```js
function f1(a,b,c)			{ return `(${a},${b},${c})`; }	// takes anonymous args
function f2({a,b,c})		{ return `(${a},${b},${c})`; }	// takes args named abc
function f3({x:a,y:b,z:c})	{ return `(${a},${b},${c})`; }	// renames xyz to abc
```

Particularly useful is passing a Class instance into a destructuring function like `f3` above:

```js
p1 = new Point3d(1,2,3)  // has properties x,y,z
f3(p1) // "(1,2,3)"
```










