Event registration
==================

There are a few different techniques and styles for this.

Want to experiment with each and see what works in different circumstances.


Document Loading
----------------

A few different events here. And a mixture of different historical techniques.

	<body onload="bodyOnload()">

	document.addEventListener("load", .... );

	document.addEventListener("DOMContentLoaded", ..... );


### Load

> The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images, except those that are loaded lazily.

Ref: developer.mozilla.org/en-US/docs/Web/API/Window/load_event


### DOMContentLoaded

> The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (script defer and script type="module") have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

Ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

For the majority of tasks this is probably the go-to.




Inline events
-------------
Oldschool html onEvent handlers, eg:

```html
<button onclick="doSomething()">
	click me!
</button>
```
A bit particular about what syntax they will and won't accept.
Semicolons and parentheses are fine.

### IIFEs

IIFEs do work in inline attributes, but you have to get the syntax right or it fails - this works:

```html
<button onclick="(() => { doSomething(); })()">
	click me!
</button>
```

Missing either the inner function parentheses, here `doSomething()`, or the the final IIFE execution parentheses will result in the event failing silently.

Ref: https://stackoverflow.com/questions/22001674/inline-javascript-onclick-function


