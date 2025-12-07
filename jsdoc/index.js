/* index.js
*/

import { HTMLApp } from "../[module]/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: JSDoc";
	info = "Experiment: JSDoc";

	eventListeners = [
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





/**
 * @typedef Parameters
 * @property	{string}	id - an ID.
 * @property	{Date}		date
 * @property	{string}	theme
 * @property	{string}	language
 */


/** @type {Parameters} */
const params = {
	id          : '1234',
	date        : new Date(),
	theme       : 'foobar',
	language    : 'Klingon',
};







