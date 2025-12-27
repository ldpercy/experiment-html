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

	documentKeydownListener(event) {
		console.log('documentKeydownListener',event);
	}

	textareaKeydownListener(event) {
		console.log('textareaKeydownListener',event);
		if (event.key === 'Escape') {
			event.target.blur();
		}
		if (event.key === 'Tab') {
			event.preventDefault();	// this stops the focus change, but doesn't print a tab character
		}



	}


	textareaChangeListener(event) {
		console.log('textareaChangeListener',event);
	}




	/*
	keyFunctionMap = {
		'd'	: doCommands,
		'c'	: svg.clearDrawing,
		'o'	: toOrigin,

		'!'	: () => ui.showCommandSet(1),		// ! == shift-1
		'@'	: () => ui.showCommandSet(2),		// @ == shift-2
		'#'	: () => ui.showCommandSet(3),		// # == shift-3

		'T'	: toggleTurtle,
		'C'	: toggleCenter,
		'R'	: toggleRotate,

		'+'	: zoomIn,
		'z'	: zoomIn,
		'Z'	: zoomOut,
		'-'	: zoomOut,

		'?'	: ui.togglePopover,
	};


	documentKeyListener(event) {
		//console.log('documentKeyListener', event);

		if (keyFunctionMap[event.key]) {
			event.preventDefault();
			keyFunctionMap[event.key]();
		}

	}/ * documentKeyListener */





	//
	// Application
	//


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


var foo ="//";

