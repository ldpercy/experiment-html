

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
