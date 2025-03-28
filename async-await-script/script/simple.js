/* Basics
*/

log('simple: run');


async function myFunction() {
	log('myFunction');
	return "Hello";
}


foo = myFunction();

log('async-await2:',foo);

// async functions always return promises

