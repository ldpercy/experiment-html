/* index.js
*/


class IndexApp extends HTMLApp {
	name = "IndexApp";
	info = "IndexApp by ldpercy";

	eventListeners = [
		{
			query: '#button-lightScheme',
			type: 'click',
			listener: this.colourSchemeListener
		},
		{
			query: '#button-darkScheme',
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
		const newScheme = event.target.dataset.scheme;
		this.setColourScheme(newScheme);
	}





	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setColourScheme(localStorage.colourScheme);

		const url = window.location;

		document.getElementById('input-url').value = url;

		const urlObj = new URL(url);

		//console.log(urlObj);


		//console.log('document.styleSheets:', document.styleSheets);

		console.log('Your protocol is:', new URL(window.location).protocol);

	}


}/* IndexApp */



var indexApp = new IndexApp();


