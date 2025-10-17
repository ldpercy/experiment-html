HTML App
========


Going to try to combine a few common page setup features into a small class.

For event registration I think it'll need to be split it into two phases
1. Register initial DOMContentLoaded event at load/instantitaion time
2. Register all remaining events when that one fires

I'm simultaneously using/developing this in a couple of other places so will collect together what's current here.




Binding of 'this' for listeners
-------------------------------

In a class context it's useful to have the 'this' bound to the instance so that methods can be called.
So far that's what I've been doing by default in `addEventListeners`:
```js
	// forEach node
	node.addEventListener(
		item.type,
		listenerFunction.bind(this)
	);
```
But there are cases where I want the stock element 'this' to carry through so I can read where the event took place.
So it would be nice to have some options here.

* See if the bind can be added in `eventListeners` array - don't think i like this option, but curious to see if it works
* Force the use of separate listeners/handlers - listeners could hopefully use a 'this' synonym to call instance methods





Event listener registration
---------------------------

All of a sudden 'normal' listener registration is working for me... (without the function execution).

Not sure what's going on - was I doing something wrong in the past?
Was it something specific to the way I was doing things in year-clock?

I'd better test this some more.
