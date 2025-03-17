Dynamic Load JS
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
So could so everything in there, or use a different callback fired from inside the guest script.
Can't help but think I'm missing something.

