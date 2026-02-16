



/** predicate
 *
 * I'm not sure in jsdoc how to define a partial function signature like this:
 *
 * @typedef {function} Predicate
 * @returns {boolean}
 */






/**
 * @param {any}	expression1
 * @param {any}	expression2
 * @return {boolean}
 */
export function areEqual(expression1, expression2) {
	return (expression1 === expression2);
}




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




/*
export function isFunction
 */