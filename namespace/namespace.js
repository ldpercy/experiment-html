/* namespace.js
*/

ldpercy.namespace = class namespace {}

ldpercy.namespace.App = class extends HTMLApp {
	name = "namespaceApp";
	info = "namespaceApp by ldpercy";

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

	}


}/* NamespaceApp */



ldpercy.namespace.app = new ldpercy.namespace.App();



// VSCode syntax highlights these two slightly differently:

class foo1 {}
foo1.name = "foo1";
foo1.bar = class {}
// class foo1.asdf {}		// doesn't work?
// class foo1['asdf'] {}	// doesn't work either

foo2 = class {}
foo2.name = "foo2";
foo2.bar = class {}

