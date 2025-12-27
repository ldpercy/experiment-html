/* url.js
*/


class UrlApp extends HTMLApp {
	name = "UrlApp";
	info = "UrlApp by ldpercy";

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

		const url = window.location;

		document.getElementById('input-url').value = url;

		const urlObj = new URL(url);

		console.log(urlObj);

	}


}/* TestApp */



var urlApp = new UrlApp();


