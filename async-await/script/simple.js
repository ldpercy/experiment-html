/* Basics
*/

log('async-await2: run');


async function myFunction() {
	log('myFunction');
	return "Hello";
}


foo = myFunction();

log('async-await2:',foo);

// async functions always return promises

