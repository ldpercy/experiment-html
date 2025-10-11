/* HTMLApp
*/
class HTMLApp {

	log;

	constructor() {
		this.log = createPageLog(document.getElementById('pageLog'));
		this.log('HTMLPage constructor');
		document.addEventListener('DOMContentLoaded', this.documentDOMContentLoaded.bind(this));
		// adding a `.bind(this)` to the addEventListener gives the listener the instance 'this'

	}


	documentDOMContentLoaded() {
		// by default event listeners like these receive HTMLDocument as 'this'
		// and the event object as argument 0
		// HTMLDocument doesn't seem all that useful as a 'this', especially in a class context
		// adding a `.bind(this)` to the addEventListener keeps 'this' as the instance scope
		console.log('documentDOMContentLoaded', arguments, this);
		this.log('form.js: document.DOMContentLoaded');
	}



	/* addEventListener
	*/
	addEventListener(query, eventName, listener) {
		document.querySelectorAll(query).forEach((node) => {
			node.addEventListener(eventName,
				(event)=>listener(event)
			);
		});
	}/* addEventListener */



}/* HTMLApp */