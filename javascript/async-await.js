console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('async-await: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	addEventListener('#button-test-1', 'click', asyncCall );

	addEventListener('#button-ac-true', 'click', ()=>asyncCondition(true) );
	addEventListener('#button-ac-false', 'click',  ()=>asyncCondition(false) );
}



/*
**	example.js
*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfterTimeout(ms) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, ms);
	});

	return promise;
}

async function asyncCall() {
	log("calling");
	const result = await resolveAfterTimeout(1000);
	log(result);
	// Expected output: "resolved"
}


//





/*
**	simple
*/

log('simple: run');


async function myFunction() {
	log('myFunction');
	return "Hello";
}

//foo = myFunction();
//log('simple:',foo);




function conditionPromise(condition) {
	const promise = new Promise(
		(resolve, reject) => {
			if (condition) {
				resolve("resolved");
			}
			else { reject('rejected') }
		}
	);

	return promise;
}

async function asyncCondition(condition) {
	log(`asyncCondition: ${condition}`);
	const result = await conditionPromise(condition);
	log(result);
	// Expected output: "resolved"
}
