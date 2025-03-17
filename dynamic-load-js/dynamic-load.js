

function bodyOnload() {
	log('body onload');

	dynamicStylesheet = document.getElementById('dynamicStylesheet');
	dynamicScript = document.getElementById('dynamicScript');


	let folder = getParameterByName('folder');

	log(folder);

	let stylesheetUrl = `./${folder}/style.css`
	log(stylesheetUrl);
	// addNewStylesheet(stylesheetUrl)


	dynamicStylesheet = document.getElementById('dynamicStylesheet');
	switchStylesheet(dynamicStylesheet,stylesheetUrl)
}



// This fires before anything in the script itself, but cannot be defined in the loaded script
function scriptLoaded(message) {
	log(`scriptLoaded: ${message}`);
	//dynScriptLoaded();
}


function scriptReadystatechange(message) {
	log(`scriptReadystatechange: ${message}`);
}



function loadScript(url, callback)
{
	// adding the script element to the head as suggested before
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	// then bind the event to the callback function
	// there are several events for cross browser compatibility
	script.onreadystatechange = callback;
	script.onload = callback;

	// fire the loading
	head.appendChild(script);
}


/* switchScript
Not working - doesn't look like you can just change the src.
*/
function switchScript(scriptElement, url, callback) {
	log(`${scriptElement.id} ${url} ${callback}`);
	if 	(scriptElement.nodeName == "SCRIPT")
	{
		scriptElement.src = url;
		if (callback) callback();
	}
	else
	{
		log('Element not link');
	}
}

/* loadScript
*/
function loadScript(scriptUrl, callback) {
	log(`${scriptUrl} ${callback}`);

	var scriptElement = document.createElement('script');
	//if (callback) scriptElement.onload = callback()
	if (callback) scriptElement.addEventListener('load', callback);
	scriptElement.addEventListener('readystatechange', scriptReadystatechange);	// doesn't seem to fire
	scriptElement.setAttribute('src', scriptUrl);

	document.head.appendChild(scriptElement);
};
