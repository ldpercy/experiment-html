
//import * as exp from './export.js';

console.info('import.js');



class BaseFoo {
	constructor() {}
}

class SubFoo extends BaseFoo{
	constructor() {
		super();
	}
}





/** @param {any} a */	function cntv(a) { console.log(a.name, ':', typeof a, a); }


//let basefoo = new exp.BaseFoo;		// this works okay
//let subfoo = new exp.SubFoo;		// this works okay
let basefoo = new BaseFoo;		// this works okay
let subfoo = new SubFoo;		// this works okay



/** createInstanceOf
 * {any}, {object}		- fine
 * {unknown}			- This expression is not constructable. Type '{}' has no construct signatures.ts(2351)
 * {function}			- This expression is not constructable. Type 'Function' has no construct signatures.ts(2351)
 * {SomeClass}			- This expression is not constructable. Type 'SomeClass' has no construct signatures.ts(2351)
 *
 * @param {BaseFoo} c
 */
function createInstanceOf(c) {
	console.log(`createInstanceOf |`)
	cntv(c);
	let result = new c;			// The errors are here
	cntv(result);
	return result;
}

createInstanceOf(BaseFoo);
createInstanceOf(SubFoo);






