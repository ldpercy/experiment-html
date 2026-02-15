Script
======

Type
----

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type

> **Any other value**
> The embedded content is treated as a data block, and won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All of the other attributes will be ignored, including the src attribute.

This provides a very handy way to turn off a script just by changing its type to something like `disabled`.




Sequence
--------

https://flaviocopes.com/javascript-async-defer/


https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html



### *script* without any attributes

> The HTML file will be parsed until the script file is hit, at that point parsing will stop and a request will be made to fetch the file (if it’s external). The script will then be executed before parsing is resumed.

### async

> **async** downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.


### defer

> **defer** downloads the file during HTML parsing and will only execute it after the parser has completed. defer scripts are also guaranteed to execute in the order that they appear in the document.


### blocking

https://medium.com/javascript-zone/a-deep-dive-into-htmls-new-blocking-attribute-12ccb3243341

https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/blocking

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#blocking

Seems to only support render at the moment:

	blocking="render"


**Conclusion**

Looks like `defer` is the best way to guarantee script load order.