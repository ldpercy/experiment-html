/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: Web Component";
	appInfo = ["Experiment: Web Component"];

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



var indexApp = new IndexApp();



// Create a class for the element
class MyCustomElement extends HTMLElement {
	static observedAttributes = ["color", "size"];

	constructor() {
		// Always call super first in constructor
		super();

		/*
		let template = document.getElementById("template0");
		let templateContent = template.content;
		*/

		/** @type { HTMLTemplateElement } */
		let template = document.querySelector("#template0");
		let templateContent = template.content;

		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(templateContent.cloneNode(true));

	}

	connectedCallback() {
		console.log("Custom element added to page.");
	}

	disconnectedCallback() {
		console.log("Custom element removed from page.");
	}

	connectedMoveCallback() {
		console.log("Custom element moved with moveBefore()");
	}

	adoptedCallback() {
		console.log("Custom element moved to new page.");
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed.`);
	}
}

customElements.define("my-custom-element", MyCustomElement);





