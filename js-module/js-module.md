JS Module
=========

### Preamble

From: [Serving and CORS](../serving-and-cors/serving-and-cors.md)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules


Going to start using a lightweight python server for some things, modules is the first experiment here.


I've used modules stacks of times at work, but never really taken the time to just experiment and poke around, so here we are.



Errors under file protocol
--------------------------
Trying to load a module under `file:///` gives these errors:

firefox:

>	Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///path/to/project/module.js. (Reason: CORS request not http).
>	Module source URI is not allowed in this document: “file:///path/to/project/module.js”.

chromium:

>	index.html:1 Access to script at 'file:///path/to/project/module.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.
>	index.html:31  GET file:///path/to/project/module.js net::ERR_FAILED




Modules
-------

I don't think there's any way to access module code outside of another module.

* 'import declarations may only appear at top level of a module'

Ie only modules can import modules, so effectively modules take over and everything becomes a module.

Likewise, I suspect there isn't any way to use non-module code *inside*  in a module.
Wait that doesn't seem right - there must still be a global namespace of some sort?
Otherwise the whole universe would have broken when modules were brought in...
There's something I'm missing here.



