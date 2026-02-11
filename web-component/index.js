/* index.js
*/

import { HTMLApp } from "../[html-common]/module/HTMLApp.js";


class IndexApp extends HTMLApp {
	name = "Experiment: Web Component";
	appInfo = ["Experiment: Web Component"];

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





