log = createPageLog(document.getElementById('pageLog'));
log('event-registration.js: run');


// Document load events
document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());	// use this mostly
// document.addEventListener('load', log('document load'));					// not this


function documentDOMContentLoaded()
{
	log('document DOMContentLoaded')
	setHandlersSimple();
	setHandlers('button.click','click',genericEventHandler);
}


function setHandlers(query, eventName, handler) {
	document.querySelectorAll(query).forEach((node) => {
		node.addEventListener(eventName,
			()=>handler()
		);
	});
}// setHandlers



function setHandlersByQuery(query) {

	const nodeList = document.querySelectorAll(query);

	nodeList.forEach((node) => {
		node.addEventListener('click',
			()=>log('click: matched button')
		);
	});
}



function setHandlersSimple() {
	document.getElementById('button-1').addEventListener('click',
		()=>log('click: button-1')
	);
	document.getElementById('button-2').addEventListener('click',
		(event)=>{genericEventHandler(event);}
	);
}


// handlers
function genericEventHandler() {
	log(arguments)
}

function logHandler() {
	log('someting happened')
}
