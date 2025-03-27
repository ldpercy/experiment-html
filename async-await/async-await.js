
// setup log
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');
console.clear();

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	//set listeners
	addEventListener('#script-abcd', 'click', (()=>{loadScript('script/abcd.js')}) );
	addEventListener('#script-efgh', 'click', (()=>{loadScript('script/efgh.js')}) );

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

