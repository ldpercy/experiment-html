//
// testing
//

import * as predicateLibrary from './predicate.js';
export { Test }


/** testExpressionArray
 * @param {predicateLibrary.Predicate} predicate
 * @param {array} expressionArray
 * @return {TestResult}
 */
export function testExpressionArray( predicate, expressionArray ) {
	console.log('predicate:', typeof predicate, predicate);

	/** @type {TestResult} */
	const result = {}

	result.test = expressionArray.map(
		(element) => {
			//console.log(element);

			//let test = new predicate;					// This expression is not constructable. Type 'Predicate' has no construct signatures.ts(2351)
			//let test = new predicate();

			predicate.expression = element;
			const elementResult = {
				result : predicate.test(),
				test   : element,
			};

			return elementResult ;
		}
	);

	return result;
}/* testExpressionArray */




/** groupTest
 * @param {string} desc
 * @param {predicateLibrary.Predicate} predicate
 * @param {array} expressionArray
 */
export function groupTest(desc, predicate, expressionArray) {
	const test = new Test(desc, predicate, expressionArray);
	test.run();
	console.groupCollapsed(`[${passFail(test.pass)}] ${desc}`);
	console.dir(test.result);
	console.log(passFail(test.pass));
	console.groupEnd();
}/* groupTest */


/** @param {boolean} b */
function passFail(b){
	return (b) ? 'pass' : 'fail';
}


/* * testArray
 * @param {function} predicate
 * @param {array} array
 * /
export function testArray(predicate, array) {
	//let result = true;
	console.log('predicate:', predicate.name);

	const result = array.map(
		(element) => {
			const elementResult = {
				result : predicate(element),
				test   : element,
			};

			return elementResult ;
			// if (predicate(element))
			// {
			// 	console.log('true', element);
			// }
			// else {
			// 	console.log('false:', element);
			// }
		}
	);

	console.dir(result);

	return result;
}/ * testArray */






class Test {

	/** @type {string} */ 						desc;
	/** @type {predicateLibrary.Predicate} */	predicate;
	/** @type {Array<any>}*/					expressionArray;
	/** @type {Array<any>} */					#result;
	/**	@type {boolean} */						#pass;


	/**
	 * @param {string} 						desc
	 * @param {predicateLibrary.Predicate} 	predicate
	 * @param {Array<any>}					expressionArray
	 */
	constructor(
			desc = '',
			predicate = new predicateLibrary.NoneFalse(),
			expressionArray=[]) {
		this.desc = desc;
		this.predicate = predicate;
		this.expressionArray = expressionArray;
	}

	get result() { return this.#result; }

	get summary() { return ``}


	run() {

		this.#result = this.expressionArray.map(
			(expression) => {

				this.predicate.expression = expression;
				const expressionResult = {
					predicate	: this.predicate.test(),
					expression	: `${expression}`,
				};

				return expressionResult ;
			}
		);
		return this.#result;
	}/* run */

	/** @return {boolean} */
	get pass() {
		const result = this.#result.every((expression) => { expression.predicate === true });	// this is still a 'none false' condition
		return result;
	}


}/* Test */


