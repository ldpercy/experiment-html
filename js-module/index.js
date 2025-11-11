/* index.js
*/


class IndexApp extends HTMLApp {
	name = "IndexApp";
	info = "IndexApp by ldpercy";

	eventListeners = [
		{
			query: '#button-lightMode',
			type: 'click',
			listener: this.modeClickListener
		},
		{
			query: '#button-darkMode',
			type: 'click',
			listener: this.modeClickListener
		},
		/* {
			query: '#myForm',
			type: 'change',
			listener: this.formChangeListener
		}, */
	];




	modeClickListener(event) {
		//console.log(event.target.attributes); //attributes['value']
		const newMode = event.target.attributes['mode'].value;
		this.setMode(newMode);
	}


	setMode(mode) {
		//console.log('setMode', mode);
		if (mode === 'light')
		{
			document.documentElement.classList.replace('dark','light') ;
		}
		else {
			document.documentElement.classList.replace('light','dark') ;
		}
		localStorage.mode = mode;
	}


	documentDOMContentLoaded() {
		super.documentDOMContentLoaded();
		this.setMode(localStorage.mode);

		const url = window.location;

		document.getElementById('input-url').value = url;

		const urlObj = new URL(url);

		//console.log(urlObj);


		// console.log('document.styleSheets:', document.styleSheets);

		const protocol = new URL(window.location).protocol;

		if (protocol === 'file:') {
			alert("You are using `file:` protocol - modules won't work");
		}
	}


}/* IndexApp */



var indexApp = new IndexApp();


