console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('experiment-template: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}