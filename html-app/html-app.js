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


