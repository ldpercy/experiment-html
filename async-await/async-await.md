async-await
===========

https://en.wikipedia.org/wiki/Async/await




First Experiment
----------------
In relation to the dynamic js load, want to see if the callbacks can be rewritten with async-await.

Want to dynamically load a script which has information about the next to load script, then load that.
Will write with callbacks first, then try to rewrite with async await.

Have done the dumbest callback version I can think of.
Even for this version a while loop would be better as each step is the same.
If each callback returns something different then you might end up with something like I've done here.

### While Loop
Err that didn't work at all, silly me. Got a couple nice juicy infinite loops for my trouble.
Will try a variant.

### Recursive (kind of)
This works just fine.


Promises etc
------------
https://javascript.info/callbacks
https://javascript.info/promise-basics
https://javascript.info/async-await

https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch

* async functions always return promises
* await works only inside async functions
