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

