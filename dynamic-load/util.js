

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


function output(text) {
	document.getElementById('output').innerHTML += `${text}\n`;
}




function addNewStylesheet(url)
{
	let linkElement = document.createElement('link');
	linkElement.rel = "stylesheet";
	linkElement.type = "text/css";
	linkElement.href = url;
	document.getElementsByTagName('head')[0].appendChild(linkElement)
}



function switchStylesheet(linkElement, url) {
	if 	(linkElement.nodeName == "LINK" && linkElement.rel == "stylesheet" )
	{
		linkElement.href = url;
	}
	else
	{
		output('Element not stylesheet link');
	}
}


