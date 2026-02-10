



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


/** excepts
 *
 * I highly doubt this will work... might need an eval or wrap or some other strategy
 *
 * @param {any}	expression
 * @return {boolean}
 */
export function excepts(expression) {

	let result = false;

	try {
		expression;
	}
	catch(e) {
		result = true
	}

	return result;
}

