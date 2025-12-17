/* index.js
*/

import { HTMLApp } from "../[common]/HTMLApp.module.js";


class IndexApp extends HTMLApp {
	name = "Experiment: temporal";
	info = "Experiment: temporal";

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

		const url = window.location;

		document.getElementById('input-url').value = url;

		const urlObj = new URL(url);

		//console.log(urlObj);


		// console.log('document.styleSheets:', document.styleSheets);

		const protocol = new URL(window.location).protocol;

		if (protocol === 'file:') {
			alert("You are using `file:` protocol - modules won't work");
		}
	}


}/* IndexApp */



var indexApp = new IndexApp();









function testIsoDate(isoString) {


	const instant = Temporal.Instant.from(isoString);

	console.log(instant);

	//const zdt = instant.toZonedDateTimeISO("America/New_York");
	const zdt = instant.toZonedDateTimeISO('Australia/Sydney');

	console.log(zdt);

}

testIsoDate("2021-07-01T12:34:56+02:00");

testIsoDate("2000-08-01T00:00:00+10:00");


