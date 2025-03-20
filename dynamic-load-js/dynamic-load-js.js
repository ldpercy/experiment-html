

// setup log
log = createPageLog(document.getElementById('pageLog'));

goodScriptname = /^[A-Za-z0-9-]+$/;


// bodyOnload
function bodyOnload() {
	console.clear();
	log('body: onload');

	// scriptname parameter
	let scriptname = getParameterByName('scriptname');
	log(`parameter-scriptname:  ${scriptname}`);

	if (scriptname)
	{
		if (scriptname.match(goodScriptname)){
			log('scriptname good');
			replaceScript('repscr-123', `script/${scriptname}.js`, ()=>(scriptAnnounce()) )
		}
		else {
			log('scriptname bad');
		}
	}
}



/* changeSrc
Doesn't work - src change alone seems insufficient.
Looks like the load event only fires for *new* script tags.
*/
function changeSrc(url, callback) {
	log(`changeSrc: ${url} ${callback}`);
	changeSrcElement = document.getElementById('changeSrc');
	changeSrcElement.addEventListener('load', callback);
	changeSrcElement.removeAttribute('src');
	changeSrcElement.setAttribute('src',url);
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
