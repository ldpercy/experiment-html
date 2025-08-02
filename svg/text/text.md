Text
====




Emojis
------

Emoji rendering seems a bit variable. Some notes:

* font-style: Italics work in chromium; completely stop coloured emojis (non-dingbats) rendering in Firefox
* font-weight: bold works in chromium for dingbat characters, no difference for other characters
* font-family: doesn't seem to make much difference to emojis
* font-variant: doesn't seem to make much difference to emojis
* stroke: only works on simple glyphs, but stops emojis from rendering in firefox

Chromium in general is much better here.
To get emojis to render in firefox make sure to reset these:  font-style:normal; stroke:none;
Eg:
```
.emoji {
	font-style:normal;
	stroke:none;
}
<tspan class="emoji">🌞🌡️🔥</tspan>
```


### Firefox character box
Firefox does some weird things with emoji character boxes sometimes - baselines get chopped off.
The presence of ordinary characters seems to restore it - still investigating.

