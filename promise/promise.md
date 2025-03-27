Promise
=======

https://en.wikipedia.org/wiki/Futures_and_promises


https://javascript.info/promise-basics
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises


The term 'promise'
------------------

Upfront, I dislike the term 'promise'.

It's a peculiarly human-values centric idea, whereas most of the analogies/metaphors we use in computing are from more prosaic sources like science, engineering, and everyday objects.

I wish it had been called something like 'contract' instead.



Construction
------------

```javascript
	const p = new Promise(executor);


	function executor(resolveFunc, rejectFunc) {
		// Typically, some asynchronous operation that accepts a callback.
	}

	function resolveFunc(value) {} // call on resolved
	function rejectFunc(reason) {} // call on rejected, reason is typically an Error
```

Basic/common structure:

```javascript
	const fooPromise = new Promise((resolve, reject) => {
		if (value) {
			resolve(value)
		} else {
			reject(error)
		}
	});

	fooPromise
		.then(
			(value) => {
				// do something with value
			}
		)
		.catch(
			(error) => {
				// do something with error
			}
		);

```


Promise states
--------------

Promise
	pending
	settled
		fulfill
			.then
		reject



Thenable
--------

A 'thenable' is an object that has a then() function.