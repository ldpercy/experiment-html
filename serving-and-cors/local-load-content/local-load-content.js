// local-load-content.js

console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('local-load-content.js: run');
document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);


function documentDOMContentLoaded() {

	// listeners
	addEventListener('#button-load-fetch', 'click', fetchHandler);

	addEventListener('#button-load-xhr', 'click',
		(()=>{loadScript('script/efgh.js')})
	);
}


function fetchHandler() {
	url = document.getElementById('input-text-file').value;
	fetchFile(url);

}


//
// fetch
//


async function fetchFile(url) {
	log(url);
	try {
		const response = await fetch(
			url,
			{ mode: 'no-cors' }
		);

		log(response);

		// if (!response.ok) {
		// 	throw new Error(`Response status: ${response.status}`);
		// }

		//const body = await response.body();
		log(response.body);

	} catch (error) {
		console.error(error.message);
	}
}
