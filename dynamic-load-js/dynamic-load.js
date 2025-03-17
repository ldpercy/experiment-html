
// bodyOnload
function bodyOnload() {
	log('body: onload');

	srcScriptElement = document.getElementById('srcScript');

	let folder = getParameterByName('folder');

	log(`folder: ${folder}`);

	/*
	let stylesheetUrl = `./${folder}/style.css`
	log(stylesheetUrl);
	// addNewStylesheet(stylesheetUrl)

	dynamicStylesheet = document.getElementById('dynamicStylesheet');
	switchStylesheet(dynamicStylesheet,stylesheetUrl)
	*/
}



/* updateSrc
Not working - doesn't look like you can just change the src.
*/
function updateSrc(url, callback) {
	log(`updateSrc: ${url} ${callback}`);
	// srcScriptElement.src = url;
	srcScriptElement.setAttribute('src',url);
	//if (callback) callback();
}


/* appendScript
*/
function appendScript(scriptUrl, callback) {
	log(`appendScript: ${scriptUrl} ${callback}`);

	let scriptElement = document.createElement('script');
	//if (callback) scriptElement.onload = callback()

	if (callback) scriptElement.addEventListener('load', callback);
	scriptElement.addEventListener('readystatechange', scriptReadystatechange);	// doesn't seem to fire
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.setAttribute('name', 'appendScript');
	let id = String(Math.random()).substring(2,6);
	scriptElement.setAttribute('id', id);
	log(`appendScript: id = ${id}`);


	document.head.appendChild(scriptElement);
}




function replaceScript(id, scriptUrl, callback)
{
	let scriptElement = document.createElement('script');
	//script.type = 'text/javascript';
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.setAttribute('name', 'appendScript');
	scriptElement.setAttribute('id', id);
	scriptElement.addEventListener('load', callback);

	// then bind the event to the callback function
	// there are several events for cross browser compatibility
	//script.onreadystatechange = callback;
	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}




// This fires before anything in the script itself, but cannot be defined in the loaded script
function scriptLoaded(message) {
	log(`scriptLoaded: ${message}`);
	//dynScriptLoaded();
}


function scriptReadystatechange(message) {
	log(`scriptReadystatechange: ${message}`);
}
