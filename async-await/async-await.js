
// setup log
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');
console.clear();

document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());


function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	addEventListener('#script-abcd', 'click', (()=>{loadScript('script/abcd.js')}) );
	addEventListener('#script-efgh', 'click', (()=>{loadScript('script/efgh.js')}) );
}


function loadScript(url)
{
	log(url);
	replaceScript('replaceable-script', url, ()=>(scriptAnnounce()));
}


// Register button events
//document.getElementById('button-rs-abcd').addEventListener('click',()=>{log('button-rs-abcd')});

document.getElementById('button-rs-foobar').addEventListener('click', ()=> {
	replaceScript('replaceable-script', 'script/foobar.js', ()=>(scriptOnload('foobar')))
});
document.getElementById('button-rs-abcd').addEventListener('click', ()=> {
	replaceScript('replaceable-script', 'script/abcd.js', ()=>(scriptOnload('abcd')))
});
document.getElementById('button-rs-efgh').addEventListener('click', ()=> {
	replaceScript('replaceable-script', 'script/efgh.js', ()=>(scriptOnload('efgh')))
});


/* replaceScript
*/
function replaceScript(id, scriptUrl, callback) {
	log(`replaceScript: ${id} ${scriptUrl} ${callback}`);

	let scriptElement = document.createElement('script');
	scriptElement.setAttribute('id', id);
	scriptElement.setAttribute('src', scriptUrl);
	scriptElement.addEventListener('load', callback);

	document.getElementById(id).remove();
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}


// local callbacks

/* scriptLoaded
*/
function scriptOnload(message) {
	log(`scriptOnload: ${message}`);
}
