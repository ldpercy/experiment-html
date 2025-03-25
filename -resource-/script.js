
/* URL Parameters
*/
function getParameterByName(name)
{
	const url = window.location.href
	name = name.replace(/[\[\]]/g, "\\$&")
	const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
	const results = regex.exec(url)
	if (!results) return null
	if (!results[2]) return ''
	return decodeURIComponent(results[2].replace(/\+/g, " "))
}


/* createLog
Returns a log function that logs to the console with performance timing.
Use:
	mylog = createLog();
*/
function createLog() {
	return (value) => {
		console.log(performance.now(), value);
	}
}


/* createPageLog
Returns a function that logs text to a page element and also to the console.
Optional 'value' will be fully logged to console.
Includes performance timing.
Use:
	mylog = createPageLog(myPageLogElement);
	mylog('foobar', myValue);
*/
function createPageLog(logElement) {
	return (value) => {
		logElement.innerHTML += `${performance.now()}: ${value}\n`;
		console.log(performance.now(), value);
	}
}//createPageLog


/* addEventListener
*/
function addEventListener(query, eventName, listener) {
	document.querySelectorAll(query).forEach((node) => {
		node.addEventListener(eventName,
			(event)=>listener(event)
		);
	});
}
