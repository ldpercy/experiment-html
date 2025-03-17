


function onload() {

	output('onload');

	let folder = getParameterByName('folder');

	output(folder);

	let stylesheetUrl = `./${folder}/style.css`
	output(stylesheetUrl);
	addNewStylesheet(stylesheetUrl)
}