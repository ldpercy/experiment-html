async-await script
==================

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


* async functions always return promises
* await works only inside async functions




Await replaceScript
-------------------

Ideally I'd like to be able to write something like this in synchronous style:

	loadScript('config');
	mainScript = config.scriptName;
	loadScript(mainScript);
	mainscript.run();

But it's not obvious to me how to convert loadScript/replaceScript to async/await so it can be run like this.

The last thing replaceScript does is put the new node into the head, at which point the operation is asynchronous, we have to wait for the onLoad or onError before we can do anything useful.
And either could fail, so I need to figure out the best way to do error handling.

	https://catchjs.com/Docs/AsyncAwait
	https://dmitripavlutin.com/return-await-promise-javascript/

Oh man this takes me back to bad times. I'm again reminded that this shit is way too complicated, and *not good*.
It was stuff like this that led me to start thinking up Silver.


### Async returns

https://stackoverflow.com/questions/35302431/async-function-implicitly-returns-promise

> If you don't explicitly return a promise, the value you return will automatically be wrapped in a promise

https://www.designcise.com/web/tutorial/does-javascript-async-function-implicitly-return-a-promise

> returning a Promise explicitly inside an async function won't return a Promise of a Promise but rather a single Promise with resolved/rejected value

