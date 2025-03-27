

function loadScript(url)
{
	//replaceScript('replaceable-script', url, genericLogger, genericLogger );
	replaceScriptPromise('replaceable-script', url, genericLogger, genericLogger );
}



//
// Turn replaceScript into a promise
//


/* replaceScript
regular version
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

	const replaceScriptPromise = new Promise((resolve, reject) => {

		const scriptElement = document.createElement('script');

		scriptElement.setAttribute('id', id);
		scriptElement.setAttribute('src', scriptUrl);
		// scriptElement.setAttribute('name', 'appendScript');
		scriptElement.addEventListener('load', (loadEvent) => resolve(loadEvent) );
		scriptElement.addEventListener('error', (errorEvent) => reject(errorEvent) );

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
}


