css-basic
=========


Inline style tags
-----------------

Not something you'd normally do, but I might possibly have a use-case for it (depending on how it works/until I find something better).
Also, just curious.

Basically if you have a bunch of mini-stylesheets in plain old `style` tags inline in the html - how do the rules affect the content around them?

### Result

Inline styles do **not** get applied progressively.

They're combined and applied as a whole to the document.

So you can't use something fairly dumb like this to target specific bits of the document, which I was speculatively aiming for.
