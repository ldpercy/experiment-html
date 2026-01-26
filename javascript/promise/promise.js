
// setup

console.log('async-await: run');
console.clear();
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


function documentDOMContentLoaded() {

	// listeners
	addEventListener('#button-script-abcd', 'click',
		(()=>{loadScript('script/abcd.js')})
	);

	addEventListener('#button-script-missing', 'click',
		(()=>{loadScript('script/efgh.js')})
	);

	//onclick="replaceScript('repscr-123', 'script/missing.js', ()=>(scriptOnload('missing')), scriptOnError )"

	//replaceScriptPromise(id, scriptUrl, onLoad, onError)
}


/* addEventListener
*/
function addEventListener(query, eventName, listener) {
	document.querySelectorAll(query).forEach((node) => {
		node.addEventListener(eventName,
			(event)=>listener(event)
		);
	});
}
