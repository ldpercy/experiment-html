log = createPageLog(document.getElementById('pageLog'));
log('event-registration.js: run');


// Document load events
document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());	// use this mostly
// document.addEventListener('load', log('document load'));					// not this


function documentDOMContentLoaded()
{
	log('document DOMContentLoaded')
	setHandlersSimple();

	//addEventListener('button.click','click',dumbHandler);
	//addEventListener('button.click','click',genericHandler);
	addEventListener('button.click','click', ((event)=>{eventHandler(event);}) );

}


function setHandlersSimple() {
	document.getElementById('button-1').addEventListener('click',
		()=>log('click: button-1')
	);
	document.getElementById('button-2').addEventListener('click',
		(event)=>{genericHandler(event);}
	);
}


// handlers
function eventHandler(event) {
	log('eventHandler', event)
}

function genericHandler() {
	log('genericHandler', arguments)
}

function dumbHandler() {
	log('something happened')
}
