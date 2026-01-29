/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('experiment-template.js: document.DOMContentLoaded');
}




function randomCharacter(string) {
	const charArray = string.split('');
	const index = Math.floor(Math.random() * charArray.length);
	return charArray[index];
}

function randomString(string,length) {
	let result = '';
	for (let i=0;i<length;i++) {
		result += randomCharacter(string);
	}
	return result;
}

