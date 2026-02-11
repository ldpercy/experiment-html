//
//	test.js
//



/** @type {FooParameters} */
const params = {
	id          : '1234',
	date        : new Date(),
	theme       : 'foobar',
	language    : 'Klingon',
};


/** @type {NewType} */
const foo = {
	name: '',
	date: new Date(),
	description: '',
};





//
//	Function typing
//



/** foo1
 * @type {function}
 */
function foo1() {
	const result = `foo`;
	//const result = `foo: ${a}`;
	return result;
}





/** foo2
 * @type {TestFunction}
 *
 */
function foo2(a = "abcd") {
	return `foo: ${a}`;
}





