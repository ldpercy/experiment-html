
log = createPageLog(document.getElementById('pageLog'));



p =  Promise;

log(p)



const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("foo");
	}, 300);
  });

  promise1.then((value) => {
	console.log(value);
	// Expected output: "foo"
  });

  console.log(promise1);
  // Expected output: [object Promise]
