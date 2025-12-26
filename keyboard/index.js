/* index.js
*/

import { HTMLApp } from "../[common]/HTMLApp.module.js";


class IndexApp extends HTMLApp {
	name = "Experiment: keyboard";
	info = "Experiment: keyboard";

	eventListeners = [
		{
			element: document,
			type: 'keydown',
			listener: this.documentKeydownListener
		},
		{
			query: 'textarea',
			type: 'keydown',
			listener: this.textareaKeydownListener
		},
		{
			query: 'textarea',
			type: 'change',
			listener: this.textareaChangeListener
		},


		{
			query: '#button-lightMode',
			type: 'click',
			listener: this.modeClickListener
		},
		{
			query: '#button-darkMode',
			type: 'click',
			listener: this.modeClickListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];

	documentKeydownListener(event) {
		console.log('documentKeydownListener',event)
	}

	textareaKeydownListener(event) {
		console.log('textareaKeydownListener',event)
	}


	textareaChangeListener(event) {
		console.log('textareaChangeListener',event)
	}






	modeClickListener(event) {
		//console.log(event.target.attributes); //attributes['value']
		const newMode = event.target.attributes['mode'].value;
		this.setMode(newMode);
	}


	setMode(mode) {
		//console.log('setMode', mode);
		if (mode === 'light')
		{
			document.documentElement.classList.replace('dark','light') ;
		}
		else {
			document.documentElement.classList.replace('light','dark') ;
		}
		localStorage.mode = mode;
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setMode(localStorage.mode);


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




