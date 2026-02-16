//
// testing
//

import * as predicate from './predicate.js';


/** testExpressionArray
 * @param {predicate.Predicate} predicate
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
 * @param {predicate.Predicate} predicate
 * @param {array} expressionArray
 */
export function groupTest(desc, predicate, expressionArray) {
	const testResult = testExpressionArray(predicate, expressionArray);
	console.groupCollapsed(desc);
	console.dir(testResult);
	console.groupEnd();
}/* groupTest */





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

	/** {array<TestResult>|boolean} */
	predicate;
	expression;
	test;



	constructor() {}


	get pass() {
		let result;
 		if (typeof this.test === 'boolean') {
			result = this.test;
		}
		else {
			result = this.test.every((element) => { element.pass === true })
		}
		return result;
	}



}/* TestResult */


