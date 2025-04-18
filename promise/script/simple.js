//
// simple
//


/*
// const p = new Promise();	// error, requires executor
const p = new Promise(executor);


function executor(resolveFunc, rejectFunc) {
	// Typically, some asynchronous operation that accepts a callback,
	// like the `readFile` function above
}

function resolveFunc(value) {} // call on resolved
function rejectFunc(reason) {} // call on rejected

log(p)
*/




myVal = 'initial value';
log('myVal before', myVal);

const promise1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("the resolved value");
	}, 500);
});

promise1
	.then(
		(value) => {
			log('new value', value);
			// Expected output: "foo"
			myVal = value;
			promise1Resolved()
		}
	)
	.catch(
		// do something
	)

log(promise1);

// Expected output: [object Promise]


function promise1Resolved() {
	log('promise1Resolved',myVal);
}
