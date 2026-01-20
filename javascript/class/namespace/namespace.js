/* namespace.js
*/

ldpercy.namespace = class namespace {}

ldpercy.namespace.App = class extends HTMLApp {
	name = "namespaceApp";
	info = "namespaceApp by ldpercy";

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

