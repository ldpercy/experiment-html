console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('css-at-rules.js: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}