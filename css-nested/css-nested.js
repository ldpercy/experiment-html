console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('css-nested.js: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}


var newCSS = `
	p {
		border: 1px solid red;
		border-radius:1em;
		background-color:pink;
		padding:1em;
		font-family:serif;
	}
`;

var dynStyleElement = document.getElementById('dynStyle');


function modifyDynCSS() {

	dynStyleElement.innerHTML = newCSS;

}/* modifyCSS */



function targetDynCSS() {

	let targetedCSS = `
		div#para3 { ${newCSS} }
	`;
	dynStyleElement.innerHTML = targetedCSS;
}/* targetDynCSS */


function clearDynCSS() {
	dynStyleElement.innerHTML = '';
}/* clearDynCSS */
