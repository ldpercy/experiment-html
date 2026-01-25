/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: temporal";
	appInfo = ["Experiment: temporal"];

	eventListeners = [
		{
			query: '#button-lightScheme',
			type: 'click',
			listener: this.colourSchemeListener
		},
		{
			query: '#button-darkScheme',
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
		const newScheme = event.target.dataset.scheme;
		this.setColourScheme(newScheme);
	}





	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);

		// console.log('document.styleSheets:', document.styleSheets);

		const protocol = new URL(window.location).protocol;

		if (protocol === 'file:') {
			alert("You are using `file:` protocol - modules won't work");
		}
	}


}/* IndexApp */



var indexApp = new IndexApp();








