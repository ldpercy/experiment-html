//
//	Predicate - cut down copy of the the one in testing - this one is here to figure out some typing rules
//


/*
I'm not sure in jsdoc how to define a partial function signature like this (or if it's even possible):

	@typedef {function} Predicate
	@returns {boolean}


So trying it with classes now, and the 'test' functions seemingly have to have the exact same signatures in and extends arrangement.
I though you could add extra parameters in a function override?
Maybe not...

Pretty sure I've done it elsewhere with constructors.
Will have to re-try - I hope it hasn't worked just because I've been lax about typing the constructor fns themselves....

_Seems_ okay to do it on the constructor.
Something fundamental I'm missing here perhaps.

*/



/* Test
Base class
*/
class Test {
	constructor() {}

	/**
	 * @abstract
	 * @returns {boolean}
	 */
	test() { return false;	}

}/* Test */



/* TestABCD
Adds extra param typing to a function override
*/
export class TestABCD extends Test {

	constructor() {
		super();
	}

	/**
	 * @return {boolean}
	 * @param {any}	expression1				// Adding these param types to the 'test' fn breaks typing
	 * @param {any}	expression2				// Leaving them out actually works though - see below
	 */
	test(expression1, expression2) {
		return (expression1 === expression2);
	}

}/* TestABCD */



/* TestEFGH
Omits param typing from the function override
*/
export class TestEFGH extends Test {

	constructor() {
		super();
	}

	/**
	 * @return {boolean}
	 */
	/*
	 * @param {any}	expression1				// This case without the param types - the compiler doesn't mind this
	 * @param {any}	expression2				// But it's of limited use for anything practical where you want to specify types properly
	 */
	test(expression1, expression2) {
		return (expression1 === expression2);
	}

}/* TestEFGH */



/* TestIJKL
Move params to the constructor instead, seems to type okay...
*/
export class TestIJKL extends Test {

	/**
	 * @param {any}	expression1				// Seems okay to do it in the constructor though
	 * @param {any}	expression2				// ????
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

}/* TestIJKL */



