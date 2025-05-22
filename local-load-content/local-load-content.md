Local load content
====================

I've already done the CSS and JS versions, but they both have specific features for their cases.

Going to do a really basic version that just loads a file to get the content.

Will use this to try a out a few different techniques such as xhr and fetch.



https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest



Fetch and CORS
--------------
Hmm might not be able to do this local-only because of CORS restrictions.

https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730

No luck with `no-cors` either - the request works, but the response body cannot be read, which is by design:

https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#no-cors


I expect xhr will be similarly locked down.


What about the file API?



File API
--------

Afaict only works through user interaction with a `file` type input.

So I dont' think this is going to be what I'm wanting here, useful for other things though.


Anything left?
--------------

Running oput of options for local reading.

At present I *can* ~~read local files~~ load local scripts and css link tags.
Also image tags of various kinds will probably be okay locally.

There *might* be ways of looking into the content of some of those...
(SVG for example.)

And there's always the good ol iframe.


iframe
------

I really should see what can be done with iframes as it might be one of the few options left.

