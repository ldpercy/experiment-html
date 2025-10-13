Common
======


createPageLog
-------------

Wrote this a while back to wrap up timing and page logging, but it's looking a bit old-hat.
There are a bunch more methods in console that I'm starting to use, so log alone maybe isn't enough, and timing could probably be done in other ways.
I could proxy some more methods, but not sure I want to.





HTMLApp
-------

Going to try to combine a few common page setup features into a small class.

For event registration I think it'll need to be split it into two phases
1. Register initial DOMContentLoaded event at load/instantitaion time
2. Register all remaining events when that one fires

I'm simultaneously using/developing this in a couple of other places so will collect together what's current here.
