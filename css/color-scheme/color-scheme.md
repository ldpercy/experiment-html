Color scheme
============




https://medium.com/@cerutti.alexander/a-mostly-complete-guide-to-theme-switching-in-css-and-js-c4992d5fd357
https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/



Browser widgets
---------------
.dark {
	color-scheme: dark;
}


.light {
	color-scheme: light;
}




Media Queries
-------------

```css
	@media (prefers-color-scheme: dark) {
	/* Dark theme styles go here */
	}

	@media (prefers-color-scheme: light) {
	/* Light theme styles go here */
	}
```

Enable dark/light mode
----------------------

<meta name="color-scheme" content="dark light">