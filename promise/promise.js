
// setup
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');
console.clear();
document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());


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



function loadScript(url)
{
	//replaceScript('replaceable-script', url, genericLogger, genericLogger );
	replaceScriptPromise('replaceable-script', url, genericLogger, genericLogger );
}



// const p = new Promise();	// error, requires executor

const p = new Promise(executor);


function executor(resolveFunc, rejectFunc) {
	// Typically, some asynchronous operation that accepts a callback,
	// like the `readFile` function above
}

function resolveFunc(value) {} // call on resolved
function rejectFunc(reason) {} // call on rejected


log(p)



const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("foo");
	}, 300);
});

promise1.then((value) => {
	log(value);
	// Expected output: "foo"
});

log(promise1);
// Expected output: [object Promise]




//
// Turn replaceScript into a promise
//


/* replaceScript
*/
function replaceScript(id, scriptUrl, onLoad, onError) {

	//log(`replaceScript: ${id} ${scriptUrl}`);
	const scriptElement = document.createElement('script');

	scriptElement.setAttribute('id', id);
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.setAttribute('name', 'appendScript');
	scriptElement.addEventListener('load', onLoad);
	scriptElement.addEventListener('error', onError);

	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}


/* replaceScriptPromise
*/
function replaceScriptPromise(id, scriptUrl, onLoad, onError) {

	const p = new Promise((resolve, reject) => {

		const scriptElement = document.createElement('script');

		scriptElement.setAttribute('id', id);
		scriptElement.setAttribute('src', scriptUrl);
		// scriptElement.setAttribute('name', 'appendScript');
		scriptElement.addEventListener('load', (loadEvent) => resolve(loadEvent) );
		scriptElement.addEventListener('error', (errorEvent) => reject(errorEvent) );

		document.getElementById(id).remove();
		document.getElementsByTagName('head')[0].appendChild(scriptElement);
	});

	p
		.then(
			(value) => {
				log('then');
				log(value);
			}
		)
		.catch(
			(error) => {
				log('reject');
				log(error);
			}
		);
}
