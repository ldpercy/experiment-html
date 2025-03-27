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


myFoo = '';
log(myFoo);

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("foo");
	}, 300);
});

promise1
	.then(
		(value) => {
			log(value);
			// Expected output: "foo"
			myFoo = value;
			fooArrived()
		}
	)
	.catch(
		// do something
	)

log(promise1);

// Expected output: [object Promise]


function fooArrived() {
	log(myFoo);
}
