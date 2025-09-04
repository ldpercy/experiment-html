Number representation
=====================

Experiments in representation of numbers.

https://en.wikipedia.org/wiki/Radix


Decimal
-------

### Squares
First try is pretty verbose in svg and a bit tortured in css.
I'll try to simplify it.
Better `attr` support would definitely help here.
Would be good to abstract the way the digit-light mapping works to allow for plugging variants in.


n-ary
-----

Some things to note about standard on-off presentation, that usually would be used for binary for example.

### The n-ness of the system isn't obvious

For binary the n states are on-off.

For n-ary the n states are: off, on1, on2 ... on(n-1)
Which means for example in base 5 you have 1 off an 4 ons, and the 5-ness is a bit lost.
Someone used to thinking in number bases would get it, but maybe not the casual observer.

### Show the 'n' state
One way to get around this would be to show the 'n' state and don't use a zero/off state (except for actual zero).
That would indicate the n-ness more readily, but be less conventional mathematically.

Systems like this might be useful for *properly* discrete numberings.
(Some things appear discrete at first...)
Also good for drawings and other artistic representation.
Find out what this is called - might be related to matchstick counting.




Principles for shaped representations
-------------------------------------
* looking at a shape uniquely identifies its value
* a shape should be unique under rotation so the orientation is obvious (counterexamples: 0,6,9,8, 1 sometimes )
* a shape should be unique under inversion so light/dark doesn't change the value
* a shape should be unique under reflection so that reflections are immediately obvious (cf: 0,5,2,8, 1 sometimes)
