
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
	return (text) => {
		entry = `${performance.now()}: ${text}`
		console.log(entry);
	}
}


/* createPageLog
Returns a log function that logs to a page element (as well as to the console).
Includes performance timing.
Use:
	mylog = createPageLog(myLogElement);
*/
function createPageLog(logElement) {
	return (text) => {
		entry = `${performance.now()}: ${text}`
		console.log(entry);
		logElement.innerHTML += `${entry}\n`;
	}
}