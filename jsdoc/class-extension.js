//
//	Class Extension
//	Trying to figure out some class typing rules
//
//	Errors in here are intensional
//


/*

So trying it with classes now, and the 'test' functions seemingly have to have the exact same signatures in and extends arrangement.
I though you could add extra parameters in a function override?
Maybe not...

Pretty sure I've done it elsewhere with constructors.
Will have to re-try - I hope it hasn't worked just because I've been lax about typing the constructor fns themselves....

_Seems_ okay to do it on the constructor.
Something fundamental I'm missing here perhaps.

*/



class BaseClass {

	/**
	 * @param {number} id
	 */
	constructor(id) {
		this.id = id;
	}

	//
	//	base method signatures
	//	a whole bunch little base methods of different kinds to see what happens when I try to override them
	//

	/* no types, no params, no return */
	noTypeNoParamNoReturn1() { }
	noTypeNoParamNoReturn2() { }
	noTypeNoParamNoReturn3() { }
	noTypeNoParamNoReturn4() { }

	/* no types, one param, no return */
	noTypeOneParamNoReturn1(p) {}
	noTypeOneParamNoReturn2(p) {}
	noTypeOneParamNoReturn3(p) {}
	noTypeOneParamNoReturn4(p) {}

	/* no types, no param, return boolean */
	noTypeNoParamNoReturnBool1() { return false; }
	noTypeNoParamNoReturnBool2() { return false; }
	noTypeNoParamNoReturnBool3() { return false; }
	noTypeNoParamNoReturnBool4() { return false; }



	/* no types, 1 arg, no return */
	method1(s) { }

	/** @returns {string} */
	method2(s) { return s;	}

	/** @returns {string} */
	method3(s) { return s;	}

}/* BaseClass */



/* SubclassABCD
Adds extra param typing to a function override
*/
export class SubclassABCD extends BaseClass {


	/* trying out a few different super call shorthands here as well - many fail, but could be made to work in some circumstances
	For these I'm trying against the one-parameter version of BaseClass's constructor
	*/
	constructor() {
		//super();					//	Expected 1 arguments, but got 0.ts(2554)
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This one works for this particular case
	}

	//
	//	method overrides - noTypeNoParamNoReturn
	//
	/**   */					noTypeNoParamNoReturn1(p) { }					// With no typing changing the param list is fine
	/**   */					noTypeNoParamNoReturn2()  { return false; }		// With no typing changing the return value is fine
	/** @param {any} p */		noTypeNoParamNoReturn3(p) { }					// Specifying params breaks the method signature
	/** @return {boolean} p */	noTypeNoParamNoReturn4()  { return false; }		// However you *can* specify a return type here... seems inconsistent


	//
	//	method overrides - noTypeOneParamNoReturn
	//
	noTypeOneParamNoReturn1() {}					// taken out the param, no problem with this
	noTypeOneParamNoReturn2(p1, p2) {}				// added a param, no problem with this either


	/**
	 * @return {boolean}
	 * @param {any}	expression1				// Adding these param types to method1 breaks typing
	 * @param {any}	expression2				// Leaving them out actually works though - see below
	 */
	method1(expression1, expression2) {
		return (expression1 === expression2);
	}

}/* SubclassABCD */



/* SubclassEFGH
Omits param typing from the function override
*/
export class SubclassEFGH extends BaseClass {

	constructor() {
		super(arguments[0]);
	}

	/**
	 * @return {boolean}
	 */
	/*
	 * @param {any}	expression1				// This case without the param types - the compiler doesn't mind this
	 * @param {any}	expression2				// But it's of limited use for anything practical where you want to specify types properly
	 */
	method1(expression1, expression2) {
		return (expression1 === expression2);
	}

}/* SubclassEFGH */



/* SubclassIJKL
Move params to the constructor instead, seems to type okay...
*/
export class SubclassIJKL extends BaseClass {

	/**
	 * @param {object}	expression1				// I'd have thought this would be a typing error....
	 * @param {object}	expression2				//
	 */
	constructor(expression1, expression2) {
		super(expression1);						// this *should* be a type error.... depends on the exact types involved though - some unexpected things might be castable
		this.expression1 = expression1;
		this.expression2 = expression2;
	}

	/**
	 * @return {boolean}
	 */
	method1() {
		return (this.expression1 === this.expression2);
	}

}/* SubclassIJKL */



