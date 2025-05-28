console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('css-basic.js: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}