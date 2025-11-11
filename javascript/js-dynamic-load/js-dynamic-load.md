JS Dynamic Load
===============

Experiments in dynamically loading/changing scripts.


Scripts
-------
Doesn't look like you can just change the src URL as you can with styles, most comments recommend creating a new script tag.

https://stackoverflow.com/questions/52196087/dynamic-src-in-html-in-a-script-tag

https://stackoverflow.com/questions/1929742/can-script-readystate-be-trusted-to-detect-the-end-of-dynamic-script-loading



script onload
-------------
I can reliably get this to fire after creating a new script element.
But it fires before any of the loaded script becomes available, so I can't call any new scripts from the onload callback.

So far the only way I can do it is to use immediately invoked scripts in the guest script.
So could do everything in there, or use a different callback fired from inside the guest script.
Can't help but think I'm missing something.

There are some posts suggesting that the sequence of setting/attaching is important, eg (though it's pretty old):

	https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag

The order doesn't seem to make much difference for me, and I still can't get the readystatechange event to fire.


Script onload properly this time
--------------------------------

It works now, I was doing it wrong.
Had to change the (accidental) function call to a proper function lambda.



See also
--------

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
