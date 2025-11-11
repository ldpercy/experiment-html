JS Overwrite
============

Related to the dynamic load experiment, just want to clear up what happens when you load multiple scripts that declare/assign the same values - functions, variables etc.

Result
------
It works as expected, variables and functions are directly overwritten.
Not surprising I guess.



Unload?
-------

As a quick follow up I want to try the reverse an see what happens when you *remove* script tags.
I'm 90% sure that it won't actually change anything, but hey you don't know 'til you try.

**Result**
Yep it's as I thought it would be - just removing the script tags from the document makes no difference to what's loaded and available.

There may be *other* ways to unload a script, but this aint it.

