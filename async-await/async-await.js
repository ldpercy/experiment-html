
// setup log
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');
console.clear();

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	// Listeners
	addEventListener('#button-aa-load-abcd', 'click', (()=>{aaLoadScript('script/abcd.js')}) );
	addEventListener('#button-aa-load-efgh', 'click', (()=>{aaLoadScript('script/efgh.js')}) );
	addEventListener('#button-aa-load-missing', 'click', (()=>{aaLoadScript('script/missing.js')}) );

	addEventListener('#button-load-abcd', 'click', (()=>{loadScript('script/abcd.js')}) );
	addEventListener('#button-load-efgh', 'click', (()=>{loadScript('script/efgh.js')}) );

	addEventListener('#load-sequence-with-callbacks', 'click', loadSequenceWithCallbacks );
	//addEventListener('#load-sequence-with-loop', 'click', loadSequenceWithLoop );
	addEventListener('#load-sequence-recursive', 'click', (()=>{loadSequenceRecursive('script/abcd.js',1)}) );
	addEventListener('#load-sequence-await', 'click', (()=>{loadSequenceAwait('script/abcd.js',1)}) );
}



//
// local callbacks
//

function scriptOnload() {
	log(arguments);
}

function scriptOnError() {
	log(arguments);
}

