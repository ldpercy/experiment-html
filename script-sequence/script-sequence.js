
// setup log
log = createPageLog(document.getElementById('pageLog'));
log('script-sequence: run');
console.clear();


document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


function documentDOMContentLoaded() {
	log('document DOMContentLoaded');
}