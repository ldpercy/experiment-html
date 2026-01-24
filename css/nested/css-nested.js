


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



function getNewContent(id, css) {
	const newContent = `
		<div id="${id}">
			<style>	#${id} { ${css} } </style>
			<p>This is new content: ${new Date()}</p>
		</div>
	`;
	return newContent;
}

function removeElement(id){
	document.getElementById(id).remove();
}


function addNewContent() {
	const css = `p { color:${randomRGB()}; background-color:${randomRGB()}; border:1ex dashed ${randomRGB()}; }`;

	const id = `id-${Math.round((Math.random()*255))}`;

	document.getElementById('newContent').innerHTML += getNewContent(id,css);
}


function randomRGB() {
	const r = Math.round((Math.random()*255));
	const g = Math.round((Math.random()*255));
	const b = Math.round((Math.random()*255));
	return `rgb(${r},${g},${b})`;
}