

/* URL Parameters
*/
function getParameterByName(name)
{
	const url = window.location.href
	name = name.replace(/[\[\]]/g, "\\$&")
	const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
	const results = regex.exec(url)
	if (!results) return null
	if (!results[2]) return ''
	return decodeURIComponent(results[2].replace(/\+/g, " "))
}




function log(text) {
	console.log(text);
	document.getElementById('log').innerHTML += `${text}\n`;
}


/* addNewStylesheet
as these appear later in the document they override styles before it
*/
function addNewStylesheet(url)
{
	let linkElement = document.createElement('link');
	linkElement.rel = "stylesheet";
	//linkElement.type = "text/css";
	linkElement.href = url;
	document.getElementsByTagName('head')[0].appendChild(linkElement)
}


/* switchStylesheet
*/
function switchStylesheet(linkElement, url) {
	log(`${linkElement.id} ${url}`);
	if 	(linkElement.nodeName == "LINK" && linkElement.rel == "stylesheet" )
	{
		linkElement.href = url;
	}
	else
	{
		log('Element not stylesheet link');
	}
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
