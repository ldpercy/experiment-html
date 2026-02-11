/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: temporal";
	appInfo = ["Experiment: temporal"];

	eventListeners = [
		{
			query: '.colourScheme-selector',
			type: 'click',
			listener: this.colourSchemeListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];




	colourSchemeListener(event) {
		event.preventDefault();
		this.setColourScheme(event.target.dataset.colourscheme);
	}





	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);

		// console.log('document.styleSheets:', document.styleSheets);

		const protocol = new URL(window.location.href).protocol;

		if (protocol === 'file:') {
			alert("You are using `file:` protocol - modules won't work");
		}
	}


}/* IndexApp */



var indexApp = new IndexApp();








