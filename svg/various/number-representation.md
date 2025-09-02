Number representation
=====================

Experiments in representation of numbers.


Decimal
-------

### Squares
First try is pretty verbose in svg and a bit tortured in css.
I'll try to simplify it.
Better `attr` support would definitely help here.
Would be good to abstract the way the digit-light mapping works to allow for plugging variants in.


n-ary
-----





General Principles
------------------
* looking at a shape uniquely identifies its value
* a shape should be unique under rotation so the orientation is obvious (counterexamples: 6,9,8, 1 sometimes )
* a shape should be unique under inversion so light/dark doesn't change the value
* a shape should be unique under reflection so that reflections are immediately obvious (cf: 5,2,8, 1 sometimes)
