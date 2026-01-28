Text
====



Text Path
---------

**Has** to be inside a `text` element otherwise does not render:

```
	<text>
		<textPath class="" startOffset="50%" href="#labelPath-monthName-jan">January</textPath>
	</text>
```





Emojis
------

Emoji rendering seems a bit variable. Some notes:

* font-style: Italics work in chromium; completely stop coloured emojis (non-dingbats) rendering in Firefox
* font-weight: bold works in chromium for dingbat characters, no difference for other characters
* font-family: doesn't seem to make much difference to emojis
* font-variant: doesn't seem to make much difference to emojis
* stroke: only works on simple glyphs, but stops emojis from rendering in firefox
* fill-opacity: stops emojis working in firefox for anything other than 100%;

Chromium in general is much better here.
To get emojis to render in firefox make sure to reset these:  font-style:normal; stroke:none;
Eg:
```
.emoji {
	font-style:normal;
	stroke:none;
	fill-opacity:100%;
}
<tspan class="emoji">🌞🌡️🔥</tspan>
```


### Firefox character box
Firefox does some weird things with emoji character boxes sometimes - baselines get chopped off.
The presence of ordinary characters seems to restore it - still investigating.

