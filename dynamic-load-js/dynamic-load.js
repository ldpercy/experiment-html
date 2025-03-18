

// setup log
log = createPageLog(document.getElementById('prelog'));


// bodyOnload
function bodyOnload() {
	console.clear();
	log('body: onload');

	let folder = getParameterByName('folder');
	log(`folder: ${folder}`);

}



/* changeSrc
Not working - doesn't look like you can just change the src.
*/
function changeSrc(url, callback) {
	log(`changeSrc: ${url} ${callback}`);
	changeSrcElement = document.getElementById('changeSrc');
	// changeSrcElement.src = url;
	changeSrcElement.removeAttribute('src');
	changeSrcElement.setAttribute('src',url);
	//if (callback) callback();
}


/* appendScript
*/
function appendScript(scriptUrl, callback)
 {
	log(`appendScript: ${scriptUrl} ${callback}`);
	let scriptElement = document.createElement('script');

	// create semi-unique id
	let id = String(Math.random()).substring(2,6);
	scriptElement.setAttribute('id', id);
	log(`appendScript: id = ${id}`);

	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.setAttribute('name', 'appendScript');
	scriptElement.addEventListener('load', callback);
	scriptElement.addEventListener('readystatechange', scriptReadystatechange);	// doesn't seem to fire

	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}



/* replaceScript
*/
function replaceScript(id, scriptUrl, callback) {

	log(`replaceScript: ${id} ${scriptUrl} ${callback}`);
	let scriptElement = document.createElement('script');

	scriptElement.setAttribute('id', id);

	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.setAttribute('name', 'appendScript');
	scriptElement.addEventListener('load', callback);
	scriptElement.addEventListener('readystatechange', scriptReadystatechange);

	// then bind the event to the callback function
	// there are several events for cross browser compatibility
	//script.onreadystatechange = callback;
	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}




// local callbacks

/* scriptLoaded
This fires before anything in the script itself, so cannot be used call anything in the loaded script
*/
function scriptOnload(message) {
	log(`scriptOnload: ${message}`);
}


function scriptReadystatechange(message) {
	log(`scriptReadystatechange: ${message}`);
}
