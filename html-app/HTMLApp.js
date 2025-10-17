/* HTMLApp
*/
class HTMLApp {

	// instance = this;

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
		//console.debug('HTMLApp.constructor', this);
		document.addEventListener('DOMContentLoaded', this.documentDOMContentLoaded.bind(this));
		// adding a `.bind(this)` to the addEventListener gives the listener the instance 'this'
	}


	documentDOMContentLoaded() {
		// by default event listeners like these receive the originating element as 'this' (here HTMLDocument)
		// and the event object as argument 0
		// HTMLDocument doesn't seem all that useful as a 'this', especially in a class context
		// adding a `.bind(this)` to the addEventListener keeps 'this' as the instance scope

		//console.log('documentDOMContentLoaded', arguments, this);
		this.addEventListeners();
		console.info(this.info);
	}/* documentDOMContentLoaded */



	addEventListeners() {
		let listenerFunction;
		//console.debug('HTMLApp.addEventListeners', arguments, instance);
		this.eventListeners.forEach(
			(item) => {
				//this.addEventListener(item.query, item.event, item.listener);
				document.querySelectorAll(item.query).forEach((node) => {
					//console.debug('HTMLApp.addEventListener node', node);
					//listenerFunction = item.listener();	// this evaluation required at the moment; try to find better solution though
					//console.debug('HTMLApp.addEventListeners listenerFunction', listenerFunction);
					node.addEventListener(
						item.type,
						//listenerFunction.bind(this)
						item.listener
					);//addEventListener
				}); //
			}//item
		);
	}/* addEventListeners */



}/* HTMLApp */