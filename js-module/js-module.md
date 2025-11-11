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



