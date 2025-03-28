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


