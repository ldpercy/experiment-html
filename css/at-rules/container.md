Container
=========



https://developer.mozilla.org/en-US/docs/Web/CSS/@container




Container style queries
-----------------------

```css
@container style(--themeBackground),
	not style(background-color: red),
	style(color: green) and style(background-color: transparent),
	style(--themeColor: blue) or style(--themeColor: purple) {
	/* <stylesheet> */
}
```
