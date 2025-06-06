log('load-script');


/* loadSequenceWithCallbacks
Deliberately kinda dumb.
*/
function loadSequenceWithCallbacks() {
	log('loadSequenceWithCallbacks');

	let startUrl = 'script/abcd.js';

	replaceScript('replaceable-script', startUrl,
		(()=>{
			scriptAnnounce();
			replaceScript('replaceable-script', 'script/efgh.js',
				(()=>{
					scriptAnnounce();
					replaceScript('replaceable-script', 'script/ijkl.js',
						(()=>{
							scriptAnnounce();
							// will stop here, you get the idea
						 })
					);
			 	})
			);
		})
	);
}/* loadSequenceWithCallbacks */


/* loadSequenceWithLoop
Very bad silly me, this doesn't work at all.
* /
function loadSequenceWithLoop() {
	log('loadSequenceWithLoop');

	// let scriptUrl = 'script/abcd.js';
	var scriptUrl = 'script/abcd.js';
	var counter = 1;

	while (scriptUrl && counter < 5) {
		log(`loadSequenceWithLoop: ${counter} ${scriptUrl}`);
		counter++;

		replaceScript('replaceable-script', scriptUrl,
			(()=>{
				scriptAnnounce();
				scriptUrl = getNextScript();
				log(`next script: ${scriptUrl}`);
			})
		);
	}
	log('loadSequenceWithLoop ended');
}/ * loadSequenceWithLoop */


/* loadSequenceRecursive
Works fine.
*/
function loadSequenceRecursive(scriptUrl, counter) {
	log(`loadSequenceRecursive: ${counter} ${scriptUrl}`);

	if (scriptUrl && counter < 5) {
		replaceScript('replaceable-script', scriptUrl,
			(()=>{
				scriptAnnounce();
				let nextUrl = getNextScript();
				log(`next script: ${scriptUrl}`);
				loadSequenceRecursive(nextUrl, counter+1);
			})
		);
	}
	log(`loadSequenceRecursive ${counter} ${scriptUrl} ended`);
}/* loadSequenceRecursive */




/* loadSequenceAwait
*/
function loadSequenceAwait(scriptUrl, counter) {
	log(`loadSequenceAwait: ${counter} ${scriptUrl}`);

	if (scriptUrl && counter < 5) {
		replaceScript('replaceable-script', scriptUrl,
			(()=>{
				scriptAnnounce();
				let nextUrl = getNextScript();
				log(`next script: ${scriptUrl}`);
				loadSequenceAwait(nextUrl, counter+1);
			})
		);
	}
	log(`loadSequenceAwait ${counter} ${scriptUrl} ended`);
}/* loadSequenceAwait */


function loadScript(url)
{
	log(url);
	replaceScript('replaceable-script', url, ()=>(scriptAnnounce()), scriptOnError );
}


/* replaceScript
*/
function replaceScript(id, scriptUrl, onLoad, onError) {
	//log(`replaceScript: ${id} ${scriptUrl} ${callback}`);
	let scriptElement = document.createElement('script');

	scriptElement.setAttribute('id', id);
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.addEventListener('load', onLoad);
	scriptElement.addEventListener('error', onError);

	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}



//
// replaceScript async await
//



/* aaReplaceScript
*/
async function aaReplaceScript(id, scriptUrl, onLoad, onError) {

	const replaceScriptPromise = new Promise((resolve, reject) => {

		const scriptElement = document.createElement('script');

		scriptElement.setAttribute('id', id);
		scriptElement.setAttribute('src', scriptUrl);
		// scriptElement.setAttribute('name', 'appendScript');
		scriptElement.addEventListener('load', (loadEvent) => resolve() ); //loadEvent
		scriptElement.addEventListener('error', (errorEvent) => reject() ); // errorEvent

		document.getElementById(id).remove();
		document.getElementsByTagName('head')[0].appendChild(scriptElement);
	});

	replaceScriptPromise
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

	return replaceScriptPromise;
}/* aaReplaceScript */


//handler
async function aaLoadScript(url) {
	log(url);
	try {
		//await aaReplaceScript('replaceable-script', url, ()=>(scriptAnnounce()), scriptOnError );
		aaReplaceScript('replaceable-script', url, ()=>(scriptAnnounce()), scriptOnError );
	}
	catch {
		log('aaReplaceScript failed')
	}
}
