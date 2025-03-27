

log = createPageLog(document.getElementById('pageLog'));
log('overwrite.js: run');


document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('overwrite.js: documentDOMContentLoaded');
	testFunction();
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


function testFunction() {
	log('This is the initial testFunction declared in overwrite-js.js');
	log(testVariable);
	log(testObject);
	console.log(testObject);
}

