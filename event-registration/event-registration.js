log = createPageLog(document.getElementById('pageLog'));
log('event-registration.js: run');


// Document load events
document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());	// use this mostly
// document.addEventListener('load', log('document load'));					// not this


function documentDOMContentLoaded()
{
	log('document DOMContentLoaded')
	setSimpleHandlers();

}


function setSimpleHandlers() {
	document.getElementById('button-1').addEventListener('click',
		()=>log('click button-1')
	);

	document.getElementById('button-2').addEventListener('click',
		(event)=>{genericEventHandler(event);}
	);
}





// handlers
function genericEventHandler() {
	log(arguments)
}

