//
//	predicate classes
//

/*
Not having much success typing predicate functions in a flexible way, so going to try them as small classes instead and see how that works out.
*/


export {
	Predicate,
	AllEqual,
	EqualTo,
	GreaterThan,
	LessThan,
	Excepts,
}



// Perhaps should be an interface instead - not sure yet

class Predicate {
	/** @param {any} expression */
	constructor(expression) {
		this.expression = expression;
	}

	///** @param {any} expression */
	//set expression(expression) { this.expression = expression; }

	/** test
	 * @abstract
	 * @returns {boolean}
	 */
	test() { return false;	}
}/* Predicate */





class AllTrue extends Predicate {

	/** @param {any} expression */
	constructor(expression) {
		super([...arguments]);
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		const result = this.expression.every(
			(expression) => { return expression === this.expression[0] }		// Not sure if there are any weird js circumstances where equality might work between items but not against [0] or vice-versa
		);
		return result;
	}

}/* AllEqual */






class AllEqual extends Predicate {

	/** @param {any} expression */
	constructor(expression) {
		super([...arguments]);
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		const result = this.expression.every(
			(expression) => { return expression === this.expression[0] }		// Not sure if there are any weird js circumstances where equality might work between items but not against [0] or vice-versa
		);
		return result;
	}

}/* AllEqual */



class EqualTo extends Predicate {

	/**
	 * @param {any} comparator
	 * @param {any} [expression]
	 */
	constructor(comparator, expression) {
		super(expression);
		this.comparator = comparator;
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		const result = this.expression.every(
			(expression) => { return expression === this.comparator}
		);
		return result;
	}

}/* EqualTo */




class GreaterThan extends Predicate {

	/**
	 * @param {any} comparator
	 * @param {any} [expression]
	 */
	constructor(comparator, expression) {
		super(expression);
		this.comparator = comparator;
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		const result = this.expression.every(
			(expression) => { return expression > this.comparator}
		);
		return result;
	}

}/* GreaterThan */



class LessThan extends Predicate {

	/**
	 * @param {any} comparator
	 * @param {any} [expression]
	 */
	constructor(comparator, expression) {
		super(expression);
		this.comparator = comparator;
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		const result = this.expression.every(
			(expression) => { return expression < this.comparator}
		);
		return result;
	}

}/* LessThan */








class Excepts extends Predicate {
	/** @param {any} expression */
	constructor(expression) {
		super([...arguments]);
	}

	/** test
	 * @return {boolean}
	 */
	test() {
		let result = false;

		if (typeof this.expression === 'function') {

			try {
				this.expression();
			}
			catch(exception) {
				//exc = e;
				result = true
			}
		}
		else {
			// it's not a function, we can't execute it
		}

		return result;
	}


}/* Excepts */


