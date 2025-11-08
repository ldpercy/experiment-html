Serving and CORS
================

### Preamble

See also: [Local load content](../local-load-content/local-load-content.md)

I've been using `file:///` protocol for nearly everything so far because it's super easy - no server required.
But it has shortcomings that I've been working against for a while, so want to lay out the landscape and start to look at some easy http serving options.



File vs http protocols
----------------------

### file

```
	file:///path/to/file/index.html
```

The main benefit to this is its simplicity, you just need a local filesystem and a browser, which are pretty universal.
Nearly all JS language features are available as well, including things like classes & localStorage.

However:
* Modern browsers treat file URIs as having unique origins
* Many things are therefore subject to CORS restrictions, eg: XMLHttpRequest, Fetch, iframe.contentDocument, CSSStyleSheet.rules
* No ES6 modules
* Can't use http response codes, or only limited use, and behaviour appears somewhat browser-dependant
* No proper sandboxing: for non-CORS loadable things (img, style, script, iframe etc) many local paths seem viable - modern browsers lock down access to their content fairly well, but still pretty dodgy



### http

```
	http://myserver/index.html
```

* ES6 modules available
* Proper sandboxing
* Proper responses
* Access to content of dynamically loaded items like stylesheets & iframes, subject to CORS rules



Python http server
------------------

```bash
	python3 -m http.server 9001 --bind 127.0.0.1
```

http://127.0.0.1:9001/


> SimpleHTTPRequestHandler will follow symbolic links when handling requests, this makes it possible for files outside of the specified directory to be served.

Want to avoid this.
`../` paths are followed, but not above the webroot.





