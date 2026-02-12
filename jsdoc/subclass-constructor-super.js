//
// Subclass constructor super call
//
// The super call is mandatory in a subclass constructor
//
// Trying out a few different super call shorthands - many fail, but some can be made to work in some circumstances
//

export {}	// here so that the compiler interprets the file as a module to prevent name collisions


// No types, no params:
//
class Base0 {
	constructor() { }
}

class Sub0 extends Base0 {

	constructor() {
		super();					// This is fine
		//super(arguments);			//	Expected 0 arguments, but got 1.ts(2554)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Expected 0 arguments, but got 1.ts(2554)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		//	Expected 0 arguments, but got 1.ts(2554)
	}

}/* Sub0 */



// One {any} constructor parameter:
//
class Base1 {

	/**
	 * @param {any} p
	 */
	constructor(p) {
		this.p = p;
	}

}/* Base1 */


class Sub1 extends Base1 {

	constructor() {
		super();					// This is fine
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		//super(arguments[0]);		// This one works for this particular case
	}

}/* Sub1 */





// One {string} constructor parameter:
//
class BaseS {

	/**
	 * @param {string} s
	 */
	constructor(s) {
		this.s = s;
	}

}/* BaseS */


class SubS0 extends BaseS {

	constructor() {
		//super();					//	Expected 1 arguments, but got 0.ts(2554)
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This one works for this particular case
	}

}/* SubS0 */



/* SubS1
*/
class SubS1 extends BaseS {

	constructor(s) {	// similar to above
		//super();					//	Expected 1 arguments, but got 0.ts(2554)
		//super(s);					// This is fine
		//super(arguments);			//	Argument of type 'IArguments' is not assignable to parameter of type 'string'.ts(2345)
		//super(...arguments);		//	A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)	;	Type 'IArguments' is not an array type.ts(2461)
		//super([...arguments]);	//	Argument of type 'any[]' is not assignable to parameter of type 'string'.ts(2345)			;	Type 'IArguments' is not an array type.ts(2461)
		super(arguments[0]);		// This is also fine
	}

}/* SubS1 */




