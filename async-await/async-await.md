async-await
===========

In relation to the dynamic js load, want to see if the callbacks can be rewritten with asyc-await.

Plus other things.


First Experiment
----------------

Adapted from the dynamic load experiment, want to dynamically load a script which has information about the next to load script, then load that.
Will write with callbacks first, then try to rewrite with async await.

Have done the dumbest callback version I can think of.
Even for this version a while loop would be better as each step is the same.
If each callback returns something different then you might end up with something like I've done here.


