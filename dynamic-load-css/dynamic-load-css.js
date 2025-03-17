
function bodyOnload() {
	log('body onload');

	dynamicStylesheet = document.getElementById('dynamicStylesheet');

	let folder = getParameterByName('folder');

	log(folder);

	let stylesheetUrl = `./${folder}/style.css`
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
