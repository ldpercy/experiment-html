/* htmlApp.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('htmlApp.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('htmlApp.js: document.DOMContentLoaded');
}