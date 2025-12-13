// simple
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
