/* index.js
*/

import { HTMLApp } from "../../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: JSDoc";
	appInfo = ["Experiment: JSDoc"];

	eventListeners = [
		{
			query: '#button-lightScheme',
			type: 'click',
			listener: this.schemeClickListener
		},
		{
			query: '#button-darkScheme',
			type: 'click',
			listener: this.schemeClickListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];




	schemeClickListener(event) {
		const newScheme = event.target.dataset.scheme;
		this.setScheme(newScheme);
	}


	setScheme(scheme) {
		//console.log('setMode', mode);
		if (scheme === 'light')
		{
			document.documentElement.classList.replace('dark','light') ;
		}
		else {
			document.documentElement.classList.replace('light','dark') ;
		}
		localStorage.scheme = scheme;
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setScheme(localStorage.scheme);


		/*
		const url = window.location;
		document.getElementById('input-url').value = url;
		const urlObj = new URL(url);
		console.log(urlObj);
		*/


		// console.log('document.styleSheets:', document.styleSheets);


	}


}/* IndexApp */


/** @type {IndexApp} */
var indexApp = new IndexApp();








/** @type {FooParameters} */
const params = {
	id          : '1234',
	date        : new Date(),
	theme       : 'foobar',
	language    : 'Klingon',
};




/** @type {NewType} */
const foo = {
	name: '',
	date: new Date(),
	description: '',
};

