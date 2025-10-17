/* html-app.js
*/

log = createPageLog(document.getElementById('pageLog'));
log('html-app.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('html-app.js: document.DOMContentLoaded');
}


class TestApp extends HTMLApp {
	name = "TestApp";
	info = "TestApp by ldpercy";

	eventListeners = [
		{
			query: '#myButton',
			type: 'click',
			listener: this.buttonClickListener
			//listener: this.buttonClickListenerWithBindThis.bind(this)
			//listener: () => { return this.buttonClickListenerIIFE(event, this); }
		},
		{
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
			//listener: this.formChangeListenerWithBindThis.bind(this)
			//listener: ((event,this) => { return this.formClickListenerIIFE(event, this); } )
		},
	];


	// raw listeners
	// comments are true when 'this' unbound, but I'm changing it back to binding by default

	buttonClickListener() {
		console.log('buttonClickListener arguments', arguments);			// arguments[0] = click
		console.log('buttonClickListener event', event);					// event	= click
		console.log('buttonClickListener event.target', event.target);		// target	= button
		console.log('buttonClickListener this', this);						// this		= button
	}

	formChangeListener() {
		console.log('formChangeListener arguments', arguments);				// arguments[0] = change
		console.log('formChangeListener event', event);						// event	= change
		console.log('formChangeListener event.target', event.target);		// target	= checkbox
		console.log('formChangeListener this', this);						// this		= form
	}


	// listeners with bind(this)

	buttonClickListenerWithBindThis() {
		console.log('buttonClickListenerWithBindThis arguments', arguments);			// arguments[0] = click
		console.log('buttonClickListenerWithBindThis event', event);					// event	= click
		console.log('buttonClickListenerWithBindThis event.target', event.target);		// target	= button
		console.log('buttonClickListenerWithBindThis this', this);						// this		= instance
	}

	formChangeListenerWithBindThis() {
		console.log('formChangeListenerWithBindThis arguments', arguments);				// arguments[0] = change
		console.log('formChangeListenerWithBindThis event', event);						// event	= change
		console.log('formChangeListenerWithBindThis event.target', event.target);		// target	= checkbox
		console.log('formChangeListenerWithBindThis this', this);						// this		= instance
	}


	// IIFE listeners

	buttonClickListenerIIFE() {
		console.log('buttonClickListenerIIFE arguments', arguments);			// arguments[0] = click
		console.log('buttonClickListenerIIFE event', event);					// event	= click
		console.log('buttonClickListenerIIFE event.target', event.target);		// target	= button
		console.log('buttonClickListenerIIFE this', this);						// this		= instance
	}

	formChangeListenerIIFE() {
		console.log('formChangeListenerIIFE arguments', arguments);				// arguments[0] = change
		console.log('formChangeListenerIIFE event', event);						// event	= change
		console.log('formChangeListenerIIFE event.target', event.target);		// target	= checkbox
		console.log('formChangeListenerIIFE this', this);						// this		= instance
	}



}/* TestApp */



var testApp = new TestApp();




//
// Non-app event registrations for comparison:
//

document.getElementById('nonAppButton-normalFunction').addEventListener('click',

	function(event) {
		console.log('nonAppButton-normalFunction arguments', arguments);			// has normal arguments array
		console.log('nonAppButton-normalFunction event', event);					// event	= click
		console.log('nonAppButton-normalFunction event.target', event.target);		// target	= button
		console.log('nonAppButton-normalFunction this', this);						// this		= button

	}
);


document.getElementById('nonAppButton-arrowFunction').addEventListener('click',
	() => {
		//console.log('nonAppButton-arrowFunction arguments', arguments);			// arguments is undefined
		console.log('nonAppButton-arrowFunction event', event);						// event	= click
		console.log('nonAppButton-arrowFunction event.target', event.target);		// target	= button
		console.log('nonAppButton-arrowFunction this', this);						// this		= window
	}
);




