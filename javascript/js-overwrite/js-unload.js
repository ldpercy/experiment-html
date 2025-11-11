/* js-unload.js
*/
log = createPageLog(document.getElementById('pageLog'));
log('js-unload.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document.DOMContentLoaded');
}

//testFunction();

/*
	NB here - It *matters* here what kind of variables the test vars are.
	There is different behaviour for let, var or plain assignment.
	Need to test this properly, but in a different experiment.
*/


/*
	Test variables
*/

testVariable = 'Initial value of testVariable';

testObject = {
	'a' : 1,
	'b' : 2,
	'c'	: 3,
};
