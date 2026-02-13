//
//	predicate classes
//

/*
Not having much success typing predicate functions in a flexible way, so going to try them as small classes instead and see how that works out.
*/


export {
	Predicate, Equal
}



// Perhaps should be an interface instead - not sure yet

class Predicate {
	constructor() {}

	/**
	 * @abstract
	 * @returns {boolean}
	 */
	test() { return false;	}
}/* Predicate */



class Equal extends Predicate {

	/**
	 * @param {any}	expression1
	 * @param {any}	expression2
	 */
	constructor(expression1, expression2) {
		super();
		this.expression1 = expression1;
		this.expression2 = expression2;
	}

	/**
	 * @return {boolean}
	 */
	test() {
		return (this.expression1 === this.expression2);
	}

}/* Equal */



/**
 * @param {Array<any>}	expressionArray
 * @return {boolean}
 */
export function allEqual(expressionArray) {
	const result = expressionArray.every(
		(expression) => { return expression === expressionArray[0] }
	);
	return result;
}


/** functionExcepts
 *
 * I highly doubt this will work... might need an eval or wrap or some other strategy
 *
 * @param {function} func
 * @return {boolean}
 */
export function functionExcepts(func) {
	let result = false;
	let exc = undefined;
	let e  = undefined;

	try {
		func();
	}
	catch(e) {
		exc = e;
		result = true
	}

	//console.log(func, result, e);

	return result;
}/* functionExcepts */




