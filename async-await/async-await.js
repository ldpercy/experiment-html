
// setup log


log = createPageLog(document.getElementById('prelog'));


// bodyOnload
function bodyOnload() {
	console.clear();
	log('body: onload');
}


/* replaceScript
*/
function replaceScript(id, scriptUrl, callback) {
	log(`replaceScript: ${id} ${scriptUrl} ${callback}`);

	let scriptElement = document.createElement('script');
	scriptElement.setAttribute('id', id);
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.addEventListener('load', callback);

	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}


// local callbacks

/* scriptLoaded
*/
function scriptOnload(message) {
	log(`scriptOnload: ${message}`);
}
