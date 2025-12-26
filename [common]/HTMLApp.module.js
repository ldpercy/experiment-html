/* HTMLApp
*/
export class HTMLApp {

	name = 'HTMLApp';
	info = 'HTMLApp by ldpercy';

	eventListeners = [
		/* Example instance setup:
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
		*/
	];


	constructor() {
		document.addEventListener('DOMContentLoaded', this.documentDOMContentLoaded.bind(this));
		// adding a `.bind(this)` to the addEventListener gives the listener the instance 'this'
	}


	documentDOMContentLoaded() {
		console.info(this.info);
		this.addEventListeners();
	}


	/* addEventListeners
	*/
	addEventListeners() {
		// by default event listeners like these receive the originating element as 'this' (here HTMLDocument)
		// and the event object as argument 0
		// HTMLDocument doesn't seem all that useful as a 'this', especially in a class context
		// adding a `.bind(this)` to the addEventListener keeps 'this' as the instance scope

		// NB Might need updating for other modules/classes/components
		// Also the root node might need changing for SVG? Not sure yet.

		this.eventListeners.forEach(
			(item) => {
				if (item.element) {
					item.element.addEventListener(
						item.type,
						item.listener.bind(this)
					);
				} else if (item.query) {
					document.querySelectorAll(item.query).forEach((node) => {
						//console.debug('HTMLApp.addEventListeners item.listener', item.listener);
						node.addEventListener(
							item.type,
							item.listener.bind(this)
						);//addEventListener
					});
				}
			}//item
		);
	}/* addEventListeners */


	/* getUrlParameter
	*/
	getUrlParameter(name)
	{
		return (new URL(window.location.href)).searchParams.get(name);
	}




}/* HTMLApp */


