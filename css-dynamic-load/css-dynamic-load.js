// dynamic-load-css.js

console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('css-dynamic-load.js: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


/* documentDOMContentLoaded
*/
function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	dynamicStylesheet = document.getElementById('dynamicStylesheet');

	let style = getParameterByName('style');

	log(style);

	let stylesheetUrl = `./style/${style}.css`
	log(stylesheetUrl);
	// addNewStylesheet(stylesheetUrl)

	dynamicStylesheet = document.getElementById('dynamicStylesheet');
	switchStylesheet(dynamicStylesheet,stylesheetUrl)
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
