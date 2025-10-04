//
// js-function.js
//

console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('js-function.js: document.DOMContentLoaded');
}





function myFunc(p) {
	return p
}

//
// function types
//

function fs(p) {

	/* nested functions, no scoping
	function sfs()   { return this; }	// unreachable from outside, returns Window
	sfe = function() { return this; }	// globally scoped, returns Window
	saf = () =>      { return this; }	// globally scoped, returns Window
	// return sfs();
	*/


	/* sub functions, var scope */
	var sfe = function() { return this; }	// globally scoped, returns Window
	var saf = () =>      { return this; }	// globally scoped, returns Window

	return sfe();

	//return this; // returns Window
}/* fs */


fe = function(p) {
	// return this; // returns Window
}/* fe */


af = (p) => {
	//return this; // returns Window
}

/*
Each returns 'Window' for 'this' which is unexpected, esp for the arrow fn.
*/




function defaultTest(
	name = 'default name',
	description = `default desc: ${name}`
){


	return `${name}; ${description}`

	/*
	can a function's argument defaults use other argument defaults?
	*/

}


