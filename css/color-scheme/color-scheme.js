/* experiment-template.js
*/
console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('experiment-template.js: document.DOMContentLoaded');
}