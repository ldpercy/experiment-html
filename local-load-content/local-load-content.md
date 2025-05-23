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

Frame content should be in:

	iframe.contentDocument

But this too is locked down by Same-origin policy when under file protocol (on ff at least).



Same Origin Policy for files
----------------------------

https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#file_origins

https://stackoverflow.com/questions/48313084/what-is-the-same-origin-policy-for-file-uris

Same origin policy for file:// scheme? https://groups.google.com/a/chromium.org/g/blink-dev/c/0w5mxLMkrNM

Define behavior for file:// documents' origin https://github.com/whatwg/html/issues/3099


### Firefox
Current practice in ff is to treat file URIs as having unique origins.

It can be relaxed in `about:config` with:

	security.fileuri.strict_origin_policy

A decent description of an attack scenario here:

	Treating file: URIs as unique origins - https://bugzilla.mozilla.org/show_bug.cgi?id=1500453

> Setting `security.fileuri.strict_origin_policy` to false is a lot more dangerous than the current behavior... I'd be pretty loath to recommend it to anyone in good conscience.

I'm fairly disinclined to set this globally.
If there was a way to change it temporarily, say with a plugin, or only for certain folders... then maybe.


