Silver data test
================

I've been staring at this for a day or so now, not coming up with a solution.
It's not that difficult, just having trouble deciding what I want here.

Lets forget about tests for a sec and just think about directories.

Given:
```
/
	foo/
		subdir/
			subfile1
			subfile2
		emptydir/
		foofile1
		foofile2
	bar/
		barfile1
		barfile2
	slashfile1
	slashfile2
```
I want:
```
/
	slashfile1
	slashfile2
/foo/
	foofile1
	foofile2
/foo/subdir/
	subfile1
	subfile2
/foo/emptydir/
/bar/
	barfile1
	barfile2
```

So it's basically something like a flatmap of some sort...


