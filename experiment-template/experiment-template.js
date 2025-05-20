console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template.js: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}