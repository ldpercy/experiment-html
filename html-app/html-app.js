/* html-app.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('html-app.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('html-app.js: document.DOMContentLoaded');
}