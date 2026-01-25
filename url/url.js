/* url.js
*/


class UrlApp extends HTMLApp {
	name = "UrlApp";
	info = "UrlApp by ldpercy";

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

		console.log(urlObj);

	}


}/* TestApp */



var urlApp = new UrlApp();


