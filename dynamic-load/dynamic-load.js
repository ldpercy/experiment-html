


function onload() {


	output('onload');
	output('onload');

	folder = getParameterByName('folder');

	output(folder);

	let cssUrl = `./${folder}/style.css`
	output(cssUrl);
	loadCSS(cssUrl)

}