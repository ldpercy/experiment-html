Event registration
==================

There are a few different techniques and styles for this.

Want to experiment with each and see what works in different circumstances.




Inline events
-------------
Oldschool html onEvent handlers, eg:

```html
<button onclick="doSomething()">
	click me!
</button>
```
A bit particular about what syntax they will and won't accept.
So far, semicolons and parentheses are fine.

### IIFEs

IIFEs do work in inline attributes, but you have to get the syntax right or it fails - this works:

```html
<button onclick="(() => { doSomething(); })()">
	click me!
</button>
```

Missing either the inner function parentheses, here `doSomething()`, or the the final IIFE execution parentheses will result in the event failing silently.

Ref: https://stackoverflow.com/questions/22001674/inline-javascript-onclick-function


