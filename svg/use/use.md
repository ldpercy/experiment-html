Use
===


* Can reuse any element with an id
* Reference external svg file `<use href="external.svg"/>` (prob http only)
* Reference element within external svg file `<use href="external.svg#element"/>` (prob http only)



File URIs
---------
Apparently not (chromium):
```
Unsafe attempt to load URL file:///... from frame with URL file:///... 'file:' URLs are treated as unique security origins.
```

