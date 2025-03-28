console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	addEventListener('#button-test-1', 'click', asyncCall );
}
