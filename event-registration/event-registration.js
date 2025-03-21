log = createPageLog(document.getElementById('pageLog'));
log('event-registration.js: run');


// Document load events
document.addEventListener("DOMContentLoaded", log('document DOMContentLoaded'));
document.addEventListener('load', log('document load'));


function documentDOMContentLoaded()
{


}







// handlers
function genericEventHandler() {
	log(arguments)
}

