
console.log('async-await: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	console.log('document DOMContentLoaded');

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
	console.log("calling");
	const result = await resolveAfterTimeout(1000);
	console.log(result);
	// Expected output: "resolved"
}


//





/*
**	simple
*/

console.log('simple: run');


async function myFunction() {
	console.log('myFunction');
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
	console.log(`asyncCondition: ${condition}`);
	const result = await conditionPromise(condition);
	console.log(result);
	// Expected output: "resolved"
}
