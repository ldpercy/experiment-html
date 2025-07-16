Filter
======




Convolve matrix
---------------

Have been doing some quick tests of this for emboss/bevel type effects.

It's not clear to me yet whether it operates on pixels in terms of screen/output or in drawing units - I think it might be the former.

Also firefox and chromium seem to disagree about filter order in some cases -- still investigating.

* Filter order **matters** - eg shadow before emboss looks weird
* Effects are contextual to the group - eg look at the effect of applying `emboss-first` to just the text compared to the applied to the whole group
* There are differences in drop-shadow rendering between ff and chromium when combined with the emboss. I think chromium is wrong - it gets lighter/fainter.
