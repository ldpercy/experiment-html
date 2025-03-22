
// setup log
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');
console.clear();

document.addEventListener("DOMContentLoaded", documentDOMContentLoaded());


function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	addEventListener('#load-sequence-with-callbacks', 'click', loadSequenceWithCallbacks );

	addEventListener('#script-abcd', 'click', (()=>{loadScript('script/abcd.js')}) );
	addEventListener('#script-efgh', 'click', (()=>{loadScript('script/efgh.js')}) );
}



function loadSequenceWithCallbacks() {
	log('loadSequenceWithCallbacks');

	let startUrl = 'script/abcd.js';

	replaceScript('replaceable-script', startUrl,
		(()=>{
			scriptAnnounce();
			replaceScript('replaceable-script', 'script/efgh.js',
				(()=>{
					scriptAnnounce();
					replaceScript('replaceable-script', 'script/ijkl.js',
						(()=>{
							scriptAnnounce();
							// will stop here, you get the idea
						 })
					);
			 	})
			);
		})
	);
}// loadSequenceWithCallbacks


/*
	let nextUrl = getNextUrl();
	if (nextUrl) {
		replaceScript('replaceable-script', nextUrl,
			(()=>{
				scriptAnnounce();
				let nextUrl = getNextUrl();
				if (nextUrl)
				{

				}
			})
		);
	}
*/

function loadStep() {

	return getNextScript()
}


function loadScript(url)
{
	log(url);
	replaceScript('replaceable-script', url, ()=>(scriptAnnounce()));
}


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
