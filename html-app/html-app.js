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
			query: '#myForm',
			type: 'change',
			listener: ()=>this.formChangeListener
		},
		{
			query: '#myButton',
			type: 'click',
			listener: ()=>this.buttonClickListener
		},
	];


	formChangeListener() {
		console.log('formChangeListener arguments', arguments);
		console.log('formChangeListener this', this);
	}

	buttonClickListener() {
		console.log('buttonClickListener arguments', arguments);
		console.log('buttonClickListener this', this);
	}



}/* TestApp */



var testApp = new TestApp();



// Non-app event registration:

document.getElementById('nonAppButton-normalFunction').addEventListener('click',

	function(event) {
		console.log('nonAppButton-normalFunction arguments', arguments);
		console.log('nonAppButton-normalFunction event', event);
		console.log('nonAppButton-normalFunction this', this);				// receives button as 'this'
	}
);


document.getElementById('nonAppButton-arrowFunction').addEventListener('click',
	() => {
		//console.log('nonAppButton-arrowFunction arguments', arguments);	// weirdly the arguments array is undefined in here
		console.log('nonAppButton-arrowFunction event', event);
		console.log('nonAppButton-arrowFunction this', this);				// receives window as 'this'
	}
);


