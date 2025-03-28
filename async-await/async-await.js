console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}